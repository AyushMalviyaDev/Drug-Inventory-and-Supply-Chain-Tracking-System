import { useState, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const email =
    location.state?.email || localStorage.getItem("email");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const [error, setError] = useState("");

  // 🔢 Handle input change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next box
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // ⬅️ Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // 📋 Handle paste
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);

    newOtp.forEach((val, i) => {
      if (inputs.current[i]) {
        inputs.current[i].value = val;
      }
    });
  };

  
  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    const finalOtp = otp.join("");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/user/verify-email/",
        { email, otp: finalOtp }
      );

      alert("Email verified successfully");
      navigate("/login");

    } catch (err) {
      setError(err.response?.data?.error || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-8">

        <h2 className="text-2xl font-bold text-center mb-4 text-[#111827]">
          Verify OTP
        </h2>

        <p className="text-sm text-center text-gray-500 mb-6">
          Enter the 6-digit code sent to <br />
          <span className="font-medium text-black">{email}</span>
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleVerify}>

          {/* 🔥 OTP Boxes */}
          <div
            className="flex justify-between mb-6"
            onPaste={handlePaste}
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Verify
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-500">
          Didn’t receive OTP?{" "}
          <span className="text-indigo-600 cursor-pointer">
            Resend
          </span>
        </p>

      </div>
    </div>
  );
}