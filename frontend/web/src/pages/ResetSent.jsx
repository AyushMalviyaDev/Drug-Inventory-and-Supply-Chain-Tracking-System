import React from "react";
import "./style.css";

function ResetSent() {
  return (
    <div className="center">
      <h1>Reset Sent</h1>

      <center>
        <div className="signup_link" style={{ padding: "10px" }}>
          A password reset link has been sent to your email. Please note that it{" "}
          <b>expires in 10 minutes</b>!
        </div>
      </center>
    </div>
  );
}

export default ResetSent;