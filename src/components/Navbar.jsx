import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = ({ onChange }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  const handleSelect = (section) => {
    onChange(section);
    setMenuOpen(false); // đóng menu sau khi chọn
  };

  return (
    <nav className="bg-[#04152d]/80 backdrop-blur-md sticky top-0 z-50 w-full px-6 md:px-10 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">Portfolio</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {["home", "about", "education", "skills", "project", "contact"].map(
            (key) => (
              <li
                key={key}
                onClick={() => handleSelect(key)}
                className="cursor-pointer hover:text-cyan-300"
              >
                {t(`nav.${key}`)}
              </li>
            )
          )}
        </ul>

        {/* Right controls */}
        <div className="hidden md:flex gap-4 items-center">
          <button onClick={toggleLanguage}>
            <Flag
              className="cursor-pointer"
              code={i18n.language === "vi" ? "gb" : "vn"}
              style={{ width: 24 }}
            />
          </button>
          <button className="bg-pink-500 px-4 py-2 rounded-full text-sm hover:bg-pink-600 cursor-pointer">
            {t("nav.download")}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 mt-5 ${
          menuOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        } space-y-3 text-sm`}
      >
        {["home", "about", "education", "skills", "project", "contact"].map(
          (key) => (
            <div
              key={key}
              onClick={() => handleSelect(key)}
              className="cursor-pointer hover:text-cyan-300"
            >
              {t(`nav.${key}`)}
            </div>
          )
        )}
        <div className="flex items-center gap-3 mt-4">
          <button onClick={toggleLanguage}>
            <Flag
              className="cursor-pointer"
              code={i18n.language === "vi" ? "gb" : "vn"}
              style={{ width: 24 }}
            />
          </button>
          <button className="bg-pink-500 px-4 py-2 rounded-full text-sm hover:bg-pink-600 cursor-pointer">
            {t("nav.download")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
