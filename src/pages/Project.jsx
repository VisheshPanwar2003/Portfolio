import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        max-w-[min(96vw,2200px)]
        mx-auto
        px-[clamp(1rem,2vw,3rem)]
        py-[clamp(4rem,6vw,7rem)]
      "
    >
      <div className="text-center mb-[clamp(2rem,3vw,3rem)]">
        <h2 className="text-[clamp(2.5rem,3vw,3.8rem)] font-bold text-white">
          My Projects
        </h2>

        <div className="w-[clamp(10rem,12vw,14rem)] h-1 bg-orange-400 rounded-full mx-auto mt-3" />
      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-[clamp(1rem,2vw,2rem)]
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}