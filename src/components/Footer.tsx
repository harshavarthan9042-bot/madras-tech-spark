import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card text-white shadow-glow">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-white/90 mb-6 text-lg">
                Join India's most prestigious engineering college and transform your future. 
                Applications are open for the upcoming academic year.
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
                  <p className="font-semibold mb-1">Madras Engineering College</p>
                  <p className="text-white/80 text-sm">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-white/80 text-sm">+91 70020 80020</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Admissions</p>
                  <p className="text-white/80 text-sm">TNEA Code: 1203</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Madras Engineering College. All rights reserved. | Established 1856
            </p>
            <p className="text-white/90 mt-2 font-medium">
              Begin Your Tech Journey at Madras Engineering College – Apply Now!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
