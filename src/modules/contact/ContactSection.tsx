import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ContactSection = () => {
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

  return (
    <section
      ref={container}
      id="seccion-contacto"
      className="w-full py-24 md:py-32 flex flex-col items-center text-center space-y-4 px-4 md:px-6 mb-20 relative overflow-hidden"
    >
      <div className="glass-card max-w-3xl w-full p-12 rounded-3xl relative z-10 border-white/10">
        <div className="space-y-6 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center justify-center gap-3 text-gradient">
            <Mail className="h-8 w-8 text-primary" />
            {t("contact.title")}
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
          <a
            href="mailto:criscajaro@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Mail className="mr-2 h-5 w-5" />
            {t("contact.email")}
          </a>
          <a
            href="https://www.linkedin.com/in/camilojaramillosoftware/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            {t("contact.linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
