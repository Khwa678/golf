import express from "express";
import Draw from "../models/Draw.js";
import User from "../models/User.js"; // ✅ FIXED IMPORT

const router = express.Router();

// 🎯 RUN DRAW
router.post("/run", async (req, res) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(400).json("No users found");
    }

    // 🎲 GENERATE RANDOM NUMBERS (1–10 for better matching demo)
    const numbers = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 10) + 1
    );

    let winners = [];

    // 🔁 LOOP USERS
    for (let user of users) {
      if (!user.scores || user.scores.length === 0) continue;

      const userScores = user.scores.map((s) => s.value);

      // 🎯 MATCH COUNT
      let matchCount = userScores.filter((score) =>
        numbers.includes(score)
      ).length;

      // 🏆 REWARD LOGIC
      if (matchCount >= 1) {
        let reward = 0;

        if (matchCount === 1) reward = 50;
        else if (matchCount === 2) reward = 100;
        else if (matchCount === 3) reward = 300;
        else if (matchCount === 4) reward = 700;
        else if (matchCount >= 5) reward = 1000;

        // 💰 UPDATE USER WINNINGS
        user.winnings = (user.winnings || 0) + reward;
        await user.save();

        winners.push({
          userId: user._id,
          matchCount,
          reward,
        });
      }
    }

    // 📝 SAVE DRAW RESULT
    const draw = await Draw.create({
      numbers,
      winners,
    });

    res.json(draw);

  } catch (err) {
    console.log(err);
    res.status(500).json("Draw failed");
  }
});

export default router;