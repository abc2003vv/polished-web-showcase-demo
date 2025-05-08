
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GameBackground from "@/components/GameBackground";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  // Animation for elements on scroll
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(".reveal");
    
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Tech-themed welcome toast notification
    setTimeout(() => {
      toast({
        title: "SYSTEM ONLINE",
        description: "Portfolio interface initialized. Ready for exploration.",
        className: "bg-white border border-primary text-gray-800",
      });
    }, 1500);

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GameBackground />
      <Navbar />
      <main>
        <Hero />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
