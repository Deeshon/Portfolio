import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Project = () => {
  return (
    <motion.div
      className="w-full h-96 m-10 mx-52 dark:bg-black"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="border-b-2 border-gray-500 pb-4" variants={itemVariants}>
        <h1 className="text-[#645d61] text-5xl font-bold">Trending Threads</h1>
      </motion.div>
      <motion.div className="flex flex-col items-center mt-14" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <h1 className="text-ash text-2xl font-bold">LANDING PAGE</h1>
        </motion.div>
        <motion.div className="my-10 w-full grid gap-10 dark:bg-black" variants={containerVariants}>
          {["/trending-threads/image1.png", "/trending-threads/image2.png", "/trending-threads/image3.png", "/trending-threads/image4.png", "/trending-threads/image5.png"].map((src, index) => (
            <motion.div
              key={index}
              className="h-[450px] w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
              variants={itemVariants}
            ></motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
