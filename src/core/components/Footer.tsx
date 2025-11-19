import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 text-center text-sm text-muted-foreground glass border-t border-white/5 relative z-10">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-4">
        <p>
          &copy; {currentYear} Milov AI.{" "}
          {t("footer.rights", "All rights reserved.")}
        </p>
        <p className="text-xs opacity-70">
          Made with <span className="text-red-500 animate-pulse">❤️</span> and{" "}
          <span className="text-primary font-semibold">AI</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
