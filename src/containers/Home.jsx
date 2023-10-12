import { motion } from "framer-motion";
import Avatar from "/profile/avatar.png";
import { RiDownload2Line } from "react-icons/ri";
import { SocialMedia } from "../components/SocialMedia";
import { TypeWriter } from "../components/Typewriter";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <section
      id="home"
      className="py-10 bg-white font-poppins md:px-44 dark:bg-gray-800"
    >
      <div className="py-10 bg-white dark:md:bg-slate-800 dark:bg-gray-800 md:bg-slate-100 md:shadow-xl md:rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-evenly md:justify-between px-12 h-[500px]">
          <div className="dark:text-white">
            <div className="mb-2 text-3xl">
              <span data-aos="fade-right" className="duration-300">
                Hello there!
              </span>
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
            <h1 data-aos="fade-right" className="mb-2 text-4xl">
              AUFA RAMADHAN{" "}
            </h1>
            <h2 data-aos="fade-right" className="text-2xl">
              <TypeWriter />
            </h2>
            <SocialMedia />
            <div data-aos="fade-up" className="flex justify-center md:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="flex items-center px-8 py-2 mt-6 shadow-lg rounded-xl lg:mt-8 border-gray-50 dark:hover:bg-gray-900 dark:bg-gray-700 hover:bg-slate-200"
              >
                Download Resume
                <div className="text-xl ms-3">
                  <RiDownload2Line />
                </div>
              </motion.button>
            </div>
          </div>
          <Card
            Aos="fade-down"
            className="bg-slate-200 dark:bg-gray-900 !rounded-3xl mt-8"
          >
            <img
              src={Avatar}
              alt="avatar"
              className="rounded-br-3xl rounded-bl-3xl w-[200px] lg:w-[300px]"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
