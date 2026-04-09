import { useState, useEffect } from "react";
import { Link } from "react-scroll";
const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Contact", to: "contact" },
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
      className="fixed top-0 w-full  transition-all  "
      
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
          src="/images/logo.svg"
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