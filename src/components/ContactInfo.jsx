import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactInfo() {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[420px]">
        <h2
          className="
            text-[clamp(2.2rem,2.8vw,2.8rem)]
            font-bold
            mb-[clamp(1.2rem,1.8vw,1.8rem)]
          "
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            GET IN TOUCH
          </span>
        </h2>

        <p
          className="
            text-[clamp(1rem,1.1vw,1.15rem)]
            text-gray-300
            leading-relaxed
            mb-[clamp(2rem,3vw,2.5rem)]
          "
        >
          Whether you have a project idea,
          hiring inquiry, or collaboration in
          mind — I'd love to connect.
        </p>

        <h3
          className="
            text-[clamp(1.7rem,2vw,2.2rem)]
            font-bold
            mb-[clamp(1.2rem,1.8vw,1.8rem)]
          "
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Connect With Me
          </span>
        </h3>

        <div className="space-y-[clamp(0.75rem,1vw,1rem)]">
          <a
            href="mailto:visheshpanwar3@gmail.com"
            className="
              flex
              items-center
              gap-[clamp(0.8rem,1vw,1rem)]
              border
              border-slate-700
              rounded-xl
              p-[clamp(0.8rem,1vw,1rem)]
              hover:border-purple-500
              transition
            "
          >
            <MdEmail className="text-[clamp(2rem,2.5vw,2.5rem)] text-red-500" />

            <div>
              <p className="text-[clamp(0.7rem,0.8vw,0.8rem)] text-gray-400">
                EMAIL
              </p>

              <p className="text-[clamp(0.85rem,1vw,1rem)] font-medium text-white">
                visheshpanwar3@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/visheshpanwar3"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-[clamp(0.8rem,1vw,1rem)]
              border
              border-slate-700
              rounded-xl
              p-[clamp(0.8rem,1vw,1rem)]
              hover:border-purple-500
              transition
            "
          >
            <FaLinkedin className="text-[clamp(2rem,2.5vw,2.5rem)] text-blue-500" />

            <div>
              <p className="text-[clamp(0.7rem,0.8vw,0.8rem)] text-gray-400">
                LINKEDIN
              </p>

              <p className="text-[clamp(0.85rem,1vw,1rem)] font-medium text-white">
                linkedin.com/in/visheshpanwar3
              </p>
            </div>
          </a>

          <a
            href="https://github.com/VisheshPanwar2003"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-[clamp(0.8rem,1vw,1rem)]
              border
              border-slate-700
              rounded-xl
              p-[clamp(0.8rem,1vw,1rem)]
              hover:border-purple-500
              transition
            "
          >
            <FaGithub className="text-[clamp(2rem,2.5vw,2.5rem)] text-white" />

            <div>
              <p className="text-[clamp(0.7rem,0.8vw,0.8rem)] text-gray-400">
                GITHUB
              </p>

              <p className="text-[clamp(0.85rem,1vw,1rem)] font-medium text-white">
                github.com/VisheshPanwar2003
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div
          className="
            bg-[#0B1D2B]/70
            border
            border-slate-800
            rounded-2xl
            p-6
            mb-6
          "
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Whether you have a project idea,
            hiring inquiry, or collaboration in
            mind — I'd love to connect.
          </p>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect With Me
            </span>
          </h3>

          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/visheshpanwar3"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14
                rounded-full
                border-2
                border-blue-500
                flex
                items-center
                justify-center
              "
            >
              <FaLinkedin className="text-3xl text-blue-500" />
            </a>

            <a
              href="https://github.com/VisheshPanwar2003"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14
                rounded-full
                border-2
                border-gray-400
                flex
                items-center
                justify-center
              "
            >
              <FaGithub className="text-3xl text-white" />
            </a>

            <a
              href="mailto:visheshpanwar3@gmail.com"
              className="
                w-14
                h-14
                rounded-full
                border-2
                border-red-500
                flex
                items-center
                justify-center
              "
            >
              <MdEmail className="text-3xl text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}