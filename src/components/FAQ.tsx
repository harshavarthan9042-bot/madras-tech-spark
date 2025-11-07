import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What scholarships are available for students?",
    answer: "MEC offers merit-based scholarships ranging from 50% to 100% fee waiver based on entrance exam ranks, academic performance, and financial need. We also have government scholarships, minority scholarships, and need-based financial aid to ensure every deserving student can pursue their education."
  },
  {
    question: "Is the hostel safe and well-maintained?",
    answer: "Absolutely! Our air-conditioned hostels feature 24/7 security with CCTV surveillance, biometric access, trained security personnel, and strict visitor policies. The hostels are well-maintained with modern amenities, regular cleaning, mess facilities, common rooms, and dedicated wardens for student welfare."
  },
  {
    question: "How does the placement cell support students?",
    answer: "Our dedicated placement cell provides comprehensive support including resume building, mock interviews, aptitude training, soft skills development, and direct connections with 500+ recruiting companies. We maintain a 95%+ placement rate with support continuing until every student secures a position."
  },
  {
    question: "What kind of labs and equipment are available?",
    answer: "MEC is equipped with state-of-the-art labs for AI/ML, cybersecurity, networking, data science, IoT, robotics, and cloud computing. All labs feature latest hardware, licensed software, high-performance computing systems, and 24/7 access for students working on projects and research."
  },
  {
    question: "Is WiFi available throughout the campus?",
    answer: "Yes! High-speed WiFi connectivity is available across the entire campus including classrooms, labs, library, hostels, cafeteria, and outdoor areas. Students can access online resources, attend virtual classes, and work on cloud-based projects seamlessly from anywhere on campus."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about admissions, facilities, and student life at MEC.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 shadow-card hover:shadow-hover transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
