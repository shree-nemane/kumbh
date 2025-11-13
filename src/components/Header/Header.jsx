import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, LogOut } from "lucide-react";
import maha_gov_logo from "../../assets/Home/Header/maha_gov_logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMahaDropdownOpen, setIsMahaDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMahaDropdownOpen, setIsMobileMahaDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // ✅ FIX: define role state
  const dropdownRef = useRef(null);
  const mahaDropdownRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Check login status from localStorage
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData?.username) {
      setUser(authData.username);
      setRole(authData.role); // ✅ role will be "user" or "admin"
    } else {
      setUser(null);
      setRole(null);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    setRole(null);
    navigate("/login");
  };

  // ✅ Close dropdowns when clicking outside
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

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-orange-600 transition-colors duration-200">
            Home
          </Link>

          {/* Dropdown: About Kumbh */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-orange-600 transition-colors duration-200 focus:outline-none"
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
                setIsMahaDropdownOpen(false);
              }}
            >
              About Kumbh
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50">
                <Link
                  to="/About/Introduction"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                >
                  Introduction
                </Link>
                <Link
                  to="/About/RitualsOfKumbh"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                >
                  Rituals of Kumbh
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown: Maha Kumbh 2027 */}
          <div className="relative" ref={mahaDropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-orange-600 transition-colors duration-200 focus:outline-none"
              onClick={() => {
                setIsMahaDropdownOpen((prev) => !prev);
                setIsDropdownOpen(false);
              }}
            >
              Maha Kumbh 2027
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMahaDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMahaDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50">
                <Link
                  to="/MahaKumbh/MajorAttractions"
                  onClick={() => setIsMahaDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                >
                  Major Attractions
                </Link>
                <Link
                  to="/MahaKumbh/Events"
                  onClick={() => setIsMahaDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                >
                  Events
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/MahaKumbh/TravelAndStayServices"
            className="hover:text-orange-600 transition-colors duration-200"
          >
            Travel & Stay
          </Link>

          {/* ✅ Authentication Buttons (Desktop) */}
          {user ? (
            <div className="flex items-center gap-4">
              {/* Show Admin or User links */}
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
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="border border-orange-500 text-orange-600 px-4 py-2 rounded-md font-semibold hover:bg-orange-100 transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>

        {/* --- Mobile Hamburger --- */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-700 transition"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
            setIsMobileDropdownOpen(false);
            setIsMobileMahaDropdownOpen(false);
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 shadow-inner px-6 py-4 space-y-3 text-gray-800 font-medium">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block hover:text-orange-600 transition"
          >
            Home
          </Link>

          {/* Dropdowns remain unchanged */}

          {/* ✅ Authentication (Mobile) */}
          {user ? (
            <div className="flex flex-col gap-3 mt-4">
              {/* Role-based buttons */}
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
        </div>
      )}
    </header>
  );
};

export default Header;
