// components/Education.jsx - Timeline with Dots + Animation
import { FaGraduationCap } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
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
    <section id="education" className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">
        {t("education.title")}
      </h2>
      <div className="relative border-l-2 border-cyan-500 pl-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-10 relative transition-all duration-700 delay-[${
              index * 150
            }ms] transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute -left-[14px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-[#04152d] shadow-md flex items-center justify-center">
              <FaGraduationCap className="text-[10px] text-white" />
            </div>
            <span className="text-sm text-gray-400 ml-3">{edu.time}</span>
            <h3 className="text-lg font-semibold text-white mt-1">
              {edu.title}
            </h3>
            <h4 className="text-sm text-cyan-300 mb-1">{edu.subtitle}</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
