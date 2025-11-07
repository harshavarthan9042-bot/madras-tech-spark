import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Programs from "@/components/Programs";
import WhyMEC from "@/components/WhyMEC";
import Campus from "@/components/Campus";
import Scholarships from "@/components/Scholarships";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <Programs />
      <WhyMEC />
      <Campus />
      <Scholarships />
      <Footer />
    </div>
  );
};

export default Index;
