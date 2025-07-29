import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const handleLoginSuccess = (newToken, userInfo) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userInfo));
    setToken(newToken);
    setUser(userInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          token ? (
            <Navigate to="/dashboard" />
          ) : (
            <Login onLogin={handleLoginSuccess} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          token ? (
            <Dashboard onSignOut={handleLogout} user={user} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
