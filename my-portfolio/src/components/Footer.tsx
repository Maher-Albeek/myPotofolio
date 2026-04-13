import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Skills", to: "skills" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Contact", to: "contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-scroll-section data-reveal className="relative z-10 bg-black text-gray-300 border-t border-gray-800" >
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-white text-xl font-bold tracking-widest uppercase">
              Maher Albeek
            </span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Softwareentwickler based in Gelsenkirchen, Germany.
              Capturing moments that last forever.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-white cursor-pointer 
                    transition-colors duration-200 text-sm"
                    spy={true}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-2 text-gray-400 
                  hover:text-white transition-colors duration-200 text-sm"
                >
                  <MdEmail className="text-lg" />
                  your@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+49123456789"
                  className="flex items-center gap-2 text-gray-400 
                  hover:text-white transition-colors duration-200 text-sm"
                >
                  <MdPhone className="text-lg" />
                  +49 123 456 789
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white 
                transition-colors duration-200 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white 
                transition-colors duration-200 text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row 
          items-center justify-between gap-2">
          <p className="text-gray-500 text-sm">
            © {currentYear} Maher Albeek. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;