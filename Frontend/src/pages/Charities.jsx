export default function Charities() {
  const charities = [
    {
      name: "Education for All",
      desc: "Providing education resources to underprivileged children.",
      amount: "₹50,000 raised",
    },
    {
      name: "Health Support",
      desc: "Helping families with medical expenses and emergency care.",
      amount: "₹32,000 raised",
    },
    {
      name: "Food Drive",
      desc: "Delivering meals to people in need across communities.",
      amount: "₹21,500 raised",
    },
  ];

  return (
    <div className="min-h-screen bg-[#061a14] text-white p-10">

      {/* TITLE */}
      <h1 className="text-4xl text-center mb-4">Charities</h1>
      <p className="text-gray-400 text-center mb-10">
        Play, win, and give back to meaningful causes ❤️
      </p>

      {/* CHARITY CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {charities.map((c, i) => (
          <div
            key={i}
            className="bg-[#0c2a22] p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-green-400 text-xl mb-2">{c.name}</h2>
            <p className="text-gray-400 mb-4">{c.desc}</p>

            <p className="text-yellow-400 font-semibold">{c.amount}</p>
<button onClick={() => alert("Thank you for supporting ❤️")}></button>
            <button className="mt-4 w-full bg-green-500 text-black py-2 rounded-lg">
              Support ❤️
            </button>
          </div>
        ))}

      </div>

      {/* IMPACT SECTION */}
      <div className="text-center mt-16">
        <h2 className="text-2xl text-green-400 mb-4">
          Your Impact Matters 🌍
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Every time you play, a portion goes directly to charities.
          Together, we are making a real difference.
        </p>
      </div>

    </div>
  );
}