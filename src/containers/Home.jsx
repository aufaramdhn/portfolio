import { motion } from "framer-motion";
import Avatar from "/profile/avatar.png";
import { RiDownload2Line } from "react-icons/ri";
import { SocialMedia } from "../components/SocialMedia";
import { TypeWriter } from "../components/Typewriter";

export const Home = () => {
  return (
    <section
      id="home"
      className="font-poppins md:px-44 py-10 dark:bg-gray-800 bg-white"
    >
      <div className="dark:md:bg-slate-800 dark:bg-gray-800 bg-white md:bg-slate-100 md:shadow-xl md:rounded-xl py-10">
        <div className="flex flex-col lg:flex-row items-center justify-evenly md:justify-between px-12 h-[500px]">
          <div className="dark:text-white">
            <div className="text-3xl mb-2">
              <span>Hello</span>
              <motion.div
                className="bg-black"
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </div>
            <h1 className="text-4xl mb-2">AUFA RAMADHAN </h1>
            <h2 className="text-2xl">
              <TypeWriter />
            </h2>
            <SocialMedia />
            <div className="flex md:block justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="px-8 py-2 rounded-xl mt-6 lg:mt-8 border-gray-50 shadow-lg flex items-center dark:hover:bg-gray-900 dark:bg-gray-700 hover:bg-slate-200"
              >
                Download Resume
                <div className="text-xl ms-3">
                  <RiDownload2Line />
                </div>
              </motion.button>
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-gray-900 rounded-3xl shadow-lg mt-8">
            <img
              src={Avatar}
              alt="avatar"
              className="rounded-br-3xl rounded-bl-3xl w-[200px] lg:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
