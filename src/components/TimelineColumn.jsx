import { GraduationCap, Briefcase } from "lucide-react";
import EducationCard from "./EducationCard";

export default function TimelineColumn({
  title,
  type,
  data,
}) {
  const Icon =
    type === "education"
      ? GraduationCap
      : Briefcase;

  return (
    <div>
      <div
        className="
          flex
          items-center
          gap-[clamp(0.75rem,1vw,1rem)]
          mb-[clamp(1.5rem,2vw,2.5rem)]
        "
      >
        <div
          className="
            w-[clamp(2.5rem,2.5vw,3rem)]
            h-[clamp(2.5rem,2.5vw,3rem)]
            rounded-full
            bg-indigo-500/10
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={20}
            className="text-indigo-400"
          />
        </div>

        <h3
          className="
            text-[clamp(1.25rem,1.5vw,1.75rem)]
            font-semibold
            text-white
          "
        >
          {title}
        </h3>
      </div>

      <div className="relative">
        <div
          className="
            absolute
            left-[clamp(0.9rem,1vw,1.1rem)]
            top-0
            bottom-0
            w-[2px]
            bg-blue-500/40
          "
        />

        {data.map((item, index) => (
          <div
            key={index}
            className="
              relative
              pl-[clamp(2.8rem,3vw,3.5rem)]
              mb-[clamp(1rem,1.5vw,1.5rem)]
            "
          >
            <div
              className="
                absolute
                left-0
                top-8
                w-[clamp(1.8rem,2vw,2rem)]
                h-[clamp(1.8rem,2vw,2rem)]
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-[clamp(0.8rem,1vw,1rem)]
                  h-[clamp(0.8rem,1vw,1rem)]
                  rounded-full
                  bg-blue-400
                  border-2
                  border-white
                  shadow-[0_0_15px_rgba(59,130,246,.7)]
                "
              />
            </div>

            <EducationCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}