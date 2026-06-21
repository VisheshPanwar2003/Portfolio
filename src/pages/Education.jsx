import TimelineColumn from "../components/TimelineColumn";

const education = [
  {
    year: "2024 - 2026",
    degree: "Master of Computer Applications",
    institute: "Amity University, Noida",
    description:
      "Specializing in Software Development, AI and Data Analytics.",
  },
  {
    year: "2021 - 2024",
    degree: "Bachelor of Computer Applications",
    institute: "Amity University, Noida",
    description:
      "Studied programming, databases, networking and software engineering.",
  },

];

const experience = [
  {
    year: "May 2025 - Jul 2025",
    degree: "Data Analyst Intern",
    institute: "Edulyt India",
    description:
      "Analyzed 50K+ user interactions and built dashboards.",
  },

];

export default function Journey() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            My Journey
          </h2>

          <div className="w-64 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <TimelineColumn
            title="Education"
            type="education"
            data={education}
          />

          <TimelineColumn
            title="Experience"
            type="experience"
            data={experience}
          />
        </div>
      </div>
    </section>
  );
}