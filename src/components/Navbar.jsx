export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#081824]/90 backdrop-blur-md">
      <nav
        className="
          w-full
          px-[clamp(2rem,6vw,8rem)]
          py-[clamp(1rem,1.2vw,1.5rem)]
        "
      >
        <div className="flex justify-between items-center">
          <h1
            className="
              text-white
              font-bold
              text-[clamp(1.5rem,1.8vw,2.5rem)]
            "
          >
            Vishesh Panwar
          </h1>

          <div
            className="
              flex
              items-center

              gap-[clamp(1.5rem,2vw,4rem)]

              text-white
              text-[clamp(1rem,1vw,1.2rem)]
            "
          >
            <a
              href="#about"
              className="hover:text-orange-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-orange-400 transition"
            >
              Projects
            </a>

            <a
              href="#education"
              className="hover:text-orange-400 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              className="hover:text-orange-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}