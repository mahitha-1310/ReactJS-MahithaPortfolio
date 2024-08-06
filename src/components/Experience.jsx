import { motion } from "framer-motion";
import { experience } from "../data/constants";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-700 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:pt-24 pt-20 pb-14 text-center text-neutral-400 text-4xl"
      >
        My <span className="text-blue-700 font-medium">Experience</span>
      </motion.h1>
      <div>
        {experience.map((exp, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap justify-center lg:justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 items-center flex"
            >
              <p className="text-neutral-400 mb-2">{exp.year}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-lg:text-center border-2 border-neutral-700 w-full max-w-xl flex-wrap lg:w-3/4 rounded-md p-4"
            >
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-blue-700 text-transparent bg-clip-text">
                  {exp.company}
                </span>
              </h6>
              <p className="text-sm tracking-tighter text-neutral-400 my-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap max-lg:justify-center">
                {exp.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-blue-950 px-2 py-1 text-sm font-medium text-neutral-300 "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
