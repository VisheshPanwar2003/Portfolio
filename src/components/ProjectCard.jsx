import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        h-full
        bg-zinc-900
        border
        border-zinc-800
        rounded-[clamp(1rem,1.5vw,2rem)]
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-orange-400
        hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-[clamp(180px,14vw,280px)]
          object-cover
        "
      />

      <div className="p-[clamp(1rem,1.4vw,2rem)] flex flex-col">
        <h3
          className="
            font-bold
            text-white
            mb-3
            text-[clamp(1.3rem,1.6vw,2rem)]
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-gray-400
            mb-5
            flex-grow
            leading-relaxed
            text-[clamp(0.9rem,0.95vw,1.05rem)]
          "
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-[clamp(0.6rem,0.8vw,0.9rem)]
                py-[clamp(0.25rem,0.4vw,0.45rem)]
                text-[clamp(0.7rem,0.75vw,0.85rem)]
                rounded-full
                bg-orange-500/10
                text-orange-400
                border
                border-orange-500/20
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-[clamp(0.5rem,1vw,1rem)] mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              py-[clamp(0.7rem,0.9vw,1rem)]
              rounded-xl
              border
              border-zinc-700
              text-white
              font-medium
              text-[clamp(0.85rem,0.9vw,1rem)]
              hover:border-orange-400
              hover:bg-zinc-800
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                flex
                items-center
                justify-center
                py-[clamp(0.7rem,0.9vw,1rem)]
                rounded-xl
                bg-orange-500
                text-white
                font-medium
                text-[clamp(0.85rem,0.9vw,1rem)]
                hover:bg-orange-600
                transition
              "
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}