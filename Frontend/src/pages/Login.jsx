import React, { useState, useContext } from "react";
import { OtpContext } from "../context/OtpContext";

const Login = ({ onLogin }) => {
  const { sendOtp, verifyOtp, loading } = useContext(OtpContext);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");

  const toggleState = () =>
    setCurrentState(currentState === "Sign Up" ? "Sign In" : "Sign Up");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const res = await sendOtp(email, name, dob);
    if (res.success) setOtpSent(true);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const res = await verifyOtp(email, otp, name, dob);
    if (res.success) {
      onLogin(res.token, res.user); // save token and user info
    } else {
      alert("Invalid OTP or expired OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          {currentState === "Sign Up" ? "Sign Up" : "Sign In"}
        </h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            {currentState === "Sign Up" && (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
              disabled={loading}
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="number"
              placeholder="Enter OTP"
              className="w-full p-2 border rounded"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded"
              disabled={loading}
            >
              Verify OTP
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-600 mt-4">
          {currentState === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={toggleState}
          >
            {currentState === "Sign Up" ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
