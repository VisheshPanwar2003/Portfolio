import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        min-h-screen
        flex
        items-start
        md:items-center
        pt-16
        md:pt-0
        py-[clamp(3rem,6vw,8rem)]
      "
    >
      <div
        className="
          w-full
          max-w-[min(92vw,1800px)]
          mx-auto
          px-[clamp(1rem,3vw,4rem)]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            items-center
            gap-[clamp(2rem,5vw,8rem)]
          "
        >
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}