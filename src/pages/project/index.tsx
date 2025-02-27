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
      className="w-full h-96 m-10 mx-52"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="border-b-2 border-gray-500 pb-4" variants={itemVariants}>
        <h1 className="text-red-111 text-5xl font-bold">ACT RESPONSIBLE</h1>
      </motion.div>
      <motion.div className="mt-5" variants={itemVariants}>
        <p>
          Act Responsible is a modern web application built using {" "}
          <strong>React and Tailwind CSS</strong>, designed with a {" "}
          <strong>fully responsive</strong>
          layout to ensure seamless performance across all devices. It adheres
          to <strong>modern UI/UX standards</strong>, providing a sleek and
          intuitive user experience. The site features a {" "}
          <strong>dark mode toggle</strong>, implemented using React state
          management for theme persistence. Tailwind's utility-first approach
          enables efficient styling with optimized performance. The application {" "}
          <strong>
            follows best practices in component-based architecture, promoting
            reusability and maintainability.
          </strong>
        </p>
      </motion.div>
      <motion.div className="flex flex-col items-center mt-14" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <h1 className="text-ash text-2xl font-bold">HOME PAGE</h1>
        </motion.div>
        <motion.div className="my-10 w-full grid gap-10" variants={containerVariants}>
          {["/act-1.png", "/act-2.png", "/act-3.png"].map((src, index) => (
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
