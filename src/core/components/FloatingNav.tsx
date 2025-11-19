import { Home, Code, Wrench, Mail } from "lucide-react";
import { Button } from "@/core/components/ui/Button";
import ThemeToggle from "@/core/components/ThemeToggle";
import { LanguageToggle } from "@/core/components/LanguageToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FloatingNav = () => {
  useGSAP(() => {
    // ScrollTrigger logic removed as active state highlighting is no longer needed
  }, []);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="group flex items-center gap-2 rounded-full bg-black/20 p-1.5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 ease-out hover:bg-black/40 hover:scale-105 hover:shadow-primary/20">
        <div className="flex items-center gap-1 rounded-full bg-background/60 p-1.5 backdrop-blur-md border border-white/5 transition-all duration-500">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#hero",
                ease: "power3.out",
              })
            }
          >
            <Home className="h-4 w-4" />
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2">
              Home
            </span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#seccion-proyectos",
                ease: "power3.out",
              })
            }
          >
            <Code className="h-4 w-4" />
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2">
              Projects
            </span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#seccion-habilidades",
                ease: "power3.out",
              })
            }
          >
            <Wrench className="h-4 w-4" />
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2">
              Skills
            </span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: "#seccion-contacto",
                ease: "power3.out",
              })
            }
          >
            <Mail className="h-4 w-4" />
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2">
              Contact
            </span>
          </Button>

          <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-1" />

          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
