import projects from "../services/Projects.json";

export const Project = () => {
  return (
    <section
      id="project"
      className="container font-poppins mx-auto px-10 md:px-20 pb-20 bg-slate-100 dark:bg-slate-800"
    >
      <h1 className="text-4xl text-center pt-16 pb-16 font-bold dark:text-white">
        Project
      </h1>
      <div className="md:grid md:grid-cols-4 md:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl z-10 bg-white shadow-lg md:mb-0 mb-5 dark:bg-gray-900"
          >
            <img
              src={project.image}
              alt=""
              className="rounded-tr-xl rounded-tl-xl"
            />
            <div className="p-3 dark:text-white">
              <span className="text-xl font-bold">{project.title}</span>
              <p className="text-sm my-3">{project.description}</p>
              <span className="text-md font-bold">Technology Used</span>
              <p className="text-sm mt-2">{project.technology}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
