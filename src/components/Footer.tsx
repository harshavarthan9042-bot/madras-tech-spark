import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card text-white shadow-glow">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Contact & Call to Action</h3>
              <p className="text-white/90 mb-6 text-lg">
                Ready to transform your future? Join India's 1st Engineering College and become part of 
                a legacy of innovation and excellence. Applications are now open!
              </p>
              <Button variant="accent" size="lg" className="group">
                Apply Now - TNEA Code 1203
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Campus Address</p>
                  <p className="text-white/80 text-sm">
                    Tambaram Road, Vellarai<br />
                    Chennai – 602105, Tamil Nadu, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Website</p>
                  <a href="https://www.madrascollege.ac.in" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-accent transition-colors">
                    www.madrascollege.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Admissions Helpline</p>
                  <p className="text-white/80 text-sm">+91 70020 80020</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <p className="font-semibold mb-1">TNEA Admission Code</p>
                <p className="text-2xl font-bold text-accent">1203</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} MAMMUTTI ENGINEERING COLLEGE. All rights reserved. | Established 1856
            </p>
            <p className="text-white/90 mt-2 font-medium">
              Begin Your Tech Journey at MAMMUTTI ENGINEERING COLLEGE – Apply Now!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
