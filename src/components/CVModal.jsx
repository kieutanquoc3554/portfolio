import { FaTimes, FaFilePdf } from "react-icons/fa";
import eng_pdf from "../assets/CV_Eng_IMG.pdf";
import vi_pdf from "../assets/CV_VN_IMG.pdf";
import { useTranslation } from "react-i18next";

const CVModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-[#1e293b]/90 text-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white cursor-pointer"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center text-amber-400">
          {t("download.title")}
        </h2>

        <p className="text-sm text-gray-300 mb-6 text-center">
          {t("download.content")}
        </p>

        <div className="flex flex-col gap-4">
          <a
            href={vi_pdf}
            download
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-400 text-white py-2 rounded-lg hover:brightness-110 transition"
          >
            <FaFilePdf /> {t("download.option1")}
          </a>
          <a
            href={eng_pdf}
            download
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-400 text-white py-2 rounded-lg hover:brightness-110 transition"
          >
            <FaFilePdf /> {t("download.option2")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
