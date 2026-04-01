export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#061a14] text-white p-10">

      {/* TITLE */}
      <h1 className="text-4xl text-center mb-4">Pricing 💰</h1>
      <p className="text-gray-400 text-center mb-10">
        Choose your plan and start playing
      </p>

      {/* PLANS */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* MONTHLY */}
        <div className="bg-[#0c2a22] p-8 rounded-2xl text-center shadow-lg">
          <h2 className="text-green-400 text-2xl mb-4">Monthly</h2>
          <p className="text-4xl font-bold mb-4">₹500</p>

          <ul className="text-gray-400 mb-6">
            <li>✔ Access to all draws</li>
            <li>✔ Add scores anytime</li>
            <li>✔ Win rewards</li>
          </ul>

          <button className="w-full bg-green-500 text-black py-2 rounded-lg">
            Choose Plan
          </button>
        </div>

        {/* YEARLY */}
        <div className="bg-[#0c2a22] p-8 rounded-2xl text-center shadow-lg border border-green-500">
          <h2 className="text-green-400 text-2xl mb-4">Yearly ⭐</h2>
          <p className="text-4xl font-bold mb-4">₹2000</p>

          <ul className="text-gray-400 mb-6">
            <li>✔ Everything in Monthly</li>
            <li>✔ Save more money</li>
            <li>✔ Priority access</li>
          </ul>

          <button className="w-full bg-green-500 text-black py-2 rounded-lg">
            Best Value
          </button>
        </div>

      </div>

      {/* NOTE */}
      <p className="text-center text-gray-500 mt-10">
        Secure payments · Cancel anytime
      </p>

    </div>
  );
}