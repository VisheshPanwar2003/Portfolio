import agriImg from "../assets/agri.png";
import ecomImg from "../assets/ecom.png";
import survImg from "../assets/surv.png";

const projects = [
  {
    id: 1,
    title: "AgriSense AI",
    image: agriImg,
    description:
      "AI-powered crop disease detection, weather insights, and intelligent farming assistance platform.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "YOUR_AGRISENSE_GITHUB_LINK",
    demo: "https://agrisense.vercel.app",
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    image: ecomImg,
    description:
      "Modern e-commerce platform featuring product management, authentication, and seller dashboard.",
    tags: ["React", "Express", "MongoDB"],
    github: "YOUR_ECOMMERCE_GITHUB_LINK",
    demo: "https://agrisense.vercel.app",
  },
  {
    id: 3,
    title: "Smart Surveillance System",
    image: survImg,
    description:
      "Real-time threat detection system with face, fire, weapon, motion, and accident detection.",
    tags: ["Python", "YOLOv8", "PyQt6"],
    github: "YOUR_SURVEILLANCE_GITHUB_LINK",
    demo: "https://agrisense.vercel.app",
  },
];

export default projects;