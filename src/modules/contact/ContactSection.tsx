import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="seccion-contacto"
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-4 px-4 md:px-6 mb-40"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-2">
          <Mail className="h-8 w-8" />
          {t("contact.title")}
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {t("contact.subtitle")}
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <a
          href="mailto:criscajaro@gmail.com"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <Mail className="mr-2 h-4 w-4" />
          {t("contact.email")}
        </a>
        <a
          href="https://www.linkedin.com/in/camilojaramillosoftware/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <Linkedin className="mr-2 h-4 w-4" />
          {t("contact.linkedin")}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
