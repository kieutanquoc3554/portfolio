import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Information from "./components/Information";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("");
  const isClickScroll = useRef(false); // 👈 Biến này giúp phân biệt

  const handleTabChange = (tab) => {
    isClickScroll.current = true; // đánh dấu là scroll do click
    setSelectedTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        isClickScroll.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "project",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isClickScroll.current) {
            setSelectedTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#04152d] text-white font-sans">
      <Navbar onChange={handleTabChange} selectedTab={selectedTab} />
      <Introduce id="home" />
      <About id="about" />
      <Education id="education" />
      <Skills id="skills" />
      <Project id="project" />
      <Information id="contact" />
      <footer className="text-center text-xs text-gray-500 py-4 bg-gradient-to-t from-[#0f172a] to-[#1e293b]">
        © 2025 Kiều Tấn Quốc
      </footer>
    </div>
  );
}
