
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-12 overflow-hidden"
    >
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:pr-6 animate-fade-in backdrop-blur-sm bg-background/30 p-6 rounded-lg shadow-lg">
          <p className="text-primary font-medium">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground">
            I build amazing web experiences.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            I'm a full-stack developer specializing in creating exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-md"
              asChild
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-md bg-background/50 backdrop-blur-sm hover:bg-background/70"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="w-72 h-72 bg-secondary/80 backdrop-blur-md rounded-full border-8 border-background/30 flex items-center justify-center overflow-hidden relative z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent mix-blend-overlay"></div>
              <span className="text-6xl font-bold text-primary">JD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
