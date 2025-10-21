import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/Card";
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
import { Separator } from "@/core/components/ui/Separator";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    content: string;
    footer: string;
    liveUrl: string;
    codeUrl: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const scrollAreaRef = useRef<HTMLDivElement>(null!);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-80 aspect-video flex flex-col justify-between cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
          <div>
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">
                {project.title}
              </CardTitle>
              <CardDescription className="line-clamp-1">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm line-clamp-2">{project.content}</p>
            </CardContent>
          </div>
          <CardFooter className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">{project.footer}</p>
            <div className="flex items-center text-xs text-primary">
              {t("projects.seeMore")}
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
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
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                      src={`https://placehold.co/1200x600?text=Project+Image+${index + 1}`}
                      alt={`Project image ${index + 1}`}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
          <div className="p-6 space-y-4">
            <Separator />
            <h3 className="font-semibold text-lg">{t("projects.about")}</h3>
            <p className="text-sm text-muted-foreground">{project.content}</p>
          </div>
        </div>
        <DialogFooter className="p-6 pt-4 mt-auto">
          <Button asChild variant="outline">
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t("projects.viewCode")}
            </a>
          </Button>
          <Button asChild>
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
