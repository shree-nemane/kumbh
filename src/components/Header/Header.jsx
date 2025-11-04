import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import maha_gov_logo from "../../assets/Home/Header/maha_gov_logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMahaDropdownOpen, setIsMahaDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileMahaDropdownOpen, setIsMobileMahaDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mahaDropdownRef = useRef(null);

  // Close dropdowns when clicking outside (desktop only)
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

          <Link to="/MahaKumbh/TravelAndStayServices" className="hover:text-orange-600 transition-colors duration-200">
            Travel & Stay
          </Link>
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
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileDropdownOpen(false);
              setIsMobileMahaDropdownOpen(false);
            }}
            className="block hover:text-orange-600 transition-colors duration-200"
          >
            Home
          </Link>

          {/* Mobile Dropdown: About Kumbh */}
          <div>
            <button
              className="flex items-center justify-between w-full hover:text-orange-600 transition-colors duration-200 focus:outline-none"
              onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
            >
              About Kumbh
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2 text-gray-700">
                <Link
                  to="/About/Introduction"
                  onClick={() => {
                    setIsMobileDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-orange-600 transition"
                >
                  Introduction
                </Link>
                <Link
                  to="/About/RitualsOfKumbh"
                  onClick={() => {
                    setIsMobileDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-orange-600 transition"
                >
                  Rituals of Kumbh
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown: Maha Kumbh 2027 */}
          <div>
            <button
              className="flex items-center justify-between w-full hover:text-orange-600 transition-colors duration-200 focus:outline-none"
              onClick={() => setIsMobileMahaDropdownOpen((prev) => !prev)}
            >
              Maha Kumbh 2027
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileMahaDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileMahaDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2 text-gray-700">
                <Link
                  to="/MahaKumbh/MajorAttractions"
                  onClick={() => {
                    setIsMobileMahaDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-orange-600 transition"
                >
                  Major Attractions
                </Link>
                <Link
                  to="/MahaKumbh/MajorAttractions"
                  onClick={() => {
                    setIsMobileMahaDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-orange-600 transition"
                >
                  Events
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/MahaKumbh/TravelAndStayServices"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsMobileDropdownOpen(false);
              setIsMobileMahaDropdownOpen(false);
            }}
            className="block hover:text-orange-600 transition-colors duration-200"
          >
            Travel & Stay
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
