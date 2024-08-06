import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-10 fixed flex items-center justify-between py-5 bg-gradient-to-r from-blue-950 to-black container px-8 mb-10 mx-auto">
      <Link to="app" className="flex items-center">
        <img className="mx-2 h-10 w-10 rounded-full" src={logo} alt="logo" />
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="technologies"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer hover:text-gray-400"
        >
          Skills
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer hover:text-gray-400"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer hover:text-gray-400"
        >
          Projects
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer hover:text-gray-400"
        >
          Education
        </Link>
        <Link
          to="achievement"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer hover:text-gray-400"
        >
          Achievements
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="hover:cursor-pointer hover:text-gray-400"
        >
          Contact
        </Link>
      </div>

      <div className="md:hidden flex items-center hover:text-gray-400">
        <button onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 right-0 w-48 text-black bg-black flex flex-col items-center justify-center space-y-3 md:hidden p-4 rounded-lg shadow-lg">
          <Link
            to="technologies"
            smooth={true}
            duration={1000}
            className="nav-button"
            onClick={toggleMenu}
          >
            Technologies
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            className="nav-button"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="nav-button"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={1000}
            className="nav-button"
          >
            Education
          </Link>
          <Link
            to="achievement"
            smooth={true}
            duration={1000}
            className="nav-button"
            onClick={toggleMenu}
          >
            Achievements
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="nav-button"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
