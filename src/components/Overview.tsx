import { Target, Lightbulb, BookOpen } from "lucide-react";

const Overview = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Established in 1856, Madras Engineering College stands as a beacon of innovation, 
              research, and academic excellence in engineering education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all border border-primary/10">
              <div className="w-14 h-14 bg-gradient-card rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a world-class institution that nurtures future tech leaders, fostering innovation 
                and creating solutions for global challenges through cutting-edge education and research.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all border border-secondary/10">
              <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 shadow-md">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Innovation Hub</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our state-of-the-art labs and research centers are equipped with the latest technology, 
                enabling students to work on groundbreaking projects in AI, ML, cybersecurity, and more.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all border border-accent/10">
              <div className="w-14 h-14 bg-gradient-warm rounded-lg flex items-center justify-center mb-6 shadow-md">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Research Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                MEC's dedicated research programs collaborate with Fortune 500 companies and global 
                universities, ensuring our curriculum stays ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
