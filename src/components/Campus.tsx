import { Wifi, Home, Coffee, Users2, Library, Dumbbell } from "lucide-react";

const facilities = [
  {
    icon: Wifi,
    title: "WiFi Campus",
    description: "High-speed internet across all buildings and common areas"
  },
  {
    icon: Library,
    title: "AC Smart Classrooms",
    description: "Climate-controlled rooms with smart boards and modern amenities"
  },
  {
    icon: Users2,
    title: "Innovation Labs",
    description: "Dedicated spaces for AI, cybersecurity, and data science projects"
  },
  {
    icon: Home,
    title: "Modern Hostels",
    description: "Comfortable accommodation with 24/7 security and amenities"
  },
  {
    icon: Coffee,
    title: "Cafeteria & Food Court",
    description: "Multiple dining options serving healthy, delicious meals"
  },
  {
    icon: Dumbbell,
    title: "Sports & Clubs",
    description: "50+ clubs including tech, sports, cultural, and entrepreneurship"
  }
];

const Campus = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Campus Life & Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience a vibrant campus that balances academic excellence with personal growth and well-being.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all border-2 border-transparent hover:border-secondary/30 group"
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <facility.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-card p-8 rounded-2xl text-white text-center shadow-glow">
            <h3 className="text-2xl font-bold mb-3">Beyond the Classroom</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              From hackathons to cultural fests, from startup incubators to sports tournaments – 
              MEC offers a holistic college experience that shapes well-rounded professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
