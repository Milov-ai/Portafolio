import { useRef, useState } from "react";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Wrench,
} from "lucide-react";

interface SkillCardProps {
  name: string;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  React: Code2,
  TypeScript: Code2,
  JavaScript: Code2,
  "Node.js": Server,
  "Next.js": Globe,
  "Tailwind CSS": Layout,
  HTML5: Layout,
  CSS3: Layout,
  PostgreSQL: Database,
  MongoDB: Database,
  Git: Terminal,
  Docker: Server,
  AWS: Globe,
  Figma: Layout,
  Mobile: Smartphone,
  Responsive: Smartphone,
  API: Globe,
  Testing: Wrench,
};

const SkillCard = ({ name }: SkillCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Icon = iconMap[name] || Terminal;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-3 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
        }}
      />
      <div className="relative flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5" />
        </div>
        <span className="font-medium text-sm text-foreground/90 break-words leading-tight">
          {name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
