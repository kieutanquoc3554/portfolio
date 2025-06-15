import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaStore } from "react-icons/fa";

const Project = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.ecom.title"),
      description: t("projects.ecom.description"),
      tech: t("projects.ecom.tech", { returnObjects: true }),
      icon: <FaStore className="text-cyan-400 text-2xl" />,
      live: "https://frontend-lvtn-66du.vercel.app",
      github: "https://github.com/kieutanquoc3554/frontendCM",
    },
    {
      title: t("projects.pos.title"),
      description: t("projects.pos.description"),
      tech: t("projects.pos.tech", { returnObjects: true }),
      icon: <FaLaptopCode className="text-pink-400 text-2xl" />,
      github: "#",
      live: "#",
    },
  ];
  return (
    <section
      id="project"
      className="px-6 py-20 max-w-6xl mx-auto transition-all duration-1000"
    >
      <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">
        {t("projects.title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-md transition-all duration-700 delay-[${
              i * 150
            }ms] 
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              {p.icon}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            </div>
            <p className="text-sm text-gray-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-cyan-300 mb-3">
              {p.tech.map((t, idx) => (
                <span key={idx} className="bg-white/10 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
