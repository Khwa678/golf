import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const loadUsers = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/admin/users", {
      headers: {
        authorization: token
      }
    });

    console.log("USERS:", res.data); // 🔥 debug

    setUsers(res.data);
  } catch (err) {
    console.log("ADMIN ERROR:", err.response?.data || err.message);
  }
};

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin Panel
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">

        {users.length === 0 ? (
          <p className="text-center text-gray-500">
            No users found
          </p>
        ) : (
          users.map((u) => (
            <div
              key={u._id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{u.email}</span>
              <span className="font-bold text-green-600">
                ₹{u.winnings}
              </span>
            </div>
          ))
        )}

      </div>
    </div>
  );
}