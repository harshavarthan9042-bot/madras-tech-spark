import { DollarSign, Building2, Globe2, TrendingUp } from "lucide-react";
import placementImage from "@/assets/placement-success.jpg";

const Scholarships = () => {
  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Scholarships & Placements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We invest in your success with generous scholarships and robust placement support.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-card p-8 rounded-2xl shadow-glow mb-6 border border-accent/20">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Up to 100% Scholarships</h3>
                <p className="text-muted-foreground mb-6">
                  Based on merit, entrance exam ranks, and financial need. We believe talent should never 
                  be held back by financial constraints.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <p className="text-sm text-foreground">Merit-based: 50-100% fee waiver</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <p className="text-sm text-foreground">Paid internships with Fortune 500s</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <p className="text-sm text-foreground">Global tie-ups for exchange programs</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-card p-6 rounded-xl text-white shadow-md">
                  <Building2 className="w-8 h-8 mb-3 opacity-90" />
                  <p className="text-3xl font-bold mb-1">500+</p>
                  <p className="text-sm opacity-90">Partner Companies</p>
                </div>
                <div className="bg-gradient-accent p-6 rounded-xl text-white shadow-md">
                  <Globe2 className="w-8 h-8 mb-3 opacity-90" />
                  <p className="text-3xl font-bold mb-1">30+</p>
                  <p className="text-sm opacity-90">Countries</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-glow mb-6">
                <img 
                  src={placementImage} 
                  alt="Successful MEC graduates celebrating placement offers" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-1">95%+ Placement Rate</p>
                    <p className="text-white/90">Our Students, Your Future Colleagues</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-card border border-primary/10">
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Fortune 500 Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  Strong partnerships with global companies ensure paid internships, live projects, 
                  pre-placement offers, and excellent career opportunities for all our students.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro", "Accenture", "Cognizant"].map((company, i) => (
                    <span key={i} className="bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
