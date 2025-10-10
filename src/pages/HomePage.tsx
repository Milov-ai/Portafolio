import { Button } from "@/core/components/ui/Button";
import ProjectsSection from "@/modules/projects/ProjectsSection";
import SkillsSection from "@/modules/skills/SkillsSection";
import ContactSection from "@/modules/contact/ContactSection";
import FloatingNav from "@/core/components/FloatingNav";
import CustomBackground from "@/core/components/CustomBackground";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HomePage = () => {
  const container = useRef(null);
  const hero = useRef(null);

  useGSAP(
    () => {
      gsap.from(hero.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="flex flex-col min-h-screen text-foreground">
      <CustomBackground />
      <FloatingNav />
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-background/50 backdrop-blur-sm">
        <div>{/* Logo can go here */}</div>
      </header>
      <main className="flex-1 z-10 overflow-hidden">
        <section
          id="hero"
          ref={hero}
          className="flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6"
        >
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
              Milov AI
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Desarrollador full stack experto en automatizaciones e ia
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() =>
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: "#seccion-proyectos",
                    ease: "power3.out",
                  })
                }
              >
                Ver Proyectos
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  CV
                </a>
              </Button>
            </div>
          </div>
        </section>
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
