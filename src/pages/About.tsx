import { motion } from "framer-motion";
import { FaLongArrowAltDown } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      staggerChildren: 0.4, // Increased delay between each item
    },
  },
  exit: { opacity: 0, x: "100vw" },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }, // Slightly longer duration
};

const About = () => {
  return (
    <motion.div
      className="flex justify-center items-center overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div
        className="dark:text-white h-fit w-2/3"
        variants={itemVariants}
      >
        <motion.h1
          className="text-6xl font-bold mb-2 dark:text-[#7cb494]"
          variants={itemVariants}
        >
          ABOUT
        </motion.h1>
        <motion.hr variants={itemVariants} />
        <motion.div className="mt-4 text-md">
          <motion.p variants={itemVariants}>
            Hey, my name is Deeshon Hunukumbura. I’m a full-stack developer with
            over two years of experience specializing in React, TypeScript, and
            Java for building scalable and efficient web applications.
          </motion.p>
          <br />
          <motion.p variants={itemVariants}>
            I started my career as a frontend developer at Circles.Life working
            with React, Next.js, and TypeScript. Over time, I expanded my skill
            set to backend development, working with Spring Boot and Java to
            build services that power modern web applications.
          </motion.p>
          <br />
          <motion.p variants={itemVariants}>
            Beyond my professional experience, I enjoy working on projects that
            challenge me to explore new technologies. I'm always on the go
            learning and practicing new technologies to keep myself updated and
            my skills polished.
          </motion.p>
        </motion.div>
        <motion.button
          type="button"
          className="cursor-pointer mt-5 flex items-center border-2 border-black dark:border-[#7cb494] dark:text-[#7cb494] w-1/9 rounded-2xl p-1 px-3 justify-between"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLongArrowAltDown />
          <h1>RESUME</h1>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;
