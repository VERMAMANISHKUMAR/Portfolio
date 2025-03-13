import React, { useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Import Icons

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // ✅ Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-wrapper">
      {/* ✅ Left Side: Logo & Theme Toggle */}
      <div className="nav-left">
        <div className="nav-name">My Portfolio</div>
        <Toggle />
      </div>

      {/* ✅ Right Side: Menu */}
      <div className={`nav-right ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">Home</Link></li>
          <li><Link spy={true} to="Services" smooth={true}>Services</Link></li>
          <li><Link spy={true} to="Experience" smooth={true}>Experience</Link></li>
          <li><Link spy={true} to="Portfolio" smooth={true}>Portfolio</Link></li>
          <li><Link spy={true} to="Testimonials" smooth={true}>Testimonials</Link></li>
          <li><Link spy={true} to="CoverLetter" smooth={true}>CoverLetter</Link></li>

          {/* ✅ Dropdown Button */}
          <li className="dropdown-wrapper">
            <button className={`dropdown-toggle ${isDropdownOpen ? "active" : ""}`} onClick={toggleDropdown}>
              More ▼
            </button>
            {isDropdownOpen && (
              <ul className="custom-dropdown-menu">
                <li><Link spy={true} to="Resume" smooth={true}>Resume</Link></li>
                <li><Link spy={true} to="Certificate_Gallery" smooth={true}>Certificate</Link></li>
                <li><Link to="/manish">Project</Link></li>
                <li><Link to="/manish">Training</Link></li>
                <li><Link spy={true} to="Internship" smooth={true}>Internship</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* ✅ Contact Button */}
        <Link spy={true} to="contact-form" smooth={true}>
          <button className="button newadd">Contact</button>
        </Link>
      </div>

      {/* ✅ Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </nav>
  );
};

export default Navbar;
