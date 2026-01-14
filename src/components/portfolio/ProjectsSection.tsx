import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">Showcase of my recent work and side projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
              <Card className="glass border-primary/20 overflow-hidden hover-lift group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  {project.featured && <Badge className="absolute top-4 right-4 bg-neon-gradient">Featured</Badge>}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild onClick={(e) => e.stopPropagation()}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-1" />Code</a>
                    </Button>
                    <Button size="sm" className="bg-neon-gradient" asChild onClick={(e) => e.stopPropagation()}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-1" />Live</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl glass">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-4">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-lg" />
                <p className="text-muted-foreground">{selectedProject.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {selectedProject.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
