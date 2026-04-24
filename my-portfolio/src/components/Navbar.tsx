import { useState, useEffect } from "react";
import profilePicture from "../assets/logo.svg";

import { Link } from "react-scroll";
import {
  FaHome,
  FaTools,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "hero", icon: FaHome },
  { label: "Services", to: "services", icon: FaTools },
  { label: "About", to: "about", icon: FaUser },
  { label: "Experience", to: "experience", icon: FaBriefcase },
  { label: "Education", to: "education", icon: FaGraduationCap },
   { label: "Skills", to: "skills", icon: FaCode },
  { label: "Portfolio", to: "portfolio", icon: FaFolderOpen },
  { label: "Certificates", to: "certificates", icon: FaCertificate },
  { label: "Contact", to: "contact", icon: FaEnvelope },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {

    const handleScroll = () => {

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav
      className=" top-0 w-full  transition-all  z-50 "
      
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between inset-y-0 left-0">

    
      {/* Desktop Links */}
        <ul className="hidden md:flex gap-8  ">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-white  cursor-pointer 
                transition-colors duration-200 text-sm uppercase tracking-wider"
                activeClass="text-white font-semibold border-b-2 border-white pb-1"
                spy={true}
              >
                {link.label}
              </Link>

              {/* <link.icon className="inline-block ml-2 text-[1.2rem] text-white/70 align-middle" aria-hidden="true" /> */}

            </li>
          ))}
      </ul>

          {/* Hamburger Button - Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 
            ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 
            ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 
            ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
          {/* Logo */}
          <img
          src={profilePicture}
          alt="Maher Albeek logo"
          className="h-7 w-auto"
        />

        
      </div>
          
      

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-4 bg-gray-900">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-white cursor-pointer 
                transition-colors duration-200 text-sm uppercase tracking-wider"
                activeClass="text-white font-semibold"
                spy={true}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;