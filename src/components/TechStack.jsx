import skills from "../services/Skills.json";

import React from "react";

export default function TechStack() {
  return (
    <div className="teach-stack">
      <h3
        data-aos="fade-up"
        className="pb-10 text-2xl font-bold text-center dark:text-white"
      >
        Tech Stack
      </h3>
      <div className="flex items-center justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} data-aos="fade-left">
            <img src={skill.logo} width={35} height={35} />
          </div>
        ))}
      </div>
    </div>
  );
}
