import React from "react";
import profile from "../assets/profile.jpg";
import Typewriter from "typewriter-effect";
import { heroDetails } from "../data/constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const HeroContent = () => {
  return (
    <div id="about" className="border-b border-neutral-700 px-4 pb-10 lg:pb-8">
      <div className="flex lg:flex-row flex-col-reverse flex-wrap">
        <div className="max-lg:w-full w-1/2 flex items-center justify-center">
          <div className="flex flex-col max-lg:text-center items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              className="pb-5 mb:pb-16 text-6xl max-lg:text-4xl tracking-tight mt-10 lg:mt-16"
            >
              {heroDetails.name}
            </motion.h1>
            <span className="pb-12 mb:pb-24 bg-gradient-to-r from-pink-200 via-slate-500 to-blue-700 bg-clip-text tracking-tight text-2xl lg:text-3xl text-transparent">
              <Typewriter
                options={{
                  strings: heroDetails.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="relative group cursor-pointer flex items-center justify-center "
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-900 to-blue-800 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-black ring-1 ring-white-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                  <p className="text-neutral-400">
                    <a
                      href="https://drive.google.com/file/d/1dXeg4sWRAdf7B1AFGxLNnmv234ubwyS7/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Resume
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full p-10 lg:w-1/2 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >
            <motion.div
              className="absolute w-full h-full rounded-full bg-gradient-to-r from-pink-600 via-blue-900 to-black blur-md"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            ></motion.div>
            <img
              className="rounded-full relative p-4"
              src={profile}
              alt="Mahitha Rammohan"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
