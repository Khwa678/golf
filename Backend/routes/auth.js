import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ✅ TEST USER ROUTE
router.post("/test-user", async (req, res) => {
  const user = await User.create({
    name: "test",
    email: "test@gmail.com",
    password: await bcrypt.hash("123456", 10),
    role: "admin" // ✅ ADD THIS
  });

  res.json(user);
});

// ✅ REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role: "admin" // ✅ ADD THIS (temporary)
  });

  res.json(user);
});

// ✅ LOGIN

// ✅ LOGIN (FIXED)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).lean(); // ✅ IMPORTANT
  if (!user) return res.status(400).json("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token, user }); // now role will come properly
});

 

export default router;