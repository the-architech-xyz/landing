import { useState } from "react";
import { ChevronDown, Shield, Code, Zap, Users, Clock, Lightbulb } from "lucide-react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      icon: Shield,
      question: "Do I really own my code, or is this another vendor lock-in?",
      answer: "Absolutely 100% ownership. The Architech generates clean, standard code that you can export, modify, and deploy anywhere. No vendor lock-in, no dependencies on our platform. It's your code, your rules, your freedom.",
      category: "Ownership"
    },
    {
      icon: Code,
      question: "How is this different from GitHub Copilot and other AI assistants?",
      answer: "Copilot makes you faster at the same broken process. The Architech changes the entire process. Instead of generating code snippets, we use specialized AI agents to build complete, modular applications. You're orchestrating expert systems, not debugging AI code.",
      category: "Difference"
    },
    {
      icon: Zap,
      question: "What technologies are supported?",
      answer: "The Architech is tech-agnostic by design. We start with popular stacks (React, Next.js, Node.js, Python, etc.) and our modular architecture means you can add agents for any technology. You're never locked into our tech choices.",
      category: "Technology"
    },
    {
      icon: Clock,
      question: "When can I get access?",
      answer: "We're currently in closed alpha with select developers. Join our waitlist to get early access and help shape the future of development. Beta access begins Q2 2025.",
      category: "Access"
    },
    {
      icon: Lightbulb,
      question: "What's the business model?",
      answer: "The Architech Core will remain open source. Premium features like advanced AI agents, enterprise integrations, and priority support will be available via transparent subscription pricing. We believe in sustainable open source.",
      category: "Business"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about The Architech and how it will transform your development workflow.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openQuestion === index;
              
              return (
                <div 
                  key={index}
                  className={`bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-electric-blue shadow-lg' : 'hover:border-electric-blue/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center gap-4 hover:bg-muted/50 transition-colors duration-200"
                    type="button"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-gradient-electric' : 'bg-muted'
                    }`}>
                      <faq.icon className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-foreground'}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-electric-blue font-medium px-2 py-1 bg-electric-blue/10 rounded-full">
                        {faq.category}
                      </span>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      maxHeight: isOpen ? '400px' : '0px'
                    }}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14 border-l-2 border-electric-blue/20">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community and get answers from the team and other developers.
              </p>
              <button className="bg-gradient-electric text-white px-6 py-3 rounded-lg font-semibold hover:shadow-electric transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;