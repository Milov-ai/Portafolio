import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/components/ui/Tabs";

import { Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import SkillsContent from "./components/SkillsContent";

const SkillsSection = () => {
  const { t } = useTranslation();
  const skillsData = t("skills.categories", { returnObjects: true });
  const skills =
    typeof skillsData === "object" && skillsData !== null
      ? (skillsData as Record<string, string[]>)
      : {};

  return (
    <section
      id="seccion-habilidades"
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center"
    >
      <h2 className="container px-4 md:px-6 text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2">
        <Wrench className="h-8 w-8" />
        {t("skills.title")}
      </h2>
      <Tabs
        defaultValue={Object.keys(skills)[0] || ""}
        className="w-full mt-8 max-w-3xl"
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
            {Array.isArray(skillList) && <SkillsContent skills={skillList} />}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default SkillsSection;
