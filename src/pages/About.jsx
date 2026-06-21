import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";

import SkillCard from "../components/SkillCard";

export default function About() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML",
      color: "text-orange-500",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      color: "text-blue-500",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    {
      icon: <FaReact />,
      name: "React",
      color: "text-cyan-400",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "text-green-500",
    },
    {
      icon: <FaGitAlt />,
      name: "Version Control",
      color: "text-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="
        max-w-[min(92vw,1800px)]
        mx-auto
        px-[clamp(1.5rem,2vw,3rem)]
        py-[clamp(5rem,7vw,7rem)]
      "
    >
      <div className="text-center mb-[clamp(1.5rem,2vw,2.5rem)]">
        <h2 className="text-[clamp(2.75rem,3vw,3.5rem)] font-bold text-white">
          About
        </h2>

        <div className="w-[clamp(10rem,12vw,14rem)] h-1 bg-orange-400 rounded-full mx-auto mt-0" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify space-y-6">
          <p>
            Hi, I'm Vishesh, an MCA graduate and aspiring Software Developer
            with hands-on experience in MERN Stack development and AI-powered
            web applications. I specialize in building scalable full-stack
            solutions using React.js, Node.js, Express.js, MongoDB, and
            Gemini API integration.
          </p>

          <p>
            My technical expertise includes Java, JavaScript, Data Structures
            & Algorithms, OOP, DBMS, and RESTful API development. I am
            passionate about transforming ideas into practical software
            solutions, continuously learning new technologies, and creating
            applications that deliver real value to users.
          </p>
        </div>
      </div>

      <div
        className="
          text-center
          mt-[clamp(1.5rem,2vw,2.5rem)]
          mb-[clamp(1.5rem,2vw,2.5rem)]
        "
      >
        <h2 className="text-[clamp(2.75rem,3vw,3.5rem)] font-bold text-white">
          Skills
        </h2>

      <div className="w-[clamp(10rem,12vw,14rem)] h-1 bg-orange-400 rounded-full mx-auto mb-[clamp(2rem,4vw,3rem)]" />
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            gap-[clamp(2rem,4vw,4rem)]
            max-w-[1100px]
            mx-auto
            justify-items-center
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}