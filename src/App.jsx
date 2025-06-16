import { useEffect, useState } from "react";
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
  useEffect(() => {
    if (!selectedTab) return;

    const element = document.getElementById(selectedTab);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedTab]);
  return (
    <div className="min-h-screen bg-[#04152d] text-white font-sans">
      <Navbar onChange={setSelectedTab} />
      <Introduce />
      <About />
      <Education />
      <Skills />
      <Project />
      <Information />
      <footer className="text-center text-xs text-gray-500 py-4 bg-gradient-to-t from-[#0f172a] to-[#1e293b]">
        © 2025 Kiều Tấn Quốc
      </footer>
    </div>
  );
}
