import { useTranslation } from "react-i18next";
import { FaUserGraduate, FaBriefcase, FaBullseye } from "react-icons/fa";
import { useEffect, useState } from "react";

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
      className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a5f] px-6 py-24"
    >
      <div className="max-w-4xl mx-auto transition-all duration-1000">
        <h2 className="text-4xl font-bold mb-14 text-amber-400 text-center tracking-wide">
          {t("about.title")}
        </h2>

        <div
          className={`space-y-10 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              icon: <FaUserGraduate className="text-amber-400 text-2xl" />,
              bg: "bg-amber-100/10",
              border: "border-amber-500",
              text: t("about.education"),
            },
            {
              icon: <FaBriefcase className="text-rose-400 text-2xl" />,
              bg: "bg-rose-100/10",
              border: "border-rose-500",
              text: t("about.project"),
            },
            {
              icon: <FaBullseye className="text-emerald-400 text-2xl" />,
              bg: "bg-emerald-100/10",
              border: "border-emerald-500",
              text: t("about.goal"),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-4 bg-white/5 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm"
            >
              <div
                className={`min-w-12 min-h-12 rounded-full ${item.bg} border ${item.border} flex items-center justify-center shadow`}
              >
                {item.icon}
              </div>
              <p className="text-gray-200 text-base leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
