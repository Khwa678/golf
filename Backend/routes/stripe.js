import express from "express";
import Stripe from "stripe";
import auth from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET);

// CREATE CHECKOUT SESSION
router.post("/create-checkout", auth, async (req, res) => {
  const { plan } = req.body;

  const price = plan === "yearly" ? 2000 : 500;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: `Subscription (${plan})`
          },
          unit_amount: price * 100
        },
        quantity: 1
      }
    ],

    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,

    metadata: {
      userId: req.userId,
      plan: plan
    }
  });

  res.json({ url: session.url });
});

export default router;