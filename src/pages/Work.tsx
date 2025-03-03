import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { projects } from "../__data__/projects";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.3, // Delay of 0.3s between each item
    },
  },
  exit: { opacity: 0, x: "-100vw" }, // Exit smoothly
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Work = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <motion.div
      className="w-full flex justify-around mr-16 mt-10 dark:text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* Image Container with Smooth Fade-In */}
      <motion.div
        className={`w-2/4 mr-10 rounded-tr-4xl h-[480px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out`}
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        }}
        variants={itemVariants}
      ></motion.div>

      {/* Project List */}
      <motion.div variants={containerVariants}>
        <div className="border-b-2 border-gray-500 flex items-center justify-between pb-4">
          <motion.h1 className="text-6xl font-bold dark:text-[#7cb494]" variants={itemVariants}>
            WORK
          </motion.h1>
          <motion.p className="text-3xl" variants={itemVariants}>
            {projects.length}
          </motion.p>
        </div>

        {/* Scrollable List */}
        <motion.div className="overflow-y-auto overflow-x-hidden h-72 scrollable-div">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-2 items-center relative py-4 group hover:cursor-pointer"
              onMouseEnter={() => setImageUrl(project.image || "")}
              variants={itemVariants}
            >
              <Link to={project.url} className="text-xl mr-10">
                {project.title}
              </Link>
              <motion.p className="text-lg text-left" variants={itemVariants}>
                {project.stack}
              </motion.p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
