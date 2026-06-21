export default function SkillCard({
  icon,
  name,
  color,
}) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div
        className={`
          text-6xl
          ${color}
          transition-transform
          duration-300
          group-hover:scale-110
        `}
      >
        {icon}
      </div>

      <p className="text-gray-300 text-sm md:text-base">
        {name}
      </p>
    </div>
  );
}