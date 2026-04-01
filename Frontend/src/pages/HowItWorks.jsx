export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#061a14] text-white p-10">

      {/* TITLE */}
      <h1 className="text-4xl text-center mb-4">How It Works</h1>
      <p className="text-gray-400 text-center mb-10">
        Simple steps to play, give, and win 🎯
      </p>

      {/* STEPS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* STEP 1 */}
        <div className="bg-[#0c2a22] p-6 rounded-xl text-center">
          <h2 className="text-green-400 text-xl mb-2">1. Subscribe</h2>
          <p className="text-gray-400">
            Choose a monthly or yearly plan to get started with exclusive access.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="bg-[#0c2a22] p-6 rounded-xl text-center">
          <h2 className="text-green-400 text-xl mb-2">2. Add Scores</h2>
          <p className="text-gray-400">
            Enter your latest 5 scores to participate in the draw.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="bg-[#0c2a22] p-6 rounded-xl text-center">
          <h2 className="text-green-400 text-xl mb-2">3. Win Rewards</h2>
          <p className="text-gray-400">
            Match numbers in the draw and win exciting cash prizes 💰
          </p>
        </div>

      </div>

      {/* EXTRA SECTION */}
      <div className="text-center mt-16">
        <h2 className="text-2xl mb-4 text-green-400">Play with Purpose ❤️</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Every game you play contributes to meaningful causes. Win rewards while making a real-world impact.
        </p>
      </div>

    </div>
  );
}