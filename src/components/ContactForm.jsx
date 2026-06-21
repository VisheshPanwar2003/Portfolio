import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlinePencil,
} from "react-icons/hi";
import { MdOutlineSubject } from "react-icons/md";

export default function ContactForm() {
  return (
    <div
      className="
        bg-[#0b1320]
        border border-slate-800/80
        rounded-2xl
        p-[clamp(1.5rem,2vw,2rem)]
        shadow-2xl
        w-full
        max-w-[600px]
        ml-auto
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-[clamp(0.8rem,1vw,1rem)]
          mb-[clamp(1.5rem,2vw,2rem)]
        "
      >
        <div
          className="
            w-[clamp(2.8rem,3vw,3rem)]
            h-[clamp(2.8rem,3vw,3rem)]
            rounded-full
            bg-purple-500/10
            flex
            items-center
            justify-center
            flex-shrink-0
          "
        >
          <HiOutlineMail className="text-purple-400 text-[clamp(1.2rem,1.3vw,1.4rem)]" />
        </div>

        <div>
          <h3
            className="
              text-white
              font-bold
              mb-1
              text-[clamp(1.2rem,1.4vw,1.5rem)]
            "
          >
            Send a Message
          </h3>

          <p
            className="
              text-gray-400
              text-[clamp(0.85rem,1vw,1rem)]
            "
          >
            Fill out the form and I'll get back to you soon.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        className="
          space-y-[clamp(0.9rem,1vw,1rem)]
          text-[clamp(0.9rem,1vw,1rem)]
          text-white
        "
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="relative flex items-center">
            <HiOutlineUser className="absolute left-4 text-gray-500 text-lg" />

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
                py-[clamp(0.85rem,1vw,1rem)]
                outline-none
                focus:border-purple-500
                transition
                placeholder:text-gray-500
              "
            />
          </div>

          {/* Email */}
          <div className="relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-gray-500 text-lg" />

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
                py-[clamp(0.85rem,1vw,1rem)]
                outline-none
                focus:border-purple-500
                transition
                placeholder:text-gray-500
              "
            />
          </div>
        </div>

        {/* Subject */}
        <div className="relative flex items-center">
          <MdOutlineSubject className="absolute left-4 text-gray-500 text-lg" />

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
              py-[clamp(0.85rem,1vw,1rem)]
              outline-none
              focus:border-purple-500
              transition
              placeholder:text-gray-500
            "
          />
        </div>

        {/* Message */}
        <div className="relative">
          <HiOutlinePencil className="absolute left-4 top-4 text-gray-500 text-lg" />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="
              w-full
              bg-slate-900/50
              border border-slate-800
              rounded-xl
              pl-11
              pr-4
              py-[clamp(0.85rem,1vw,1rem)]
              outline-none
              focus:border-purple-500
              transition
              resize-none
              placeholder:text-gray-500
            "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full
            py-[clamp(0.85rem,1vw,1rem)]
            mt-2
            rounded-xl
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            font-bold
            tracking-wider
            text-[clamp(0.9rem,1vw,1rem)]
            shadow-lg
            shadow-indigo-500/20
            hover:scale-[1.01]
            active:scale-[0.99]
            transition
          "
        >
          SEND MESSAGE →
        </button>
      </form>
    </div>
  );
}