import { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 40);
    };

    const handleScroll = () => {
      updateVisibility();
    };

    const handleResize = () => {
      updateVisibility();
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <nav
      className={`transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Desktop Links */}
      <ul className="hidden md:flex fixed top-1/2 left-1/2 -translate-x-[200%] -translate-y-1/2 flex-col gap-4 pr-6  border-white/20">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full text-right">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-block text-gray-300 hover:text-white cursor-pointer 
                transition-colors duration-200 text-sm uppercase tracking-wider"
                activeClass="text-white font-semibold border-b-2 border-white pb-1"
                spy={true}
              >
                {link.label}
              </Link>

              <link.icon className="inline-block ml-2 text-[1.2rem] text-white/70 align-middle" aria-hidden="true" />

            </li>
          ))}
      </ul>

      <div className="md:hidden fixed top-0 w-full">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between inset-y-0 left-0">
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
          src="/images/logo.svg"
          alt="Maher Albeek logo"
          className="h-7 w-auto"
        />

        </div>
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
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer 
                transition-colors duration-200 text-sm uppercase tracking-wider"
                activeClass="text-white font-semibold"
                spy={true}
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="text-[0.85rem]" aria-hidden="true" />
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
