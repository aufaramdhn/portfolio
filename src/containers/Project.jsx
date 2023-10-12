import { Card } from "../components/Card";
import projects from "../services/Projects.json";

export const Project = () => {
  return (
    <section
      id="project"
      className="px-10 pb-20 mx-auto font-poppins md:px-20 bg-slate-100 dark:bg-slate-800"
    >
      <h1
        data-aos="fade-up"
        className="pt-16 pb-16 text-4xl font-bold text-center dark:text-white"
      >
        Project
      </h1>
      <div
        data-aos="fade-right"
        className="lg:grid md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10"
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className="z-10 mb-5 bg-white md:mb-0 dark:bg-gray-900"
          >
            <img
              src={project.image}
              alt=""
              className="rounded-tr-xl rounded-tl-xl"
            />
            <div className="p-3 dark:text-white">
              <span className="text-xl font-bold">{project.title}</span>
              <p className="my-3 text-sm">{project.description}</p>
              <span className="font-bold text-md">Technology Used</span>
              <p className="mt-2 text-sm">{project.technology}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
