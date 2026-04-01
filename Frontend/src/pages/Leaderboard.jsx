import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await axios.get("http://localhost:5000/api/leaderboard");
      setUsers(res.data);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#061a14] text-white p-8">

      <h1 className="text-4xl text-center mb-10">
        Leaderboard 🏆
      </h1>

      <div className="max-w-4xl mx-auto bg-[#0c2a22] p-6 rounded-xl">

        {users.map((u, i) => (
          <div key={u._id} className="flex justify-between border-b py-3">
            <span>#{i + 1} {u.email}</span>
            <span>₹{u.winnings}</span>
          </div>
        ))}

      </div>
    </div>
  );
}