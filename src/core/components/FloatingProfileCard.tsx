import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/core/components/ui/Card";
import { Skeleton } from "@/core/components/ui/Skeleton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const FloatingProfileCard = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second load time
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (loading) return;
    // Entrance animation
    gsap.from(cardRef.current, {
      duration: 0.7,
      scale: 0.8,
      opacity: 0,
      ease: "power3.out",
    });

    // Floating animation
    gsap.to(cardRef.current, {
      x: "random(-15, 15)",
      y: "random(-15, 15)",
      rotation: "random(-5, 5)",
      duration: "random(3, 5)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, [loading]);

  return (
    <div
      ref={cardRef}
      className="absolute top-24 right-4 md:top-1/4 md:left-1/4 md:right-auto z-20"
    >
      <div className="relative group cursor-default">
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

        <Card className="relative w-40 md:w-64 aspect-video md:aspect-auto bg-white/80 dark:bg-black/40 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />

          <CardContent className="p-2 md:p-4 h-full flex items-center justify-center relative z-10">
            {loading ? (
              <div className="flex items-center space-x-2 md:space-x-4">
                <Skeleton className="h-10 w-10 md:h-16 md:w-16 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-3 md:h-4 w-[80px] md:w-[120px]" />
                  <Skeleton className="h-3 md:h-4 w-[60px] md:w-[100px]" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E35AQEHMpRedxr1rw/profile-framedphoto-shrink_400_400/B4EZnpDLQxIQAc-/0/1760551548180?e=1764183600&v=beta&t=GWV9RF6-Scpd9ccaB-s3dVM34fmYIdHCwO9If-EHSzU"
                    alt="Camilo Jaramillo"
                    className="relative h-10 w-10 md:h-16 md:w-16 rounded-full border-2 border-primary/50 shadow-lg object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {t("profile.name")}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {t("profile.motto")}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloatingProfileCard;
