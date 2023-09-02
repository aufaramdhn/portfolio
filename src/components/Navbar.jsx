import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  RiMoonClearLine,
  RiMenuFill,
  RiCloseFill,
  RiSunLine,
} from "react-icons/ri";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeSwitch = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={`w-full shadow-lg sticky top-0 z-10 transition duration-300 scroll-smooth h-max ${
        isScroll
          ? "bg-gray-100 dark:bg-gray-900"
          : "bg-white dark:bg-gray-800 text-black"
      }`}
    >
      <div className="md:flex justify-between items-center py-3 px-6 md:px-12 font-poppins">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold dark:text-white">aufaramdhn</span>
          <div className="block md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl transition-transform transform dark:text-white"
            >
              {isOpen ? <RiCloseFill /> : <RiMenuFill />}
            </motion.button>
          </div>
        </div>
        <div className="hidden dark:text-white md:flex flex-col md:flex-row md:gap-10 gap-2 my-3 cursor-pointer">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="hidden md:block border-solid p-2 rounded-xl shadow cursor-pointer w-10 md:w-9 dark:text-white hover:bg-slate-200 dark:hover:bg-gray-950 text-xl"
          onClick={handleThemeSwitch}
        >
          {darkMode === "light" ? <RiSunLine /> : <RiMoonClearLine />}
        </motion.button>

        {isOpen && (
          <>
            <div className="flex md:hidden h-[125px] dark:text-white flex-col md:gap-2 gap-2 my-3 cursor-pointer">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#project">Project</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="dark:text-white hover:bg-slate-200 dark:hover:bg-gray-950 p-2 rounded-xl shadow cursor-pointer w-9 text-xl md:hidden"
              onClick={handleThemeSwitch}
            >
              {darkMode === "light" ? <RiSunLine /> : <RiMoonClearLine />}
            </motion.button>
          </>
        )}
      </div>
    </nav>
  );
};
