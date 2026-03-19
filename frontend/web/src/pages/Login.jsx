  import React, { useState } from "react";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await response.json();

    if (data.error) {
      setMessage({ type: "error", text: data.error });
    } else {
      setMessage({ type: "success", text: "Login successful" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Login
        </h1>

        {message && (
          <p
            className={`text-center mb-4 ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        <div className="text-center text-sm mt-6 space-y-2">

          <p>
            Not a member?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Signup
            </a>
          </p>

          <p>
            Forgot your password?{" "}
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Reset Password
            </a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;