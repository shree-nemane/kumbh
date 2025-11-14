import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import maha_gov_logo from "../../assets/Home/Header/maha_gov_logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMahaDropdownOpen, setIsMahaDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMahaDropdownOpen, setIsMobileMahaDropdownOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const dropdownRef = useRef(null);
  const mahaDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Load user data from localStorage
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData?.username) {
      setUser(authData.username);
      setRole(authData.role);
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    setRole(null);
    navigate("/login");
  };

  // Close desktop dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mahaDropdownRef.current &&
        !mahaDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsMahaDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-orange-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 relative">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={maha_gov_logo}
            alt="Maha Gov Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </Link>

        {/* ========== DESKTOP NAVIGATION ========== */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">

          <Link to="/" className="hover:text-orange-600 transition-colors duration-200">
            Home
          </Link>

          {/* About Kumbh */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-orange-600 transition"
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
                setIsMahaDropdownOpen(false);
              }}
            >
              About Kumbh
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50">
                <Link
                  to="/About/Introduction"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Introduction
                </Link>
                <Link
                  to="/About/RitualsOfKumbh"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Rituals of Kumbh
                </Link>
              </div>
            )}
          </div>

          {/* Maha Kumbh */}
          <div className="relative" ref={mahaDropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-orange-600 transition"
              onClick={() => {
                setIsMahaDropdownOpen((prev) => !prev);
                setIsDropdownOpen(false);
              }}
            >
              Maha Kumbh 2027
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMahaDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMahaDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50">
                <Link
                  to="/MahaKumbh/MajorAttractions"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  onClick={() => setIsMahaDropdownOpen(false)}
                >
                  Major Attractions
                </Link>
                <Link
                  to="/MahaKumbh/Events"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  onClick={() => setIsMahaDropdownOpen(false)}
                >
                  Events
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/MahaKumbh/TravelAndStayServices"
            className="hover:text-orange-600 transition"
          >
            Travel & Stay
          </Link>

          {/* ========== AUTH (Desktop) ========== */}
          {user ? (
            <div className="flex items-center gap-4">
              {role === "admin" ? (
                <Link
                  to="/admin/dashboard"
                  className="bg-orange-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
                >
                  Admin Dashboard
                </Link>
              ) : (
                <Link
                  to="/user/profile"
                  className="text-orange-600 hover:text-orange-800 font-semibold"
                >
                  My Profile
                </Link>
              )}

              <span className="font-semibold text-gray-700">Hello, {user}</span>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-600 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="border border-orange-500 text-orange-600 px-4 py-2 rounded-md font-semibold hover:bg-orange-100 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>

        {/* ========== MOBILE MENU BUTTON ========== */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-700 transition"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
            setIsMobileDropdownOpen(false);
            setIsMobileMahaDropdownOpen(false);
          }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ========== MOBILE MENU ========== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-300 shadow-inner px-6 py-4 space-y-3 text-gray-800 font-medium"
          >
            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-orange-600 transition"
            >
              Home
            </Link>

            {/* ========== MOBILE: About Kumbh (Animated) ========== */}
            <div>
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex justify-between w-full hover:text-orange-600 transition"
              >
                About Kumbh
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <Link
                      to="/About/Introduction"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-orange-700 transition"
                    >
                      Introduction
                    </Link>
                    <Link
                      to="/About/RitualsOfKumbh"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-orange-700 transition"
                    >
                      Rituals of Kumbh
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ========== MOBILE: Maha Kumbh (Animated) ========== */}
            <div>
              <button
                onClick={() => setIsMobileMahaDropdownOpen(!isMobileMahaDropdownOpen)}
                className="flex justify-between w-full hover:text-orange-600 transition"
              >
                Maha Kumbh 2027
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMobileMahaDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMobileMahaDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <Link
                      to="/MahaKumbh/MajorAttractions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-orange-700 transition"
                    >
                      Major Attractions
                    </Link>
                    <Link
                      to="/MahaKumbh/Events"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-orange-700 transition"
                    >
                      Events
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Travel & Stay */}
            <Link
              to="/MahaKumbh/TravelAndStayServices"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-orange-600 transition"
            >
              Travel & Stay
            </Link>

            {/* ========== AUTH (Mobile) ========== */}
            {user ? (
              <div className="flex flex-col gap-3 mt-4">
                {role === "admin" ? (
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-orange-500 text-white py-2 rounded-md text-center font-semibold hover:bg-orange-600 transition"
                  >
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/user/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block border border-orange-500 text-orange-600 py-2 rounded-md text-center font-semibold hover:bg-orange-100 transition"
                  >
                    My Profile
                  </Link>
                )}

                <span className="font-semibold text-gray-700">Hello, {user}</span>

                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    navigate("/signup");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border border-orange-500 text-orange-600 py-2 rounded-md font-semibold hover:bg-orange-100 transition"
                >
                  Sign Up
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
