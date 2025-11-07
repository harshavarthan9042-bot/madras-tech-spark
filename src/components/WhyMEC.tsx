import { CheckCircle2, Users, Briefcase, Award, Globe, TrendingUp } from "lucide-react";
import techLabImage from "@/assets/tech-lab.jpg";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Industry-Ready Curriculum",
    description: "Courses designed with input from tech giants, ensuring you learn what employers actually need."
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from professors with industry experience and PhDs from top global universities."
  },
  {
    icon: Briefcase,
    title: "Guaranteed Internships",
    description: "Every student gets real-world experience through partnerships with leading tech companies."
  },
  {
    icon: Award,
    title: "Placement Excellence",
    description: "95%+ placement record with top packages from Fortune 500 companies and innovative startups."
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "International exchange programs and collaborations with universities worldwide."
  },
  {
    icon: TrendingUp,
    title: "Career Growth Support",
    description: "Dedicated placement cell, mentorship programs, and lifelong alumni network support."
  }
];

const WhyMEC = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose MEC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join India's premier engineering institution and accelerate your journey to a successful tech career.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={techLabImage} 
                  alt="Students working in advanced technology lab" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-3xl font-bold mb-2">State-of-the-Art Labs</p>
                    <p className="text-white/90">Where Innovation Meets Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMEC;
