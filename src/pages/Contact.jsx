import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactFormMobile from "../components/ContactFormMobile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        max-w-[min(95vw,1400px)]
        mx-auto
        px-4
        md:px-6
        lg:px-12
        py-20
        md:py-24
      "
    >
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.2fr] gap-[clamp(2rem,2.5vw,3rem)] items-start">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Mobile & Tablet */}
      {/* Mobile */}
      <div className="lg:hidden">
        <ContactFormMobile />
      </div>
    </section>
  );
}