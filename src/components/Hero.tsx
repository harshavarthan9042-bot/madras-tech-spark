import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(24, 60, 130, 0.94), rgba(16, 185, 200, 0.88)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="w-12 h-12 text-secondary" />
            <span className="text-secondary font-semibold text-lg">Since 1856</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  MAMMUTTI ENGINEERING <COLLEGE>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            India's 1st Engineering College
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Pioneering excellence in Information Technology, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity, and Business Systems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="group">
              Apply Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
              Explore Programs
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-2">TNEA Code: 1203</p>
            <p className="text-white font-semibold">Begin Your Tech Journey at India's Most Prestigious Engineering Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
