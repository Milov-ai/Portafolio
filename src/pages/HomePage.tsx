import { Button } from "@/core/components/ui/Button";
import ProjectsSection from "@/modules/projects/ProjectsSection";
import SkillsSection from "@/modules/skills/SkillsSection";
import ContactSection from "@/modules/contact/ContactSection";
import FloatingNav from "@/core/components/FloatingNav";
import CustomBackground from "@/core/components/CustomBackground";
import FloatingDecorations from "@/core/components/FloatingDecorations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FloatingProfileCard from "@/core/components/FloatingProfileCard";
import Footer from "@/core/components/Footer";
import { useRef } from "react";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();
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
      <FloatingDecorations />
      <FloatingNav />
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-background/50 backdrop-blur-sm">
        <div>{/* Logo can go here */}</div>
      </header>
      <main className="flex-1 z-10 overflow-hidden">
        <FloatingProfileCard />
        <section
          id="hero"
          ref={hero}
          className="flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6"
        >
          <div className="max-w-4xl space-y-8 relative z-10">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl font-sans bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 overflow-hidden">
              {t("hero.title")
                .split("")
                .map((char, index) => (
                  <span
                    key={index}
                    className="inline-block animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-backwards"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Button
                size="lg"
                variant="premium"
                className="text-lg h-14 px-10 rounded-full shadow-xl shadow-primary/20"
                onClick={() =>
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: "#seccion-proyectos",
                    ease: "power3.out",
                  })
                }
              >
                {t("hero.viewProjects")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg h-14 px-10 rounded-full border-input bg-background/50 hover:bg-accent hover:text-accent-foreground backdrop-blur-md"
                asChild
              >
                <a
                  href={`/CV Camilo Jaramillo 2025 ${i18n.language}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t("hero.downloadCV")}
                </a>
              </Button>
            </div>
          </div>
        </section>
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
