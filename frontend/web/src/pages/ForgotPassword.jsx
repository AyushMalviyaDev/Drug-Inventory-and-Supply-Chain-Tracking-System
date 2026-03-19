import React, { useState } from "react";
import "./style.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/forgot-password/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (data.error) {
      setMessage({ type: "error", text: data.error });
    } else {
      setMessage({ type: "success", text: "Reset link sent to your email" });
    }
  };

  return (
    <div className="center">
      <h1>Reset Password</h1>

      {message && (
        <center>
          <h4 style={{ color: message.type === "error" ? "firebrick" : "dodgerblue" }}>
            {message.text}
          </h4>
        </center>
      )}

      <div className="signup_link">
        Enter your email to reset password
      </div>

      <form onSubmit={handleSubmit}>

        <div className="txt_field">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
          <label>Email</label>
        </div>

        <input type="submit" value="Reset Password" />

        <div className="signup_link">
          Not a member? <a href="/register">Signup</a>
          <p>Remember your Password? <a href="/login">Login</a></p>
        </div>

      </form>
    </div>
  );
}

export default ForgotPassword;