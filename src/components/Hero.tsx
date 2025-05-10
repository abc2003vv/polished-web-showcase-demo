import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-12 overflow-hidden"
    >
      <div className="scan-line"></div>
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:pr-6 animate-fade-in cyber-box p-6 rounded-lg shadow-lg">
          <p className="text-primary font-medium tech-font">
            INITIALIZING SYSTEM...
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pulse-glow text-gray-800">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
            I build amazing web experiences.
          </h2>
          <p className="text-gray-700 text-lg max-w-lg">
            I'm a full-stack developer specializing in creating exceptional
            digital experiences. Currently, I'm focused on building accessible,
            human-centered products.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-md pulse-glow bg-primary text-gray-800 hover:bg-primary/80"
              asChild
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-md border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"></div>
            <div className="w-72 h-72 bg-white backdrop-blur-md rounded-full border-4 border-primary/70 flex items-center justify-center overflow-hidden relative z-10 pixel-border">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-secondary/20 mix-blend-overlay"></div>
              <span className="text-6xl font-bold text-primary tech-font pulse-glow">
                JD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
