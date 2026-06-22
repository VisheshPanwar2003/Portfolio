import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlinePencil,
} from "react-icons/hi";
import { MdOutlineSubject } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactFormMobile() {
  return (
    <div>
      {/* Contact Card */}
      <div
        className="
          bg-[#0b1320]
          border border-slate-800/80
          rounded-2xl
          p-5
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="
              w-12
              h-12
              rounded-full
              bg-purple-500/10
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <HiOutlineMail className="text-purple-400 text-xl" />
          </div>

          <div>
            <h3 className="font-bold text-xl">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                GET IN TOUCH
              </span>
            </h3>

            <p className="text-white text-sm font-semibold mt-1 whitespace-nowrap">
              Let's build something together
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div className="relative">
            <HiOutlineUser className="absolute left-4 top-4 text-gray-500 text-lg" />

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-slate-900/50
                border border-slate-800
                rounded-xl
                pl-11
                pr-4
                py-3
                text-white
                outline-none
                focus:border-purple-500
                placeholder:text-gray-500
              "
            />
          </div>

          {/* Email */}
          <div className="relative">
            <HiOutlineMail className="absolute left-4 top-4 text-gray-500 text-lg" />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                bg-slate-900/50
                border border-slate-800
                rounded-xl
                pl-11
                pr-4
                py-3                
                text-white
                outline-none
                focus:border-purple-500
                placeholder:text-gray-500
              "
            />
          </div>

          {/* Subject */}
          <div className="relative">
            <MdOutlineSubject className="absolute left-4 top-4 text-gray-500 text-lg" />

            <input
              type="text"
              placeholder="Subject"
              className="
                w-full
                bg-slate-900/50
                border border-slate-800
                rounded-xl
                pl-11
                pr-4
                py-3                text-white
                outline-none
                focus:border-purple-500
                placeholder:text-gray-500
              "
            />
          </div>

          {/* Message */}
          <div className="relative">
            <HiOutlinePencil className="absolute left-4 top-4 text-gray-500 text-lg" />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="
                w-full
                bg-slate-900/50
                border border-slate-800
                rounded-xl
                pl-11
                pr-4
                py-3
                text-white
                outline-none
                resize-none
                focus:border-purple-500
                placeholder:text-gray-500
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-r
              from-indigo-500
              to-purple-500
              font-bold
              tracking-wider
              text-white
              shadow-lg
              shadow-indigo-500/20
            "
          >
            SEND MESSAGE →
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="text-center mt-2">
        <h3 className="text-2xl font-semibold mb-2">
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
            <HiOutlineMail className="text-3xl text-red-500" />
          </a>
        </div>
      </div>
    </div>
  );
}