import projects from "../../services/Projects.json";
import { Card } from "./Card";

export default function CardProject() {
  return (
    <>
      <div className="lg:grid md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            dataAos="fade-right"
            className="mb-5 bg-white md:mb-0 dark:bg-gray-900"
          >
            <img
              src={project.image}
              alt=""
              className="rounded-tr-xl rounded-tl-xl"
            />
            <div className="p-3 dark:text-white">
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="my-3 text-sm">{project.description}</p>
              <h5 className="font-bold text-md">Technology Used</h5>
              <p className="mt-2 text-sm">{project.technology}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
