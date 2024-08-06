import React from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function App() {
  return (
    <div id="app" className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      <div className="container mx-auto w-full">
        <Navbar />
      </div>

      <div className="container my-16 px-8 mx-auto">
        <HeroContent />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </div>
      <div className="bottom-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1e3a8a_100%)]"></div>

      <Link
        to="app"
        smooth={true}
        duration={1000}
        className="hover:cursor-pointer fixed bottom-5 right-5 bg-blue-900 text-white p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-300 hover:text-blue-900  transition duration-300"
      >
        <FaArrowUp />
      </Link>
    </div>
  );
}

export default App;
