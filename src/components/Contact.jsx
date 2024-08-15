import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:pt-24 pt-20 pb-14 text-center text-neutral-400 text-4xl"
      >
        Get in <span className="text-blue-700 font-medium">Touch</span>
      </motion.h1>{" "}
      <div className="flex align-center justify-center ">
        <a
          className="mx-4 text-4xl hover:text-gray-400"
          href="https://github.com/mahitha-1310?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="mx-4 text-4xl hover:text-gray-400"
          href="mailto:mahitha.rammohan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoMdMail />
        </a>
        <a
          className="mx-4 text-4xl hover:text-gray-400"
          href="https://www.linkedin.com/in/mahitha-rammohan-607417210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="flex justify-center my-8">
        <div className="w-42 flex justify-center align-center items-center relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-900 to-blue-800 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-black ring-1 ring-white-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-neutral-400">
                <a
                  href="https://drive.google.com/file/d/11ZfWQoo1_zkhTHrLrLcsWm0HSlBM8dE_/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
