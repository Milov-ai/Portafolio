import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/components/ui/Dialog";
import { Button } from "@/core/components/ui/Button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/Carousel";
import { ScrollIndicatorComponent } from "@/core/components/ui/ScrollIndicator";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    content: string;
    footer: string;
    liveUrl: string;
    codeUrl: string;
    images?: string[];
    tags?: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const scrollAreaRef = useRef<HTMLDivElement>(null!);
  const [isOpen, setIsOpen] = useState(false);

  // 3D Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const mainImage =
    project.images?.[0] ||
    `https://placehold.co/1200x600?text=${encodeURIComponent(project.title)}`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setIsOpen(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer h-full"
        >
          {/* Image Container - Compact Aspect Ratio */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
            <img
              src={mainImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Floating Badge */}
            <div className="absolute top-3 right-3 z-20">
              <div className="rounded-full bg-black/50 backdrop-blur-md border border-white/10 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0 border-white/10 bg-black/90 backdrop-blur-xl">
        <DialogHeader className="p-6 pb-4 border-b border-white/10">
          <DialogTitle className="text-2xl font-bold text-gradient">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div
          ref={scrollAreaRef}
          className="flex-1 overflow-y-auto relative scroll-indicator"
        >
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {project.images && project.images.length > 0 ? (
                project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="rounded-lg object-cover w-full aspect-video border border-white/10"
                      />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <CarouselItem>
                  <div className="p-1">
                    <img
                      src={mainImage}
                      alt={project.title}
                      className="rounded-lg object-cover w-full aspect-video border border-white/10"
                    />
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 hover:bg-primary hover:border-primary" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 hover:bg-primary hover:border-primary" />
          </Carousel>

          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-primary flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                {t("projects.about")}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.content}
              </p>
            </div>

            {project.tags && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground/80">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <DialogFooter className="p-6 pt-4 mt-auto border-t border-white/10 bg-black/40">
          <Button
            asChild
            variant="outline"
            className="border-white/10 hover:bg-white/5 hover:text-white"
          >
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t("projects.viewCode")}
            </a>
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("projects.viewProject")}
            </a>
          </Button>
        </DialogFooter>
        <ScrollIndicatorComponent targetRef={scrollAreaRef} />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
