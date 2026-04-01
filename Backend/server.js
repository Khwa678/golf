import express from "express";
import drawRoutes from "./routes/draw.js";
import leaderboardRoutes from "./routes/leaderboard.js";

const app = express();

app.use(express.json());

// ✅ VERY IMPORTANT
app.use("/api/draw", drawRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});