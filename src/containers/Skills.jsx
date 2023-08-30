import React from "react";
import skills from "../services/Skills.json";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div className="font-poppins px-16 pb-20">
      <h1 className="text-4xl text-center pt-6 pb-16">Skills</h1>
      <div className="grid grid-cols-8 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="rounded-xl flex flex-col items-center justify-between p-3 shadow bg-neutral-100"
          >
            <img src={skill.logo} width={40} height={40} />
            <span className={`font-bold pt-3 text-[${skill.color}]`}>
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
