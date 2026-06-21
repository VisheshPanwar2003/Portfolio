export default function CTAButtons() {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-[clamp(0.75rem,1vw,1.25rem)]
        justify-center
        md:justify-start
      "
    >
      <button
        className="
          bg-orange-400
          text-white
          rounded-lg
          font-medium
          transition-all
          hover:scale-105

          px-[clamp(1rem,1.5vw,2rem)]
          py-[clamp(0.75rem,1vw,1rem)]
          text-[clamp(0.9rem,1vw,1.1rem)]
        "
      >
        Got A Project?
      </button>

      <button
        className="
          border
          border-orange-400
          text-white
          rounded-lg
          font-medium
          transition-all
          hover:scale-105

          px-[clamp(1rem,1.5vw,2rem)]
          py-[clamp(0.75rem,1vw,1rem)]
          text-[clamp(0.9rem,1vw,1.1rem)]
        "
      >
        My Resume
      </button>
    </div>
  );
}