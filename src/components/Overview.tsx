import { Target, Lightbulb, BookOpen } from "lucide-react";

const Overview = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              College Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 1856, MAMMUTTI ENGINEERING COLLEGE has been at the forefront of engineering excellence. 
              As India's 1st Engineering College, we specialize in cutting-edge technology education, 
              combining innovation, world-class research, and industry partnerships to shape the future tech leaders of tomorrow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all border border-primary/10">
              <div className="w-14 h-14 bg-gradient-card rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Technology-Driven Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our curriculum is designed around emerging technologies - AI, Machine Learning, Data Science, 
                Cybersecurity, and Business Systems - ensuring students are industry-ready from day one with 
                hands-on learning and real-world projects.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all border border-secondary/10">
              <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Innovation & Research Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art research centers and innovation labs foster groundbreaking work in 
                artificial intelligence, cybersecurity, and data analytics, with students publishing papers 
                and filing patents alongside renowned faculty.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all border border-accent/10">
              <div className="w-14 h-14 bg-gradient-warm rounded-lg flex items-center justify-center mb-6 shadow-md">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Global Industry Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strong collaborations with Fortune 500 companies, international universities, and tech giants 
                provide our students with paid internships, live projects, global exposure, and guaranteed 
                placement opportunities in leading organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
