import { motion } from "framer-motion";
import { RiGithubFill, RiInstagramLine, RiMailLine } from "react-icons/ri";

export const SocialMedia = () => {
  const Contact = [
    {
      link: "https://github.com/aufaramdhn",
      icon: <RiGithubFill />,
    },
    // {
    //   label: 'Youtube',
    //   link: 'https://www.youtube.com/@codebayu',
    //   icon: ,
    // },
    {
      link: "https://www.instagram.com/aufaramdhn",
      icon: <RiInstagramLine />,
    },
    // {
    //   label: 'LinkedIn',
    //   link: 'https://www.linkedin.com/in/bayu-setiawan99/',
    //   icon: ,
    // },
    {
      link: "mailto:ramadhanaufa3@gmail.com",
      icon: <RiMailLine />,
    },
    // {
    //   label: 'Discord',
    //   link: 'https://discord.gg/76UFeGdXy6',
    //   icon: ,
    // },
  ];
  return (
    <div className="flex mt-4">
      {Contact.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="text-2xl border-2 border-solid text-black hover:bg-black hover:text-white border-black rounded-full p-2 me-2 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
        >
          <a href={item.link}>{item.icon}</a>
        </motion.div>
      ))}
    </div>
  );
};
