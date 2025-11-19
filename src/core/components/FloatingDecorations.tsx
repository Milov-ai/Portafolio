import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Star, Heart, Zap, Sparkles, Code, Music, Cloud } from "lucide-react";

const FloatingDecorations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    Array.from(elements).forEach((el) => {
      // Random initial position
      gsap.set(el, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: 0,
        opacity: 0,
      });

      // Entrance animation
      gsap.to(el, {
        scale: "random(0.5, 1.5)",
        opacity: "random(0.1, 0.3)",
        duration: 2,
        ease: "power2.out",
        delay: Math.random() * 2,
      });

      // Continuous floating animation
      gsap.to(el, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: "random(-180, 180)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const icons = [
    Star,
    Heart,
    Zap,
    Sparkles,
    Code,
    Music,
    Cloud,
    Star,
    Heart,
    Zap,
    Sparkles,
    Code,
    Music,
    Star,
    Heart,
    Zap,
    Sparkles,
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-40"
    >
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute text-primary/20 dark:text-primary/20"
        >
          <Icon className="w-6 h-6 md:w-10 md:h-10" />
        </div>
      ))}
      {/* Add some emoji elements for extra flavor */}
      <div className="absolute text-2xl md:text-4xl opacity-20 select-none">
        🤘
      </div>
      <div className="absolute text-2xl md:text-4xl opacity-20 select-none">
        🚀
      </div>
      <div className="absolute text-2xl md:text-4xl opacity-20 select-none">
        💻
      </div>
      <div className="absolute text-2xl md:text-4xl opacity-20 select-none">
        ✨
      </div>
    </div>
  );
};

export default FloatingDecorations;
