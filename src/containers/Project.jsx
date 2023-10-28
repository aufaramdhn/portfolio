import CardProject from "../components/Card/CardProject";

export const Project = () => {
  return (
    <section
      id="project"
      className="px-10 pb-20 mx-auto font-poppins md:px-20 bg-slate-50 dark:bg-gray-800"
    >
      <h1
        data-aos="fade-up"
        className="pt-16 pb-16 text-4xl font-bold text-center dark:text-white"
      >
        Project
      </h1>
      <CardProject />
    </section>
  );
};
