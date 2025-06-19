import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaStore } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CMU1 from "../assets/CMU1.png";
import CMU2 from "../assets/CMU2.png";
import CMU3 from "../assets/CMU3.png";
import CMU4 from "../assets/CMU4.png";
import CMU5 from "../assets/CMU5.png";

const Project = ({ id }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: t("projects.ecom.title"),
      description: t("projects.ecom.description"),
      tech: t("projects.ecom.tech", { returnObjects: true }),
      icon: <FaStore className="text-cyan-400 text-2xl" />,
      live: "https://frontend-lvtn-66du.vercel.app",
      github: "https://github.com/kieutanquoc3554/frontendCM",
      images: [
        { src: CMU1, caption: "Giao diện trang chủ" },
        { src: CMU2, caption: "Giao diện xem sản phẩm" },
        { src: CMU3, caption: "Giao diện giỏ hàng" },
        { src: CMU4, caption: "Giao diện giới thiệu đặc sản địa phương" },
        { src: CMU5, caption: "Giao diện tìm kiếm sản phẩm" },
      ],
    },
    {
      title: t("projects.kimdung.title"),
      description: t("projects.kimdung.description"),
      tech: t("projects.kimdung.tech", { returnObjects: true }),
      icon: <FaLaptopCode className="text-pink-400 text-2xl" />,
      github: "https://github.com/kieutanquoc3554/frontendVLXD",
      live: "https://frontend-vlxd.vercel.app/",
      images: ["/images/ecom1.png", "/images/ecom2.png", "/images/ecom3.png"],
    },
  ];

  const openGallery = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );

  useEffect(() => {
    if (!isOpen || currentImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000); // mỗi 4s

    return () => clearInterval(timer);
  }, [isOpen, currentImages]);

  return (
    <section
      id={id}
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
            <button
              onClick={() => openGallery(p.images)}
              className="text-sky-400 hover:text-white transition text-sm font-medium underline underline-offset-2"
            >
              {t("projects.viewImages", "Xem ảnh")}
            </button>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 w-[100%] max-w-3xl shadow-2xl"
          >
            <button
              onClick={closeGallery}
              className="absolute top-2 right-3 text-white text-2xl hover:text-red-400 transition cursor-pointer"
            >
              &times;
            </button>

            {/* Fade chuyển ảnh */}
            <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden rounded-xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImages[currentIndex].src}
                  src={currentImages[currentIndex].src}
                  alt={`Project image ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-1 rounded text-white text-xs max-w-[90%] text-center">
                  {currentImages[currentIndex]?.caption}
                </div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4 text-white text-sm">
              <button
                onClick={prevImage}
                className="hover:text-cyan-400 transition"
              >
                ← Trước
              </button>
              <button
                onClick={nextImage}
                className="hover:text-cyan-400 transition"
              >
                Sau →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Project;
