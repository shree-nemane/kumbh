// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useAlertSocket();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-orange-600">Welcome!</h1>
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
