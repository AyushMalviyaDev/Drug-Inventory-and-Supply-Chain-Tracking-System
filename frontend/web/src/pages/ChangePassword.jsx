import { useState } from "react";
import { api } from "../api";

export default function ChangePassword() {

  const [form, setForm] = useState({
    old_password: "",
    password: "",
    password2: ""
  });

  const [message, setMessage] = useState("");
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
  setMessage("");

  try {
    await api.post("user/change-password/", form);

    // ✅ show success message
    setMessage("Password updated successfully ✅");

    // 🔥 wait before logout
    setTimeout(() => {
      localStorage.clear();
      navigate("/login");
    }, 1500);

  } catch (err) {
    setError(
      err.response?.data?.error || "Failed to update password ❌"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl p-8">
        
        <h2 className="text-xl font-semibold text-[#111827] mb-6 text-center">
          Change Password
        </h2>

        {message && <p className="text-[#22C55E] text-sm mb-4">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="password"
            name="old_password"
            placeholder="Old Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#22C55E]"
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#22C55E]"
          />

          <input
            type="password"
            name="password2"
            placeholder="Confirm New Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#22C55E]"
          />

          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white py-2 rounded-lg"
          >
            Update Password
          </button>
        </form>

      </div>
    </div>
  );
}