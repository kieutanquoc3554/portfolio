// components/Skills.jsx - Modern & Elegant Animated Skill Groups
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaTools } from "react-icons/fa";

const Skills = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: t("skills.frontend.title"),
      icon: <FaReact className="text-cyan-400 mr-3 text-2xl" />,
      skills: t("skills.frontend.items", { returnObjects: true }),
    },
    {
      title: t("skills.backend.title"),
      icon: <FaNodeJs className="text-green-400 mr-3 text-2xl" />,
      skills: t("skills.backend.items", { returnObjects: true }),
    },
    {
      title: t("skills.database.title"),
      icon: <FaDatabase className="text-yellow-400 mr-3 text-2xl" />,
      skills: t("skills.database.items", { returnObjects: true }),
    },
    {
      title: t("skills.languages.title"),
      icon: <FaCode className="text-pink-400 mr-3 text-2xl" />,
      skills: t("skills.languages.items", { returnObjects: true }),
    },
    {
      title: t("skills.tools.title"),
      icon: <FaTools className="text-indigo-400 mr-3 text-2xl" />,
      skills: t("skills.tools.items", { returnObjects: true }),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a5f] px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-16 text-amber-400 text-center tracking-wide">
        {t("skills.title")}
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {skillGroups.map((group, gIdx) => (
          <div
            key={group.title}
            className={`transition-all duration-700 ease-out delay-[${
              gIdx * 150
            }ms]
              transform ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6`}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              {group.icon} {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full shadow-sm transition duration-300 ease-in-out backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
