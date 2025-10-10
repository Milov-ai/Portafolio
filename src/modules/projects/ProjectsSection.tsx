import ProjectCard from "./components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FolderKanban } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Arquitecto de Ecosistemas de IA y Automatización 🤖",
    description: "Proyectos Personales de IA y Automatización",
    content:
      "Orquesté un ecosistema de 19 agentes de IA, desarrollando procesos de pensamiento complejos y contextos operativos (context engineering) para automatizar campañas de marketing de contenidos de extremo a extremo.",
    footer: "Agosto 2025 – Presente",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "2",
    title: "Automation & Data Systems Developer (Freelance) 📈",
    description: "JHOKER SPORT S.A.S.",
    content:
      "Ingenié un sistema de control de producción escalable en Google Sheets, centralizando procesos manuales mediante funciones clave en Google Apps Script que automatizaron la agregación de datos y la gestión del flujo de trabajo.",
    footer: "August 2025 - August 2025",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "3",
    title: "Architect & Lead Developer, Generative AI Pipeline 🚀",
    description: "Personal Project",
    content:
      "Desplegué una plataforma de automatización auto-alojada 24/7 en Google Cloud Platform, orquestando un entorno dual de contenedores con Docker que redujo los costos operativos en un 90%, de ~$50 a ~$5 mensuales.",
    footer: "June 2025 - July 2025",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "4",
    title: "Líder de Proyecto y Desarrollador Full-Stack 👨‍💻",
    description: "JHOKER SPORT S.A.S.",
    content:
      "Dirigí el ciclo de vida completo de un proyecto de gestión de inventario, desde el análisis de requisitos hasta el despliegue en producción, entregando una solución robusta y alineada con los objetivos estratégicos del negocio.",
    footer: "April 2025 - May 2025",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "5",
    title: "Arquitecto y Desarrollador Full-Stack 👕",
    description: "Fashion Flow (Gestor de Inventario para tiendas de ropa)",
    content:
      "Orquesté el desarrollo de una aplicación web de gestión de inventarios utilizando un stack moderno, entregando una solución escalable que optimiza las operaciones del sector retail.",
    footer: "Agosto 2024 – Diciembre 2024",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "6",
    title: "Desarrollador de Aplicaciones de Escritorio 💻",
    description: "Proyectos Universitarios (C# - Windows Forms)",
    content:
      "Conceptualicé y construí múltiples aplicaciones de escritorio en C# y Windows Forms, demostrando competencia en el diseño de UI y la integración con bases de datos SQL para resolver problemas de negocio.",
    footer: "2022-2024",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "7",
    title: "Analista de Datos y Machine Learning 📊",
    description: "Proyectos de Análisis de Datos (Python)",
    content:
      "Ejecuté análisis de datos en datasets complejos para extraer insights accionables, aplicando librerías especializadas de Python para la manipulación y visualización de datos.",
    footer: "2022-2024",
    liveUrl: "#",
    codeUrl: "#",
  },
];

const ProjectsSection = () => {
  const firstRow = useRef<HTMLDivElement>(null);
  const secondRow = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const projects1 = gsap.utils.toArray<HTMLDivElement>(".project-card-1");
        const projects2 = gsap.utils.toArray<HTMLDivElement>(".project-card-2");

        const timeline = gsap.timeline({ repeat: -1, yoyo: true });

        timeline
          .to(firstRow.current, {
            xPercent: -50,
            duration: 20,
            ease: "power1.inOut",
          })
          .to(
            secondRow.current,
            {
              xPercent: 50,
              duration: 20,
              ease: "power1.inOut",
            },
            "<",
          );

        const allProjects = [...projects1, ...projects2];

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
        const timeline = gsap.timeline({ repeat: -1, yoyo: true });
        const firstRowEl = firstRow.current;
        if (firstRowEl) {
          const rowWidth = firstRowEl.offsetWidth;
          const rowScrollWidth = firstRowEl.scrollWidth;

          timeline.to(firstRow.current, {
            x: -(rowScrollWidth - rowWidth),
            duration: 60,
            ease: "power1.inOut",
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
        Proyectos
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
