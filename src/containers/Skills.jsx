import skills from "../services/Skills.json";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="px-10 pb-20 font-poppins md:px-20 dark:bg-gray-800"
    >
      <h1
        data-aos="fade-up"
        className="pt-20 pb-16 text-4xl font-bold text-center dark:text-white"
      >
        Skills
      </h1>
      <div
        className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 md:gap-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            data-aos="fade-left"
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center justify-between p-3 shadow rounded-xl bg-slate-100 dark:bg-gray-900 dark:text-white"
          >
            <img src={skill.logo} width={40} height={40} />
            <span className={`font-bold pt-3 text-[${skill.color}]`}>
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
