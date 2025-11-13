import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axiosInstance.post("login/", { username, password });

      localStorage.setItem(
        "auth",
        JSON.stringify({
          username: res.data.username,
          access: res.data.access,
          refresh: res.data.refresh,
          role: res.data.role,
        })
      );

      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100 px-4 font-[contentFont]">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-10 w-full max-w-md relative">
        {/* 🏠 Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-orange-500 hover:text-orange-700 font-semibold"
        >
          ← Back to Home
        </button>

        <h2 className="text-3xl font-[headerFont] text-center text-orange-600 mb-8 mt-4">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-center text-sm mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-2 text-lg font-semibold rounded-md transition-all duration-200 ${
              loading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            } text-white`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
