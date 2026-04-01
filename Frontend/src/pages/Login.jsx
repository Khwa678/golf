import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-gray-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-80">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4">

          <input
            placeholder="Email"
            className="border p-3 rounded-lg"
            onChange={e=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
            onChange={e=>setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
          >
            Login
          </button>

        </div>

        <p className="text-sm text-center mt-4">
          Don't have account?
          <span
            onClick={() => navigate("/register")}
            className="text-purple-500 cursor-pointer ml-1"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}