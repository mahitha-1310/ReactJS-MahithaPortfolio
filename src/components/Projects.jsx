import { useState } from "react";
import { projects } from "../data/constants";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrent((current + 1) % projects.length);
  };

  return (
    <div id="projects" className=" border-b border-neutral-700 pb-8">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:pt-24 pt-20 pb-4 text-neutral-400 text-center text-4xl"
      >
        My <span className="text-blue-700 font-medium">Projects</span>
      </motion.h1>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-full lg:flex items-center lg:p-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full lg:w-1/2 p-4"
                >
                  <h3 className="my-3 bg-gradient-to-r from-pink-300 via-slate-500 to-blue-700 text-transparent bg-clip-text text-2xl">
                    {project.title}
                  </h3>
                  <span className="text-neutral-400">
                    {project.description}
                  </span>
                  <div className="flex flex-wrap max-lg:justify-center">
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="mr-2 mt-4 rounded bg-blue-950 px-2 py-1 text-sm font-medium text-neutral-300 "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full lg:w-1/2 p-4 lg:p-10"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-neutral-300 hover:bg-gray-400 text-black p-2"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-neutral-300 hover:bg-gray-400 text-black p-2"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Projects;
