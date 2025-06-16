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
      title: t("projects.kimdung.title"),
      description: t("projects.kimdung.description"),
      tech: t("projects.kimdung.tech", { returnObjects: true }),
      icon: <FaLaptopCode className="text-pink-400 text-2xl" />,
      github: "https://github.com/kieutanquoc3554/frontendVLXD",
      live: "https://frontend-vlxd.vercel.app/",
    },
  ];

  return (
    <section
      id="project"
      className="w-full bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#1e3a5f] px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-14 text-amber-400 text-center tracking-wide">
        {t("projects.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 transition-all duration-700 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 mb-3">
              {p.icon}
              <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
            </div>
            <p className="text-base text-gray-300 mb-4">{p.description}</p>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 text-cyan-300 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-5">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-white transition text-sm font-medium underline underline-offset-2"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-rose-400 hover:text-white transition text-sm font-medium underline underline-offset-2"
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
