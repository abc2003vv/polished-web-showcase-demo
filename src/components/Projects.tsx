
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with shopping cart, user authentication, and payment processing using Stripe.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&w=800&q=80",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks with features like drag and drop, filtering, and reminders.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=800&q=80",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application that displays current and forecasted weather data with beautiful visualizations.",
      tags: ["JavaScript", "Chart.js", "Weather API", "CSS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&q=80",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-secondary text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
