import { useTranslation } from "react-i18next";

const Summary = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-lg text-rose-300 font-semibold tracking-wide">
        {t("home.greeting")}
      </p>
      <h2 className="text-5xl font-bold mt-2 text-white">{t("home.name")}</h2>
      <h3 className="text-2xl mt-1 text-cyan-400 font-medium tracking-tight">
        {t("home.position")}
      </h3>
      <p className="mt-5 text-base text-gray-300 leading-relaxed">
        {t("home.summary")}
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#"
          className="bg-gradient-to-r from-rose-400 to-amber-400 text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:brightness-110 transition-all duration-200"
        >
          {t("home.hire")}
        </a>
        <a
          href="#"
          className="border border-rose-400 text-rose-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-100/10 transition-all duration-200"
        >
          {t("home.contact")}
        </a>
      </div>
    </>
  );
};

export default Summary;
