import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  { id: "01", label: "HOME" },
  { id: "02", label: "WORK" },
  { id: "03", label: "ABOUT" },
  { id: "04", label: "CONTACT" },
];

const socialLinks = [
  { id: "linkedin", icon: <FaLinkedin />, label: "LinkedIn" },
  { id: "github", icon: <FaGithub />, label: "GitHub" },
];

const Menu = ({onClickLink}: {onClickLink: () => void}) => {
  return (
    <motion.div
      className="pl-80 pt-1 dark:bg-black w-1/2 p-10 dark:text-white"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Menu Items */}
      <div>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear", delay: index * 0.1 }}
            className="group flex w-full text-right items-center my-6 relative cursor-pointer"
          >
            <p className="text-xl">{item.id}</p>
            <div className="ml-3">
              <h1 className="text-6xl font-bold dark:text-[#7cb494]">
                <Link to={item.label === 'HOME' ? '/' : `/${item.label.toLocaleLowerCase()}`} onClick={onClickLink}>{item.label}</Link>
              </h1>
            </div>
            {/* Hover Effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-7">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.id}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear", delay: index * 0.1 }}
            className="flex items-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-400 dark:hover:text-black hover:text-white p-1 rounded-2xl px-4 transition-colors duration-400 ease-in-outt"
          >
            {link.icon}
            <p className="ml-2">{link.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
