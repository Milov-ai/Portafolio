import { Badge } from "@/core/components/ui/Badge";

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <Badge variant="outline" className="text-sm py-1 px-3">
      {skill}
    </Badge>
  );
};

export default SkillBadge;
