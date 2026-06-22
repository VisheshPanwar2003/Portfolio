import CTAButtons from "./CTAButtons";

export default function HeroContent() {
  return (
    <div className="text-left md:text-left">
      <h2
        className="
          text-[clamp(2rem,3vw,4rem)]
          font-bold
          text-white
          mb-[clamp(0.8rem,1vw,1.5rem)]
        "
      >
        Hello
      </h2>

      <div
        className="
          w-[clamp(80px,6vw,120px)]
          h-[3px]
          bg-orange-400
          mb-[clamp(1rem,1.5vw,2rem)]
          mx-0
          md:mx-0
        "
      />

      <h3
        className="
          text-[clamp(1.5rem,2.5vw,3rem)]
          font-semibold
          text-white
          mb-[clamp(0.8rem,1vw,1.5rem)]
        "
      >
        I'm Vishesh
      </h3>

      <h1
        className="
          text-[2rem]
          sm:text-[2.5rem]
          md:text-[clamp(3rem,5vw,6rem)]
          font-bold
          text-white
          leading-tight
          whitespace-nowrap
          mb-[clamp(1.5rem,2vw,3rem)]
        "
      >
        Software Developer
      </h1>
      
      <CTAButtons />
    </div>
  );
}