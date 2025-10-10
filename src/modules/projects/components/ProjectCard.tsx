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
import { Skeleton } from "@/core/components/ui/Skeleton";
import { Button } from "@/core/components/ui/Button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
              Ver más
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Skeleton className="h-32 w-full" />
              <p className="text-sm text-muted-foreground">Imagen 1</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Skeleton className="h-32 w-full" />
              <p className="text-sm text-muted-foreground">Imagen 2</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Skeleton className="h-32 w-full" />
              <p className="text-sm text-muted-foreground">Imagen 3</p>
            </div>
          </div>
          <div>
            <p>{project.content}</p>
          </div>
        </div>
        <DialogFooter>
          <Button asChild variant="outline">
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Ver Código
            </a>
          </Button>
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Proyecto
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
