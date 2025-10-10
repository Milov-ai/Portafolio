import { Badge } from "@/core/components/ui/Badge";

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <Badge>{skill}</Badge>;
};

export default SkillBadge;
