import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        max-w-[min(92vw,1400px)]
        mx-auto
        px-6
        lg:px-12
        py-24
      "
    >
      <div
        className="
          grid
          lg:grid-cols-[0.8fr_1.2fr]
          gap-[clamp(2rem,2.5vw,3rem)]
          items-start
        "
      >
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}