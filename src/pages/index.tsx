import { motion } from "framer-motion";
import { GrLinkNext } from "react-icons/gr";

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" }, // Use vw instead of percentage
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      staggerChildren: 0.3, // Delay of 0.3s between each item
    },
  },
  exit: { opacity: 0, x: "100vw" }, // Exit smoothly
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <>
      <motion.div
        className="flex flex-col text-center items-center pt-24 overflow-x-hidden w-full dark:text-white"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1
          className="text-5xl font-bold dark:text-[#7cb494]"
          variants={itemVariants}
        >
          HEY, I'M DEESHON HUNUKUMBURA
        </motion.h1>
        <motion.h1
          className="text-3xl font-semibold dark:text-[#cdd7f6] text-[#8892c3]"
          variants={itemVariants}
        >
          A FRONTEND FOCUSED FULL-STACK DEVELOPER
        </motion.h1>
        <motion.div className="w-[50%] text-center" variants={itemVariants}>
          <p>
            Innovating the web with purpose and precision. As a full-stack
            developer, I create accessible, user-friendly digital experiences
            that leave a lasting impact.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full justify-center  mt-6 text-lg"
          variants={itemVariants}
        >
          <motion.div
            className="group flex items-center m-2 mx-4 justify-around relative cursor-pointer"
            variants={itemVariants}
          >
            <p>See My Projects</p>
            <GrLinkNext />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
          <motion.div
            className="group flex items-center m-2 mx-4 justify-around relative cursor-pointer"
            variants={itemVariants}
          >
            <p>More About Me</p>
            <GrLinkNext />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
    // <div className="border-2 border-black h w-full">Home</div>
  );
};

export default Home;
