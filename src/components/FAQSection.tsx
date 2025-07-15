import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "What technologies are supported?",
      answer: "The Architech is tech-agnostic. It starts with popular stacks (React, Node.js, Python, etc.), and the community can add modules for any technology. Our modular architecture means you're never locked into a specific tech stack."
    },
    {
      question: "Do I really own my code?",
      answer: "Yes, 100%. The Architech generates standard, clean, exportable code. There is absolutely no vendor lock-in. You get production-ready code that you can modify, deploy, and maintain independently. It's yours forever."
    },
    {
      question: "What is the business model?",
      answer: "The Architech Core will be open source. Premium features, like advanced AI agents, enterprise integrations, and priority support, will be available via a fair and transparent subscription model. We believe in sustainable open source."
    },
    {
      question: "How does this differ from other AI coding tools?",
      answer: "Unlike generic AI assistants that generate code snippets, The Architech uses specialized agents to create complete, modular applications. You're not debugging AI-generated code—you're orchestrating expert systems that understand best practices in their domains."
    },
    {
      question: "Is there a learning curve?",
      answer: "The Architech is designed for developers, by developers. If you understand modern application architecture, you'll feel at home immediately. The modular approach actually simplifies complex applications by making them more predictable and maintainable."
    },
    {
      question: "When will it be available?",
      answer: "We're currently in closed alpha with select developers and teams. Join our waitlist to get early access and help shape the future of development tools. Beta access will be available in Q2 2024."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked 
              <span className="text-transparent bg-gradient-electric bg-clip-text"> Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about The Architech and our vision for the future of development.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-surface-elevated transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional help section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-surface border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're here to help. Reach out to our team for personalized answers.
              </p>
              <button className="bg-gradient-electric text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-electric transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;