import ProjectCard from "./components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FolderKanban } from "lucide-react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projectsData = t("projects.list", { returnObjects: true });
  const projects = Array.isArray(projectsData)
    ? projectsData
    : ([] as {
        id: string;
        title: string;
        description: string;
        content: string;
        footer: string;
        liveUrl: string;
        codeUrl: string;
        images?: string[];
      }[]);

  const container = useRef<HTMLDivElement>(null);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  useGSAP(
    () => {
      // Scroll reveal for the section
      gsap.from(container.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="seccion-proyectos"
      ref={container}
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center"
    >
      <h2 className="container px-4 md:px-6 text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2 text-gradient">
        <FolderKanban className="h-8 w-8 text-primary" />
        {t("projects.title")}
      </h2>

      <div className="w-full mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 touch-pan-y pl-4 md:pl-8">
          {projects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-[0_0_300px] md:flex-[0_0_350px] min-w-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
