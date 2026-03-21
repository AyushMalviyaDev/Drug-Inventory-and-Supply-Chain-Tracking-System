import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
  "http://127.0.0.1:8000/api/user/login/",
  form
);

// 🔐 Store both tokens
localStorage.setItem("access", res.data.access);
localStorage.setItem("refresh", res.data.refresh);

// 🔥 Redirect
navigate("/dashboard");

    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">
        
        <h2 className="text-2xl font-bold text-[#111827] text-center mb-6">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
          />

          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-[#6B7280] text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#22C55E] font-medium cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}