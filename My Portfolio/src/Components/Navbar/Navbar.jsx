import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-[90%] mx-auto bg-white text-black py-4 px-6 sm:px-10 flex justify-between items-center z-[1000] transition-all duration-300">
      {/* Left Side: Logo & Theme Toggle */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="text-xl sm:text-2xl font-bold text-yellow-500">My Portfolio</div>
        <Toggle />
      </div>

      {/* Right Side: Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-yellow-500 lg:bg-transparent text-black lg:text-black py-4 lg:py-0 transition-all duration-300`}
      >
        <ul className="flex flex-col lg:flex-row gap-3 lg:gap-5 list-none mr-0 lg:mr-5">
          <li>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
              className="text-base cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              className="text-base cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              className="text-base cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              className="text-base cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              className="text-base cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="CoverLetter"
              smooth={true}
              className="text-base cursor-pointer hover:text-yellow-500 transition-colors duration-300"
            >
              CoverLetter
            </Link>
          </li>

          {/* Dropdown Button */}
          <li className="relative">
            <button
              className={`text-base bg-transparent border-none cursor-pointer hover:text-yellow-500 transition-colors duration-300 ${
                isDropdownOpen ? "text-yellow-500" : "text-black"
              }`}
              onClick={toggleDropdown}
            >
              More ▼
            </button>
            {isDropdownOpen && (
              <ul className="absolute lg:top-full left-0 bg-yellow-500 text-black py-2 rounded-md shadow-lg flex flex-col min-w-[150px] lg:mt-0 mt-2">
                <li>
                  <Link
                    spy={true}
                    to="Resume"
                    smooth={true}
                    className="block px-3 py-2 text-base cursor-pointer hover:bg-gray-100"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    to="Certificate_Gallery"
                    smooth={true}
                    className="block px-3 py-2 text-base cursor-pointer hover:bg-gray-100"
                  >
                    Certificate
                  </Link>
                </li>
                <li>
                  <Link to="/manish" className="block px-3 py-2 text-base cursor-pointer hover:bg-gray-100">
                    Project
                  </Link>
                </li>
                <li>
                  <Link to="/manish" className="block px-3 py-2 text-base cursor-pointer hover:bg-gray-100">
                    Training
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    to="Internship"
                    smooth={true}
                    className="block px-3 py-2 text-base cursor-pointer hover:bg-gray-100"
                  >
                    Internship
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Contact Button */}
        <Link spy={true} to="contact-form" smooth={true}>
          <button className="bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300">
            Contact
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden text-yellow-500 cursor-pointer"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </nav>
  );
};

export default Navbar;