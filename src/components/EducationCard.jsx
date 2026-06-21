export default function EducationCard({ item }) {
  return (
    <div
      className="
        bg-[#08131f]
        border
        border-blue-500/20
        rounded-xl

        p-[clamp(1rem,1.5vw,1.5rem)]

        backdrop-blur-md
        hover:border-blue-500/50
        transition-all
        duration-300
      "
    >
      <p
        className="
          text-blue-400
          font-semibold
          mb-2
          text-[clamp(0.8rem,0.9vw,0.95rem)]
        "
      >
        {item.year}
      </p>

      <h4
        className="
          text-white
          font-bold
          leading-tight
          text-[clamp(1.1rem,1.3vw,1.4rem)]
        "
      >
        {item.degree}
      </h4>

      <p
        className="
          text-cyan-300
          mt-1
          text-[clamp(0.85rem,1vw,1rem)]
        "
      >
        {item.institute}
      </p>

      <p
        className="
          text-gray-400
          mt-3
          leading-relaxed
          text-[clamp(0.85rem,1vw,1rem)]
        "
      >
        {item.description}
      </p>
    </div>
  );
}