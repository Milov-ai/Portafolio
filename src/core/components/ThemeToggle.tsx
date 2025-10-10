import { useTheme } from "@/core/providers/ThemeProvider";
import { Switch } from "@/core/components/ui/Switch";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={(checked) => {
        setTheme(checked ? "dark" : "light");
      }}
    />
  );
};

export default ThemeToggle;
