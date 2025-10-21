import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface ScrollIndicatorProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

export const ScrollIndicatorComponent = ({
  targetRef,
}: ScrollIndicatorProps) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const checkScrollable = () => {
      const hasScrollbar = target.scrollHeight > target.clientHeight;
      setIsScrollable(hasScrollbar);
      if (hasScrollbar) {
        const isBottom =
          target.scrollHeight - target.scrollTop <= target.clientHeight + 1;
        setIsAtBottom(isBottom);
      }
    };

    const observer = new ResizeObserver(checkScrollable);
    observer.observe(target);

    target.addEventListener("scroll", checkScrollable);

    checkScrollable();

    return () => {
      observer.disconnect();
      target.removeEventListener("scroll", checkScrollable);
    };
  }, [targetRef]);

  const scrollTo = (direction: "up" | "down") => {
    const target = targetRef.current;
    if (!target) return;

    const scrollAmount = target.clientHeight * 0.8;
    const newScrollTop =
      direction === "down"
        ? target.scrollTop + scrollAmount
        : target.scrollTop - scrollAmount;

    gsap.to(target, {
      scrollTop: newScrollTop,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  if (!isScrollable) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "absolute top-1/2 -translate-y-1/2 right-6 z-50 rounded-full transition-opacity",
        isScrollable ? "opacity-100" : "opacity-0",
      )}
      onClick={() => scrollTo(isAtBottom ? "up" : "down")}
    >
      {isAtBottom ? (
        <ChevronUp className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      )}
    </Button>
  );
};
