import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// 🧑‍💼 GET ALL USERS (ADMIN)
router.get("/users", auth, async (req, res) => {
  try {
    const admin = await User.findById(req.userId);

    if (admin.role !== "admin") {
      return res.status(403).json("Access denied");
    }

    const users = await User.find(); // ✅ fetch all users

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error");
  }
});

export default router;