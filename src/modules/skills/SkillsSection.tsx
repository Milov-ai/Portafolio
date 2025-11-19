import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/components/ui/Tabs";

import { Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import SkillCard from "./components/SkillCard";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/core/components/ui/Accordion";

const SkillsSection = () => {
  const { t } = useTranslation();
  const container = useRef(null);

  useGSAP(
    () => {
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

  const skillsData = t("skills.categories", { returnObjects: true });
  const skills =
    typeof skillsData === "object" && skillsData !== null
      ? (skillsData as Record<string, string[]>)
      : {};

  return (
    <section
      ref={container}
      id="seccion-habilidades"
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2 mb-12 text-gradient">
          <Wrench className="h-8 w-8 text-primary" />
          {t("skills.title")}
        </h2>

        {/* Mobile View: Accordion */}
        <div className="md:hidden w-full max-w-md mx-auto mb-8">
          <Accordion
            type="single"
            collapsible
            defaultValue="Languages"
            className="w-full"
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <AccordionItem
                key={category}
                value={category}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                  {category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {Array.isArray(skillList) &&
                      skillList.map((skill, index) => (
                        <SkillCard key={skill} name={skill} index={index} />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop View: Tabs */}
        <Tabs
          defaultValue="Languages"
          className="hidden md:block w-full max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8 w-full">
            <TabsList className="glass p-1 rounded-full relative">
              {Object.keys(skills).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 z-10 relative"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="glass-card p-8 rounded-3xl min-h-[300px] transition-all duration-500 hover:shadow-primary/10 hover:shadow-2xl">
            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent
                key={category}
                value={category}
                className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.isArray(skillList) &&
                    skillList.map((skill, index) => (
                      <SkillCard key={skill} name={skill} index={index} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
