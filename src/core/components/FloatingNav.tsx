import { Home, Code, Wrench, Mail } from "lucide-react";
import { Button } from "@/core/components/ui/Button";
import ThemeToggle from "@/core/components/ThemeToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useGSAP(() => {
    const sections = [
      "hero",
      "seccion-proyectos",
      "seccion-habilidades",
      "seccion-contacto",
    ];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });
  }, []);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
      <div className="flex items-center gap-2 rounded-full bg-primary/7 p-1 backdrop-blur-sm">
        <div className="flex items-center gap-2 rounded-full bg-background/80 p-2 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#hero",
                ease: "power3.out",
              })
            }
          >
            <Home
              className={`h-4 w-4 ${activeSection === "hero" ? "text-primary" : ""}`}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#seccion-proyectos",
                ease: "power3.out",
              })
            }
          >
            <Code
              className={`h-4 w-4 ${activeSection === "seccion-proyectos" ? "text-primary" : ""}`}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#seccion-habilidades",
                ease: "power3.out",
              })
            }
          >
            <Wrench
              className={`h-4 w-4 ${activeSection === "seccion-habilidades" ? "text-primary" : ""}`}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#seccion-contacto",
                ease: "power3.out",
              })
            }
          >
            <Mail
              className={`h-4 w-4 ${activeSection === "seccion-contacto" ? "text-primary" : ""}`}
            />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
