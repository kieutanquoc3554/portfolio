import { useTranslation } from "react-i18next";

const Summary = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-lg">{t("home.greeting")}</p>
      <h2 className="text-4xl font-bold mt-1">{t("home.name")}</h2>
      <h3 className="text-xl mt-1 text-cyan-400">{t("home.position")}</h3>
      <p className="mt-4 text-sm text-gray-300 leading-relaxed">
        {t("home.summary")}
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="#"
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full text-sm"
        >
          {t("home.hire")}
        </a>
        <a
          href="#"
          className="border border-cyan-500 px-5 py-2 rounded-full text-sm hover:bg-cyan-600 hover:text-white"
        >
          {t("home.contact")}
        </a>
      </div>
    </>
  );
};

export default Summary;
