import express from "express";
import drawRoutes from "./routes/draw.js";
import leaderboardRoutes from "./routes/leaderboard.js";
import path from "path";
const app = express();

app.use(express.json());

// ✅ VERY IMPORTANT
app.use("/api/draw", drawRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
// serve frontend
app.use(express.static(path.join(process.cwd(), "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});