import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 🏆 LEADERBOARD
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ winnings: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json("Error fetching leaderboard");
  }
});

export default router;