import { useState } from "react";

export default function Draw() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);
  const [spinning, setSpinning] = useState(false);

  const runDraw = () => {
    setSpinning(true);

    let interval = setInterval(() => {
      setNumbers(
        Array.from({ length: 5 }, () =>
          Math.floor(Math.random() * 45) + 1
        )
      );
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#061a14] text-white p-10 text-center">

      <h1 className="text-3xl mb-6">🎯 Lottery Draw</h1>

      <div className="flex justify-center gap-4 mb-6">
        {numbers.map((n, i) => (
          <div
            key={i}
            className={`w-14 h-14 flex items-center justify-center rounded-full text-black text-xl font-bold ${
              spinning ? "bg-yellow-400 animate-pulse" : "bg-green-500"
            }`}
          >
            {n}
          </div>
        ))}
      </div>

      <button
        onClick={runDraw}
        className="bg-green-500 px-6 py-2 rounded-lg text-black"
      >
        Run Draw 🎰
      </button>

    </div>
  );
}