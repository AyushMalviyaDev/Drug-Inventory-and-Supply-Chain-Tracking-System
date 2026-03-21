import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
    tc: false
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/user/register/",
        form
      );

      // 🔥 redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      setError("Registration failed. Check inputs.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">
        
        <h2 className="text-2xl font-bold text-[#111827] text-center mb-6">
          Create Account
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
            type="text"
            name="name"
            placeholder="Full Name"
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

          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
          />

          <label className="flex items-center gap-2 text-sm text-[#6B7280]">
            <input type="checkbox" name="tc" onChange={handleChange} />
            Accept Terms & Conditions
          </label>

          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-[#6B7280] text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#22C55E] font-medium cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}