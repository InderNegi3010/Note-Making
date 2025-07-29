import { createContext, useState } from "react";
import axios from "axios";

export const OtpContext = createContext();

const OtpContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_API_URL;

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Send OTP to email
  const sendOtp = async (email, name = "", dob = "") => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axios.post(`${backendUrl}/api/user/send-otp`, {
        email,
        name,
        dob,
      });

      return data; // { success: true, message: "OTP sent to email" }
    } catch (err) {
      console.error("Send OTP Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to send OTP");
      return { success: false, message: "Failed to send OTP" };
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and get token
  const verifyOtp = async (email, otp, name = "", dob = "") => {
    try {
      setLoading(true);
      setError("");
      const { data } = await axios.post(`${backendUrl}/api/user/verify-otp`, {
        email,
        otp,
        name,
        dob,
      });

      if (data.success && data.token) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      return data; // { success: true, token, user, message: "OTP verified successfully" }
    } catch (err) {
      console.error("Verify OTP Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to verify OTP");
      return { success: false, message: "Failed to verify OTP" };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    backendUrl,
    token,
    user,
    loading,
    error,
    sendOtp,
    verifyOtp,
    logout,
  };

  return <OtpContext.Provider value={value}>{children}</OtpContext.Provider>;
};

export default OtpContextProvider;
