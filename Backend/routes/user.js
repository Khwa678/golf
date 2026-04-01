import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// ✅ SUBSCRIBE ROUTE
router.post("/subscribe", auth, async (req, res) => {
  const { plan } = req.body;

  const user = await User.findById(req.userId);

  user.subscription.status = "active";
  user.subscription.plan = plan;

  const days = plan === "yearly" ? 365 : 30;

  user.subscription.expiry = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  );

  await user.save();

  res.json({ message: "Subscription activated", user });
});
// 🏆 LEADERBOARD
router.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find()
      .sort({ winnings: -1 }) // highest first
      .limit(10); // top 10

    res.json(users);
  } catch (err) {
    res.status(500).json("Error fetching leaderboard");
  }
});

// ✅ ADD SCORE
router.post("/score", auth, async (req, res) => {
  const user = await User.findById(req.userId);

  if (user.subscription.status !== "active") {
    return res.status(403).json("Subscribe first");
  }

  if (user.scores.length >= 5) {
    user.scores.shift();
  }

  user.scores.push({
    value: req.body.value,
    date: new Date()
  });

  await user.save();
  res.json(user.scores);
});

// ✅ GET PROFILE
router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});

export default router;