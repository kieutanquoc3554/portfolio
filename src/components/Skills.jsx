// components/Skills.jsx - Animated Skill Groups with Icons + 2 Columns
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaTools } from "react-icons/fa";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: t("skills.frontend.title"),
      icon: <FaReact className="text-cyan-400 mr-2" />,
      skills: t("skills.frontend.items", { returnObjects: true }),
    },
    {
      title: t("skills.backend.title"),
      icon: <FaNodeJs className="text-green-400 mr-2" />,
      skills: t("skills.backend.items", { returnObjects: true }),
    },
    {
      title: t("skills.database.title"),
      icon: <FaDatabase className="text-yellow-400 mr-2" />,
      skills: t("skills.database.items", { returnObjects: true }),
    },
    {
      title: t("skills.languages.title"),
      icon: <FaCode className="text-pink-400 mr-2" />,
      skills: t("skills.languages.items", { returnObjects: true }),
    },
    {
      title: t("skills.tools.title"),
      icon: <FaTools className="text-indigo-400 mr-2" />,
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
      id="skills"
      className="px-6 py-20 max-w-6xl mx-auto transition-all duration-1000"
    >
      <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">
        {t("skills.title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-10 cursor-pointer">
        {skillGroups.map((group, gIdx) => (
          <div
            key={group.title}
            className={`transition-all duration-700 delay-[${
              gIdx * 150
            }ms] transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              {group.icon} {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-white/10 text-sm text-white px-4 py-2 rounded-lg shadow hover:bg-white/20 backdrop-blur-md"
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
