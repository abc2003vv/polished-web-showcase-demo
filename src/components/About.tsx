
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)", 
    "React", 
    "TypeScript", 
    "Node.js", 
    "Next.js", 
    "Tailwind CSS",
    "HTML & CSS", 
    "GraphQL", 
    "Express", 
    "MongoDB", 
    "PostgreSQL", 
    "Git & GitHub"
  ];

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm John, a passionate web developer with a keen interest in creating
              beautiful, functional, and user-friendly websites. My journey in web
              development started back in 2018, and I've been continuously learning and
              growing since then.
            </p>
            <p className="text-lg">
              I enjoy taking complex problems and turning them into simple and elegant
              solutions. My goal is to always build products that provide pixel-perfect,
              performant experiences.
            </p>
            <p className="text-lg">
              I'm currently working as a Front-end Developer at a digital agency where
              I've had the opportunity to work with a diverse range of clients and
              industries. When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying nature.
            </p>
          </div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
