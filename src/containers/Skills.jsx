import skills from "../../services/Skills.json";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="container font-poppins px-10 md:px-20 pb-20 dark:bg-gray-800"
    >
      <h1 className="text-4xl text-center pt-20 font-bold pb-16 dark:text-white">
        Skills
      </h1>
      <div className="grid md:grid-cols-4 lg:grid-cols-8 md:gap-5 lg:gap-10 grid-cols-2 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            className="rounded-xl flex flex-col items-center justify-between p-3 shadow bg-slate-100 dark:bg-gray-900 dark:text-white"
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
