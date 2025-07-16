import { useState } from "react";
import { ChevronDown, Shield, Code, Zap, Users, Clock, Lightbulb, Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0); // Start with first question open

  const faqs = [
    {
      icon: Shield,
      question: "Do I really own my code, or is this another vendor lock-in?",
      answer: "Absolutely 100% ownership. The Architech generates clean, standard code that you can export, modify, and deploy anywhere. No vendor lock-in, no dependencies on our platform. It's your code, your rules, your freedom.",
      category: "Ownership",
      color: "bg-gradient-success"
    },
    {
      icon: Code,
      question: "How is this different from GitHub Copilot and other AI assistants?",
      answer: "Copilot makes you faster at the same broken process. The Architech changes the entire process. Instead of generating code snippets, we use specialized AI agents to build complete, modular applications. You're orchestrating expert systems, not debugging AI code.",
      category: "Difference",
      color: "bg-gradient-electric"
    },
    {
      icon: Zap,
      question: "What technologies are supported?",
      answer: "The Architech is tech-agnostic by design. We start with popular stacks (React, Next.js, Node.js, Python, etc.) and our modular architecture means you can add agents for any technology. You're never locked into our tech choices.",
      category: "Technology",
      color: "bg-gradient-ocean"
    },
    {
      icon: Clock,
      question: "When can I get access?",
      answer: "We're currently in closed alpha with select developers. Join our waitlist to get early access and help shape the future of development. Beta access begins Q2 2025.",
      category: "Access",
      color: "bg-gradient-sunset"
    },
    {
      icon: Lightbulb,
      question: "What's the business model?",
      answer: "The Architech Core will remain open source. Premium features like advanced AI agents, enterprise integrations, and priority support will be available via transparent subscription pricing. We believe in sustainable open source.",
      category: "Business",
      color: "bg-gradient-creative"
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about The Architech and how it will transform your development workflow.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-glass group"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 lg:p-8 text-left flex items-center justify-between group-hover:bg-architech-surface-hover/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Enhanced Icon */}
                    <div className={`w-12 h-12 rounded-xl ${faq.color} flex items-center justify-center shadow-electric group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                      <faq.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold text-architech-electric uppercase tracking-wider">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-semibold text-foreground group-hover:text-architech-electric transition-all duration-300">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Enhanced Toggle Icon */}
                  <div className="ml-4 flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openQuestion === index 
                        ? 'bg-gradient-electric text-white shadow-electric rotate-180' 
                        : 'bg-architech-surface-elevated text-muted-foreground group-hover:bg-architech-electric/10 group-hover:text-architech-electric'
                    }`}>
                      {openQuestion === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Enhanced Answer Panel */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="ml-16 space-y-4">
                      {/* Answer with better typography */}
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                      
                      {/* Additional context for some questions */}
                      {index === 0 && (
                        <div className="flex items-center gap-2 p-3 bg-architech-success/10 border border-architech-success/20 rounded-lg">
                          <Shield className="h-4 w-4 text-architech-success" />
                          <span className="text-sm text-architech-success font-medium">
                            Zero proprietary dependencies • Full source code access
                          </span>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="flex items-center gap-2 p-3 bg-architech-electric/10 border border-architech-electric/20 rounded-lg">
                          <Clock className="h-4 w-4 text-architech-electric" />
                          <span className="text-sm text-architech-electric font-medium">
                            Alpha invitations sent weekly • No credit card required
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto group cursor-pointer hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community and get answers directly from the team and other developers.
              </p>
              <div className="inline-flex items-center gap-2 text-architech-electric font-semibold group-hover:scale-105 transition-transform duration-300">
                <Users className="h-5 w-5" />
                Join the discussion
                <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;