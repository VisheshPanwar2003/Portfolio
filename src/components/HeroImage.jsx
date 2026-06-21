import profile from "../assets/profile2.png";

export default function HeroImage() {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative">
        <img
          src={profile}
          alt="Vishesh"
          className="
            w-[clamp(280px,28vw,520px)]
            aspect-square
            object-cover
            rounded-xl
          "
        />
      </div>
    </div>
  );
}