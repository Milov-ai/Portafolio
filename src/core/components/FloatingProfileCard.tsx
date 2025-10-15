import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/core/components/ui/Card";
import { Skeleton } from "@/core/components/ui/Skeleton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FloatingProfileCard = () => {
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
      <Card className="w-40 md:w-64 aspect-video md:aspect-auto bg-background/80 backdrop-blur-sm">
        <CardContent className="p-2 md:p-4 h-full flex items-center justify-center">
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
              <img
                src="https://media.licdn.com/dms/image/v2/D4E35AQEHMpRedxr1rw/profile-framedphoto-shrink_200_200/B4EZnpDLQxIQAY-/0/1760551548180?e=1761159600&v=beta&t=Uj2D0x1I7TBwowc7RW-WKtnC7TN2sy0_Vh16JHK8axE" // Placeholder image
                alt="Camilo Jaramillo"
                className="h-10 w-10 md:h-16 md:w-16 rounded-full border-2 border-primary"
              />
              <div className="flex flex-col">
                <h3 className="text-sm md:text-lg font-bold">
                  Camilo Jaramillo
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  "Se permite soñar"
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FloatingProfileCard;
