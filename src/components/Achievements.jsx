import { achievementsData } from "../data/constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div id="achievement" className="border-b border-neutral-700 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:pt-24 pt-20 pb-14 text-center text-neutral-400 text-4xl"
      >
        Achievements and{" "}
        <span className="text-blue-700 font-medium">Leadership</span>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-blue-950 via-black to-black p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">{achievement.title}</h2>
            <p className="text-lg mb-2">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
