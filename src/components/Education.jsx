import { FaGraduationCap } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Education = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const educationData = [
    {
      time: "2019 – 2024",
      title: t("education.ctu.title"),
      subtitle: t("education.ctu.subtitle"),
      description: t("education.ctu.description"),
    },
    {
      time: "2023 (3 months)",
      title: t("education.vnpt.title"),
      subtitle: t("education.vnpt.subtitle"),
      description: t("education.vnpt.description"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("education");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      className="w-full bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#1e3a5f] px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-14 text-amber-400 text-center tracking-wide">
        {t("education.title")}
      </h2>

      <div className="relative border-l-2 border-amber-500/40 pl-6 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-14 relative transition-all duration-700 ease-in-out transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Dot */}
            <div className="absolute -left-[18px] top-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#1e293b] shadow-xl animate-ping-slow flex items-center justify-center">
              <FaGraduationCap className="text-[10px] text-white z-10" />
            </div>

            {/* Time */}
            <span className="text-base text-gray-400">{edu.time}</span>

            {/* Titles */}
            <h3 className="text-2xl font-bold text-white mt-1 tracking-wide group-hover:text-amber-400 transition-colors duration-300">
              {edu.title}
            </h3>
            <h4 className="text-lg italic text-cyan-300 mb-2 group-hover:text-white transition-colors duration-300">
              {edu.subtitle}
            </h4>
            <p className="text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition duration-300">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
