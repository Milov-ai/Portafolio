import SkillBadge from "./components/SkillBadge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/components/ui/Tabs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Wrench } from "lucide-react";

const skills = {
  Lenguajes: ["Python", "C#", "TypeScript", "SQL"],
  "Desarrollo Web y Herramientas": [
    "Vite",
    "HeroUI",
    "Tailwind CSS",
    "HTML/CSS",
    "GSAP",
    "Supabase (BaaS)",
    "Git",
    "Docker",
    "Google Cloud Platform",
    "PowerShell",
    "FFmpeg",
    "n8n",
  ],
  "Inteligencia Artificial": [
    "Desarrollo con IA",
    "Ingeniería de Prompts",
    "Context Engineering",
    "System Instructions",
    "Diseño de Procesos de Pensamiento",
    "Gemini",
    "Imagen 4",
    "Imagen 3",
    "Veo 2",
    "Veo 3",
    "Nanobanana",
    "Machine Learning (Scikit-learn)",
    "Análisis de Datos (Pandas, NumPy)",
  ],
};

const SkillsSection = () => {
  const container = useRef(null);
  const [activeTab, setActiveTab] = useState("Lenguajes");

  useGSAP(
    () => {
      gsap.from(".skill-badge", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: container, dependencies: [activeTab] },
  );

  return (
    <section
      id="seccion-habilidades"
      ref={container}
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center"
    >
      <h2 className="container px-4 md:px-6 text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2">
        <Wrench className="h-8 w-8" />
        Habilidades
      </h2>
      <Tabs
        defaultValue="Lenguajes"
        className="w-full mt-8 max-w-3xl"
        onValueChange={(value) => setActiveTab(value)}
      >
        <div className="flex justify-center">
          <TabsList>
            {Object.keys(skills).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(skills).map(([category, skillList]) => (
          <TabsContent key={category} value={category}>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {skillList.map((skill) => (
                <div key={skill} className="skill-badge">
                  <SkillBadge skill={skill} />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default SkillsSection;
