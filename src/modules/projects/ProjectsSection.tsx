import ProjectCard from "./components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FolderKanban } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true }) as {
    id: string;
    title: string;
    description: string;
    content: string;
    footer: string;
    liveUrl: string;
    codeUrl: string;
  }[];

  const firstRow = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const projects1 = gsap.utils.toArray<HTMLDivElement>(".project-card-1");

        const timeline = gsap.timeline({ repeat: -1, yoyo: true });

        timeline.to(firstRow.current, {
          xPercent: -50,
          duration: 20,
          ease: "power1.inOut",
        });

        const allProjects = [...projects1];

        allProjects.forEach((project) => {
          const animation = gsap.to(project, {
            scale: 1.05,
            duration: 0.3,
            ease: "power3.out",
            paused: true,
          });

          project.addEventListener("mouseenter", () => {
            timeline.timeScale(0.2);
            animation.play();
          });

          project.addEventListener("mouseleave", () => {
            animation.reverse();
            timeline.timeScale(1);
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        const timeline = gsap.timeline({ repeat: -1 });
        const firstRowEl = firstRow.current;
        if (firstRowEl) {
          const halfWidth = firstRowEl.scrollWidth / 2;
          timeline.to(firstRow.current, {
            x: -halfWidth,
            duration: 150,
            ease: "none",
          });
        }
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
      <h2 className="container px-4 md:px-6 text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2">
        <FolderKanban className="h-8 w-8" />
        {t("projects.title")}
      </h2>
      <div className="w-full overflow-hidden">
        <div ref={firstRow} className="flex gap-6 mt-8 mb-5">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="project-card-1 shrink-0"
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
