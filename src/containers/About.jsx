import skills from "../services/Skills.json";
import Github from "../components/GithubContribution";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 dark:bg-slate-800 bg-slate-100 font-poppins"
    >
      <h1
        data-aos="fade-up"
        className="pb-6 text-4xl font-bold text-center dark:text-white"
      >
        About Me
      </h1>
      <div className="dark:text-white ">
        <p
          data-aos="fade-right"
          className="px-10 pt-10 pb-20 text-justify md:px-64"
        >
          Saya Aufa Ramadhan seorang Frontend Developer, berpengalaman sebagai
          Mobile Developer selama 3 bulan. Mampu membuat sebuah aplikasi
          berbasis mobile dan website dengan menggunakan React Native dan
          ReactJS Bahasa Pemrograman JavaScript.
        </p>
      </div>
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
      <div className="github-contribution">
        <Github />
      </div>
    </section>
  );
};
