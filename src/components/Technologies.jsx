import { RiReactjsLine } from "react-icons/ri";
import { DiSwift } from "react-icons/di";
import {
  SiFigma,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiAngular,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";

const container = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className=" border-b border-neutral-700 pb-8">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:pt-24 pt-20 pb-14 text-center text-neutral-400 text-4xl"
      >
        My <span className="text-blue-700 font-medium">Skills</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={container(2.5)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 mb-4" />
          <h1>ReactJS</h1>
        </motion.div>
        <motion.div
          variants={container(2.5)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiNextdotjs className="text-7xl text-white mb-4" />
          <h1>Next.js</h1>
        </motion.div>
        <motion.div
          variants={container(3)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiNodedotjs className="text-7xl text-green-500 mb-4" />
          <h1>Node.js</h1>
        </motion.div>
        <motion.div
          variants={container(3.5)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiAngular className="text-7xl text-red-500 mb-4" />
          <h1>Angular</h1>
        </motion.div>
        <motion.div
          variants={container(4)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <RiReactjsLine className="text-7xl mb-4" />
          <h1>React Native</h1>
        </motion.div>
        <motion.div
          variants={container(2)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiFigma className="text-7xl text-purple-600 mb-4" />
          <h1>Figma</h1>
        </motion.div>
        <motion.div
          variants={container(3.7)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <DiJavascript1 className="text-7xl text-yellow-400 mb-4" />
          <h1>JavaScript</h1>
        </motion.div>

        <motion.div
          variants={container(2.3)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiMongodb className="text-7xl text-green-500 mb-4" />
          <h1>MongoDB</h1>
        </motion.div>
        <motion.div
          variants={container(4.2)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiMysql className="text-7xl text-yellow-500 mb-4" />
          <h1>MySQL</h1>
        </motion.div>
        <motion.div
          variants={container(3.2)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <FaJava className="text-7xl text-red-600 mb-4" />
          <h1>Java</h1>
        </motion.div>
        <motion.div
          variants={container(2.7)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <FaPython className="text-7xl text-yellow-500 mb-4" />
          <h1>Python</h1>
        </motion.div>

        <motion.div
          variants={container(4.5)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <DiSwift className="text-7xl text-orange-500 mb-4" />
          <h1>SwiftUI</h1>
        </motion.div>
        <motion.div
          variants={container(2.8)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <RiTailwindCssFill className="text-7xl text-teal-400 mb-4" />
          <h1>Tailwind CSS</h1>
        </motion.div>
        <motion.div
          variants={container(3.3)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <SiBootstrap className="text-7xl text-purple-500 mb-4" />
          <h1>Bootstrap</h1>
        </motion.div>
        <motion.div
          variants={container(4.6)}
          initial="initial"
          animate="animate"
          className="tech-box"
        >
          <FaWordpress className="text-7xl text-blue-600 mb-4" />
          <h1>WordPress</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
