import { useRef, useEffect } from "react";
import gsap from "gsap";
import SkillBadge from "./SkillBadge";

interface SkillsContentProps {
  skills: string[];
}

const SkillsContent = ({ skills }: SkillsContentProps) => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-badge", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, [skills]);

  return (
    <div ref={container} className="flex flex-wrap justify-center gap-2 mt-4">
      {skills.map((skill) => (
        <div key={skill} className="skill-badge">
          <SkillBadge skill={skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
