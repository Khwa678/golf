import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#061a14] text-white min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold">⛳ GolfGives</h1>

       <div className="flex gap-8 text-gray-300">

  <p
    onClick={() => navigate("/how-it-works")}
    className="cursor-pointer hover:text-green-400"
  >
    How It Works
  </p>

  <p
    onClick={() => navigate("/charities")}
    className="cursor-pointer hover:text-green-400"
  >
    Charities
  </p>

  <p
    onClick={() => navigate("/draw")}
    className="cursor-pointer hover:text-green-400"
  >
    Draw & Prizes
  </p>

  <p
    onClick={() => navigate("/pricing")}
    className="cursor-pointer hover:text-green-400"
  >
    Pricing
  </p>

</div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="border border-green-500 px-4 py-2 rounded-lg"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="text-center mt-20 px-6">

        <p className="text-green-400 mb-4 border border-green-500 inline-block px-4 py-1 rounded-full">
          PLAY · GIVE · WIN
        </p>

        <h1 className="text-6xl font-light">
          Golf with <span className="text-green-400 italic">Purpose.</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Track your scores, enter draws, and make a real difference —
          all in one platform.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate("/register")}
            className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Start Playing →
          </button>

         <button
  onClick={() => navigate("/how-it-works")}
  className="border border-green-500 px-6 py-3 rounded-lg"
>
  See How It Works
</button>
        </div>
      </div>

      {/* STATS */}
      <div className="flex justify-center mt-16">
        <div className="bg-[#0c2a22] rounded-2xl p-8 flex gap-16 shadow-lg">

          <div className="text-center">
            <p className="text-green-400 text-2xl font-bold">£14,200</p>
            <p className="text-gray-400">Jackpot</p>
          </div>

          <div className="text-center">
            <p className="text-green-400 text-2xl font-bold">14,820+</p>
            <p className="text-gray-400">Players</p>
          </div>

          <div className="text-center">
            <p className="text-green-400 text-2xl font-bold">£119k+</p>
            <p className="text-gray-400">Charity</p>
          </div>

        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="text-center mt-20">

        <p className="text-green-400 border border-green-500 inline-block px-4 py-1 rounded-full">
          SIMPLE & TRANSPARENT
        </p>

        <h2 className="text-4xl mt-6">How It Works</h2>

        <div className="grid grid-cols-3 gap-6 px-20 mt-10">

          {[
            {title:"Subscribe",desc:"Choose a plan"},
            {title:"Enter Scores",desc:"Add last 5 scores"},
            {title:"Enter Draw",desc:"Win prizes"},
          ].map((item,i)=>(
            <div key={i} className="bg-[#0c2a22] p-6 rounded-xl">
              <h3 className="text-green-400 text-xl">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* DRAW SECTION */}
      <div className="px-20 mt-20">

        <div className="bg-[#0c2a22] p-8 rounded-2xl flex justify-between">

          <div>
            <h2 className="text-3xl mb-4">April Draw</h2>

            <div className="flex gap-4">
              {[18,27,33,41,22].map((n,i)=>(
                <div key={i} className="bg-green-500 text-black w-12 h-12 flex items-center justify-center rounded-full">
                  {n}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-green-400 text-2xl">£14,200</p>
            <p className="text-gray-400">Total Pool</p>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-20 border-t border-gray-800 p-10 text-center text-gray-400">
        © 2026 GolfGives. All rights reserved.
      </div>

    </div>
  );
}