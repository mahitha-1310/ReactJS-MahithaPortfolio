import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../data/constants";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-700 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:pt-24 pt-20 pb-14 text-center text-neutral-400 text-4xl"
      >
        My <span className="text-blue-700 font-medium">Education</span>
      </motion.h1>
      <div>
        {educationData.map((education, index) => (
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
              <p className="text-neutral-400 mb-2">{education.year}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-lg:text-center border-2 border-neutral-700 w-full max-w-xl flex-wrap lg:w-3/4 rounded-md p-4"
            >
              <h6 className="mb-2 font-semibold">{education.degree}</h6>
              <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-blue-700 text-transparent bg-clip-text">
                {education.institution}
              </p>
              <p className="text-sm text-neutral-400 font-semibold my-3">
                {education.score}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
