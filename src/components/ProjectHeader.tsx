import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Menu from "./Menu";
import { RiCloseLargeLine } from "react-icons/ri";
import { motion } from "framer-motion";

const ProjectHeader = ({
  isMenuOpen,
  setIsMenuOpen,
  pathname
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <div className="flex justify-around items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/10 px-10 pt-20 h-[500px]"
        >
          <div className="size-10 logo"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-7/10 h-[500px] rounded-b-4xl"
          style={{background: `url(${pathname}.png)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/10 px-1 pt-20 h-[500px]"
        >
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors ease-linear duration-300 rounded-full size-10 flex items-center justify-center cursor-pointer"
            >
              {!darkMode && <MdDarkMode size={25} />}
              {darkMode && <MdLightMode size={30} color="white" />}
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors ease-linear duration-300 rounded-full size-12 flex items-center justify-center"
            >
              {!isMenuOpen && <CgMenuGridO size={40} color={darkMode ? "white" : "black"} />}
              {isMenuOpen && <RiCloseLargeLine size={30} color={darkMode ? "white" : "black"} />}
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Menu onClickLink={() => setIsMenuOpen(false)} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectHeader;
