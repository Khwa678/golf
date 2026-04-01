import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name, email, password
      });

      alert("User Registered ✅");
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <div className="flex flex-col gap-4">

          <input
            placeholder="Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={e=>setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={e=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={e=>setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Register
          </button>

        </div>

        {/* 🔗 Login link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => window.location.href = "/"}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}



