import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  subscription: {
    status: { type: String, default: "inactive" },
    plan: String,
    expiry: Date
  },

  scores: [
    {
      value: Number,
      date: Date
    }
  ],

  charity: {
    name: String,
    percentage: { type: Number, default: 10 }
  },

  winnings: { type: Number, default: 0 },

  role: { type: String, default: "user" }
});

export default mongoose.model("User", userSchema);