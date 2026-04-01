import { useEffect, useState } from "react";
import { addScore, getProfile, subscribe, runDraw } from "../services/api";
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
 
 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState("");
  const [user, setUser] = useState(null);
 const [drawResult, setDrawResult] = useState(null);
  const token = localStorage.getItem("token");

  const loadUser = async () => {
  const res = await getProfile(token);
  setUser(res.data);
};

  useEffect(() => {
    loadUser();
  }, []);

  const handleAdd = async () => {
    await addScore(score, token);
    loadUser();
  };

  const handleSubscribe = async (plan) => {
    try {
      await subscribe(plan, token);
      alert("Subscription Activated ✅");
      loadUser();
    } catch (err) {
      console.log(err);
    }
  };

 const handleDraw = async () => {
  try {
    const res = await runDraw();

    console.log("DRAW RESULT:", res.data);

    setDrawResult(res.data); // ✅ THIS LINE IS IMPORTANT
    loadUser();

  } catch (err) {
    console.log(err);
  }
};
if (!user) {
  return (
    <div className="min-h-screen bg-[#061a14] text-white flex items-center justify-center">
      Loading...
    </div>
  );
}
 return (
  <div className="min-h-screen bg-[#061a14] text-white p-8">

    {/* TITLE */}
    <h1 className="text-4xl text-center mb-10 font-light">
      Your Dashboard
    </h1>

    {/* ADMIN BUTTON */}
    {user?.role === "admin" && (
   <button style={{ background: "red", padding: "20px" }}>
  TEST BUTTON
</button>)}
    
  

    {/* MAIN CARD */}
    <div className="max-w-5xl mx-auto bg-[#0c2a22] p-8 rounded-2xl">

      {/* SCORE INPUT */}
      <div className="flex gap-3 mb-6">
        <input
          type="number"
          min="1"
          max="45"
          placeholder="Enter score"
          className="flex-1 bg-transparent border border-gray-700 p-3 rounded-lg"
          onChange={(e) => setScore(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-green-500 text-black px-5 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* SCORES */}
      <h3 className="text-gray-400 mb-2">Your Scores</h3>
      <div className="flex flex-wrap gap-2 mb-6">
       {user?.scores?.map((s, i) => (
          <span
            key={i}
            className="bg-green-500 text-black px-3 py-1 rounded-full"
          >
            {s.value}
          </span>
        ))}
      </div>

      {/* SUBSCRIPTION */}
      <h3 className="text-gray-400 mb-2">Subscription</h3>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleSubscribe("monthly")}
          className="flex-1 bg-green-600 py-2 rounded-lg"
        >
          Monthly ₹500
        </button>

        <button
          onClick={() => handleSubscribe("yearly")}
          className="flex-1 bg-purple-600 py-2 rounded-lg"
        >
          Yearly ₹2000
        </button>
      </div>

      {/* DRAW BUTTON */}
      <button
        onClick={handleDraw}
        className="w-full bg-red-500 py-3 rounded-lg mb-6"
      >
        Run Draw 🎯
      </button>
{drawResult && (
  <div className="bg-[#061a14] p-4 rounded-lg mb-6">
    
    <h3 className="text-yellow-400 mb-2">🎯 Draw Numbers</h3>
    <div className="flex gap-2 mb-3">
      {drawResult.numbers.map((n, i) => (
        <span key={i} className="bg-red-500 px-3 py-1 rounded-full">
          {n}
        </span>
      ))}
    </div>

    <h3 className="text-green-400 mb-2">🏆 Winners</h3>

    {drawResult.winners.length === 0 ? (
      <p>No winners 😢</p>
    ) : (
      drawResult.winners.map((w, i) => (
        <p key={i}>
          Match: {w.matchCount} | ₹{w.reward}
        </p>
      ))
    )}

  </div>
)}
      {/* STATS GRID */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-[#061a14] p-4 rounded-lg">
          <p className="text-gray-400 text-sm">TOTAL WON</p>
          <h2 className="text-yellow-400 text-xl">
            ₹{user?.winnings || 0}
          </h2>
        </div>

        <div className="bg-[#061a14] p-4 rounded-lg">
          <p className="text-gray-400 text-sm">STATUS</p>
          <h2 className="text-green-400 text-xl">
            Active
          </h2>
        </div>

      </div>

      {/* LEADERBOARD */}
      <button
        onClick={() => navigate("/leaderboard")}
        className="mt-6 w-full bg-yellow-500 text-black py-2 rounded-lg"
      >
        View Leaderboard 🏆
      </button>

    </div>
  </div>
);

}  





