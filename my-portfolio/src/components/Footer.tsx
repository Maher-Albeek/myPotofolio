import { FaLinkedin, FaGithub, FaXing } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-scroll-section
      data-reveal
      className="relative z-10 bg-[#0a0a0a] text-gray-400 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col items-center gap-10">

        {/* Brand */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-2xl font-bold tracking-widest uppercase">
            Maher Albeek
          </span>
          <p className="text-sm text-gray-500 text-center max-w-sm leading-relaxed">
            Softwareentwickler based in Gelsenkirchen, Germany.
          </p>
        </div>

        {/* Contact Row */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="mailto:malbeek92@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <MdEmail className="text-base" />
            malbeek92@gmail.com
          </a>
          <a
            href="tel:+491634439442"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <MdPhone className="text-base" />
            +49 163-44 39 442
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.xing.com/profile/Maher_Albeek037032/web_profiles?nwt_nav=profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
            aria-label="xing"
          >
            <FaXing />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {currentYear} Maher Albeek. All rights reserved.</p>
          <p>Built with React · TypeScript · Tailwind CSS · Supported by GitHub Copilot · Some components inspired by <a href="https://reactbits.dev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">React Bits</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;