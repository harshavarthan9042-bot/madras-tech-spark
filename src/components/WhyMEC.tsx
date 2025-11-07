import { CheckCircle2, Users, Briefcase, Award, Globe, TrendingUp } from "lucide-react";
import techLabImage from "@/assets/tech-lab.jpg";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Industry-Ready Curriculum",
    description: "Updated courses aligned with current tech industry needs, designed with input from leading companies."
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from professors with PhDs, industry experience, and published research in cutting-edge technologies."
  },
  {
    icon: Briefcase,
    title: "Hands-On Learning",
    description: "Real-world projects, live case studies, and practical labs ensure you master both theory and application."
  },
  {
    icon: Award,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell, interview prep, soft skills training, and guaranteed support until you're placed."
  },
  {
    icon: Globe,
    title: "Vibrant Student Life",
    description: "50+ clubs, annual tech fests, sports tournaments, cultural events, and entrepreneurship opportunities."
  },
  {
    icon: TrendingUp,
    title: "Global Exposure",
    description: "International exchange programs, study tours, global hackathons, and collaborations with top universities."
  }
];

const WhyMEC = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Top Reasons to Study at MEC
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join India's premier engineering institution and accelerate your journey to a successful tech career.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all border border-primary/10">
                    <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={techLabImage} 
                  alt="Students working in advanced technology lab" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-8">
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
