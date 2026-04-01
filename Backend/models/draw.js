import mongoose from "mongoose";

const drawSchema = new mongoose.Schema({
  numbers: [Number], // generated numbers
  date: { type: Date, default: Date.now },

  winners: [
    {
      userId: String,
      matchCount: Number
    }
  ]
});

export default mongoose.model("Draw", drawSchema);
