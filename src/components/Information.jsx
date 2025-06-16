import { FaEnvelope, FaPhoneAlt, FaGithub, FaGlobe } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Information = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const infoList = [
    {
      icon: <FaEnvelope className="text-cyan-400 text-xl" />,
      label: t("contact.email.label"),
      value: t("contact.email.value"),
      href: "mailto:kieutanquoc2002@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="text-green-400 text-xl" />,
      label: t("contact.phone.label"),
      value: t("contact.phone.value"),
      href: "tel:0949566841",
    },
    {
      icon: <FaGithub className="text-white text-xl" />,
      label: t("contact.github.label"),
      value: t("contact.github.value"),
      href: "https://github.com/kieutanquoc3554",
    },
    {
      icon: <FaGlobe className="text-pink-400 text-xl" />,
      label: t("contact.portfolio.label"),
      value: t("contact.portfolio.value"),
      href: "https://kieutanquoc.id.vn",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a5f] px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-14 text-amber-400 text-center tracking-wide">
        {t("contact.title")}
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 text-base max-w-5xl mx-auto">
        {infoList.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`flex items-start gap-4 p-6 bg-white/5 rounded-xl shadow-lg hover:bg-white/10 hover:scale-[1.02] transition-all backdrop-blur-md duration-500 delay-[${
              idx * 100
            }ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {item.icon}
            <div>
              <p className="text-gray-400 text-sm">{item.label}</p>
              <p className="text-white font-semibold break-all select-text">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Information;
