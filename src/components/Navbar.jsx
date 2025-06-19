import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUser,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import CVModal from "./CVModal";

const Navbar = ({ onChange, selectedTab }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isActive = (key) =>
    selectedTab === key ? "text-rose-400 font-semibold" : "text-gray-200";

  const toggleLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  const handleSelect = (section) => {
    onChange(section);
    setMenuOpen(false);
  };

  const icons = {
    home: <FaHome className="inline-block mr-2" />,
    about: <FaUser className="inline-block mr-2" />,
    education: <FaGraduationCap className="inline-block mr-2" />,
    skills: <FaTools className="inline-block mr-2" />,
    project: <FaProjectDiagram className="inline-block mr-2" />,
    contact: <FaEnvelope className="inline-block mr-2" />,
  };

  return (
    <>
      <nav className="bg-[#04152d]/70 backdrop-blur-md sticky top-0 z-50 w-full px-6 md:px-10 py-4 shadow-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-rose-500 tracking-wide">
            Portfolio
          </h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-13 text-base font-medium tracking-wide">
            {["home", "about", "education", "skills", "project", "contact"].map(
              (key) => (
                <li
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`cursor-pointer flex items-center transition-colors duration-200 ${
                    selectedTab === key
                      ? "text-rose-400 font-semibold"
                      : "text-gray-200"
                  }`}
                >
                  {icons[key]}
                  {t(`nav.${key}`)}
                </li>
              )
            )}
          </ul>

          {/* Right controls */}
          <div className="hidden md:flex gap-3 items-center">
            <button onClick={toggleLanguage}>
              <Flag
                className="cursor-pointer rounded-full border border-gray-300 shadow-sm"
                code={i18n.language === "vi" ? "gb" : "vn"}
                style={{ width: 26 }}
              />
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="cursor-pointer bg-gradient-to-r from-rose-400 to-amber-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition shadow"
            >
              {t("nav.download")}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-200 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 mt-4 ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-xl bg-[#0f172a]/90 backdrop-blur-md shadow-lg p-4 space-y-4 text-gray-100 text-base font-medium">
            {["home", "about", "education", "skills", "project", "contact"].map(
              (key) => (
                <div
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`cursor-pointer flex items-center gap-2 hover:text-rose-400 transition ${
                    selectedTab === key ? "text-rose-400 font-semibold" : ""
                  }`}
                >
                  {icons[key]}
                  {t(`nav.${key}`)}
                </div>
              )
            )}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button onClick={toggleLanguage}>
                <Flag
                  className="cursor-pointer rounded-full border border-gray-300 shadow"
                  code={i18n.language === "vi" ? "gb" : "vn"}
                  style={{ width: 26 }}
                />
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition shadow"
              >
                {t("nav.download")}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <CVModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
