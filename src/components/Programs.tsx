import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Lock, Code, LineChart, Cpu } from "lucide-react";

const programs = [
  {
    icon: Brain,
    title: "B.Tech in Artificial Intelligence",
    description: "Master neural networks, deep learning, and intelligent systems. Build AI solutions that transform industries.",
    highlights: ["Machine Learning", "Neural Networks", "Computer Vision"],
    badge: "High Demand"
  },
  {
    icon: Database,
    title: "B.Tech in Data Science",
    description: "Turn data into insights. Learn analytics, big data technologies, and predictive modeling.",
    highlights: ["Big Data", "Analytics", "Visualization"],
    badge: "Industry Ready"
  },
  {
    icon: Code,
    title: "B.Tech in Information Technology",
    description: "Comprehensive IT education covering software development, cloud computing, and system design.",
    highlights: ["Web Dev", "Cloud Computing", "DevOps"],
    badge: "Core Program"
  },
  {
    icon: Lock,
    title: "B.Tech in Cybersecurity",
    description: "Become a digital guardian. Learn ethical hacking, network security, and threat analysis.",
    highlights: ["Ethical Hacking", "Security Ops", "Cryptography"],
    badge: "Critical Skill"
  },
  {
    icon: Cpu,
    title: "B.Tech in Computer Science",
    description: "Foundation in algorithms, programming, and computational theory for versatile tech careers.",
    highlights: ["Algorithms", "Systems", "Software Eng"],
    badge: "Classic Choice"
  },
  {
    icon: LineChart,
    title: "B.Tech in Business Systems",
    description: "Bridge technology and business. Learn enterprise systems, digital transformation, and tech strategy.",
    highlights: ["ERP Systems", "Business Analytics", "Digital Strategy"],
    badge: "Future Leaders"
  }
];

const Programs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              World-Class B.Tech Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from six specialized programs designed to make you industry-ready from day one.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-hover group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                      {program.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
