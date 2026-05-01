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

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center text-black mb-3">
          Verify OTP
        </h2>

        <p className="text-sm text-center text-gray-500 mb-6">
          Enter the 6-digit code sent to <br />
          <span className="font-medium text-black">{email}</span>
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleVerify}>

          {/* OTP Inputs */}
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
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            ))}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Verify
          </button>
        </form>

        {/* Resend */}
        <p className="text-sm text-center mt-6 text-gray-500">
          Didn’t receive OTP?{" "}
          <span className="text-black cursor-pointer hover:underline">
            Resend
          </span>
        </p>

      </div>
    </div>
  );
}