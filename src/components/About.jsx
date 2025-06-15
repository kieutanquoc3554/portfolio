// components/About.jsx - Animated About Section
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUserGraduate, FaBriefcase, FaBullseye } from "react-icons/fa";

const About = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="px-6 py-20 max-w-5xl mx-auto transition-all duration-1000"
    >
      <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">
        {t("about.title")}
      </h2>
      <div
        className={`space-y-8 text-gray-300 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-start gap-4">
          <FaUserGraduate className="text-cyan-400 text-2xl mt-1" />
          <p>{t("about.education")}</p>
        </div>
        <div className="flex items-start gap-4">
          <FaBriefcase className="text-green-400 text-2xl mt-1" />
          <p>{t("about.project")}</p>
        </div>
        <div className="flex items-start gap-4">
          <FaBullseye className="text-pink-400 text-2xl mt-1" />
          <p>{t("about.goal")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
