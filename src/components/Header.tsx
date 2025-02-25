import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import Menu from "./Menu";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
    < div className="pt-24">
      <div className="p-5 h-[20%] px-24 flex justify-between items-center">
        <div className="size-10 logo"></div>
        <div className="flex w-28 justify-between items-center">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors ease-linear duration-300 rounded-full size-10 flex items-center justify-center"
          >
            {!darkMode && <MdDarkMode size={25} />}
            {darkMode && <MdLightMode size={30} color="white" />}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors ease-linear duration-300 rounded-full size-12 flex items-center justify-center"
          >
            {!isMenuOpen && (
              <CgMenuGridO
                size={40}
                color={`${darkMode ? "white" : "black"}`}
              />
            )}
            {isMenuOpen && (
              <RiCloseLargeLine
                size={30}
                color={`${darkMode ? "white" : "black"}`}
              />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && <Menu onClickLink={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default Header;
