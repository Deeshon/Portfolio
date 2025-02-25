import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";





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

const Contact = () => {
  return (
    <motion.div
      className="flex w-full pl-[500px] overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div
        className="dark:text-white h-fit pt-32"
        variants={itemVariants}
      >
        <motion.h1
          className="text-6xl font-bold mb-2 dark:text-[#7cb494]"
          variants={itemVariants}
        >
          CONTACT
        </motion.h1>
        <motion.hr variants={itemVariants} />
        <motion.div className="mt-8 text-2xl">
        <motion.p variants={itemVariants}>
            <div className="flex  items-center">
              <FaPhoneSquareAlt className="cursor-pointer" size={30} />
              <div className="flex items-center ml-3 cursor-pointer">
                <MdArrowOutward />
                <h1 className="ml-1">+94 74 354 6243</h1>
              </div>
            </div>
          </motion.p>
          <br />
          <motion.p variants={itemVariants}>
            <div className="flex  items-center">
              <BiLogoGmail className="cursor-pointer" size={30} />
              <div className="flex items-center ml-3 cursor-pointer">
                <MdArrowOutward />
                <h1 className="ml-1">deeshonhunukumbura01@gmail.com</h1>
              </div>
            </div>
          </motion.p>
          <br />
          <motion.p variants={itemVariants}>
            <div className="flex  items-center">
              <FaLinkedin className="cursor-pointer" size={30} />
              <div className="flex items-center ml-3 cursor-pointer">
                <MdArrowOutward />
                <h1 className="ml-1">https://www.linkedin.com/in/deeshonhunukumbura</h1>
              </div>
            </div>
          </motion.p>
          <br />
          <motion.p variants={itemVariants}>
            <div className="flex  items-center">
              <FaGithubSquare className="cursor-pointer" size={30} />
              <div className="flex items-center ml-3 cursor-pointer">
                <MdArrowOutward />
                <h1 className="ml-1">https://github.com/Deeshon</h1>
              </div>
            </div>
          </motion.p>
          <br />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
