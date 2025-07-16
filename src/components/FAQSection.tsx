import { useState } from "react";
import { ChevronDown, Shield, Code, Zap, Users, Clock, Lightbulb } from "lucide-react";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const revolutionaryFAQs = [
    {
      icon: Shield,
      question: "Do I really own my code, or is this another technofeudalism trap?",
      answer: "Absolutely 100% ownership. Unlike other platforms that lock you in, The Architech generates clean, standard code that you can export, modify, and deploy anywhere. No vendor lock-in, no dependencies on our platform. It's your code, your rules, your freedom. This is the anti-technofeudalism tool.",
      category: "Ownership & Freedom"
    },
    {
      icon: Code,
      question: "How is this different from GitHub Copilot and other AI assistants?",
      answer: "Copilot makes you faster at doing the wrong things - you're still trapped in configuration hell, just with autocomplete. The Architech changes the entire process. Instead of generating code snippets, we use specialized AI agents to build complete, modular applications. You're not debugging AI code - you're orchestrating expert systems.",
      category: "Revolutionary Difference"
    },
    {
      icon: Zap,
      question: "What technologies are supported in this revolution?",
      answer: "The Architech is tech-agnostic by design. We start with the most popular stacks (React, Next.js, Node.js, Python, etc.) and our modular architecture means the community can add agents for any technology. You're never locked into our tech choices - the revolution adapts to your needs.",
      category: "Technical Flexibility"
    },
    {
      icon: Users,
      question: "Is there really no learning curve for this 'revolution'?",
      answer: "If you understand modern application architecture, you'll feel at home immediately. The modular approach actually simplifies complex applications by making them predictable and maintainable. We're not reinventing development - we're liberating it from configuration tyranny.",
      category: "Ease of Adoption"
    },
    {
      icon: Clock,
      question: "When can I join this revolution?",
      answer: "We're currently in closed alpha with select revolutionary developers and teams. Join our waitlist to get early access and help shape the future of development. Beta access begins Q2 2024. The revolution starts with the early adopters.",
      category: "Availability"
    },
    {
      icon: Lightbulb,
      question: "What's the business model? How do you avoid becoming what you fight?",
      answer: "The Architech Core will remain open source forever - this is our commitment to the revolution. Premium features like advanced AI agents, enterprise integrations, and priority support will be available via fair, transparent subscription pricing. We believe in sustainable open source, not platform capture.",
      category: "Sustainability & Ethics"
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gradient-to-br from-background via-purple-950/5 to-background relative overflow-hidden">
      {/* Revolutionary background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Revolutionary header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue mb-8">
              <Lightbulb className="h-5 w-5" />
              <span className="font-semibold">Revolutionary Intel</span>
              <Lightbulb className="h-5 w-5" />
            </div>
            
            <h2 className="text-6xl lg:text-8xl font-black text-foreground mb-8 leading-tight">
              Questions Every{" "}
              <span className="text-transparent bg-gradient-electric bg-clip-text">
                Revolutionary
              </span>
              <br />
              Must Ask
            </h2>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Before you join the revolution, you need the truth. Here are the answers to the questions that matter.
            </p>
          </div>

          {/* Revolutionary FAQ Cards */}
          <div className="space-y-6">
            {revolutionaryFAQs.map((faq, index) => {
              const FaqIcon = faq.icon;
              const isOpen = openQuestion === index;
              
              return (
                <div 
                  key={index}
                  className={`group relative bg-card border-2 rounded-3xl overflow-hidden transition-all duration-500 ${
                    isOpen 
                      ? 'border-electric-blue shadow-xl shadow-electric-blue/20' 
                      : 'border-border hover:border-electric-blue/50'
                  }`}
                >
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-electric-blue">{faq.category}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full p-8 text-left flex items-start gap-6 hover:bg-surface-elevated/50 transition-colors duration-300"
                  >
                    {/* Revolutionary icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-electric shadow-electric' 
                        : 'bg-muted group-hover:bg-gradient-electric'
                    }`}>
                      <FaqIcon className={`h-6 w-6 transition-all duration-300 ${
                        isOpen ? 'text-white' : 'text-foreground group-hover:text-white'
                      }`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl font-bold mb-2 pr-8 transition-all duration-300 ${
                        isOpen 
                          ? 'text-transparent bg-gradient-electric bg-clip-text' 
                          : 'text-foreground group-hover:text-electric-blue'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown 
                      className={`h-6 w-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Revolutionary answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-8">
                      <div className="pl-18 border-l-2 border-electric-blue/20 ml-6">
                        <div className="pl-6">
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revolutionary glow effect */}
                  <div className={`absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                    isOpen ? 'opacity-5' : ''
                  }`}></div>
                </div>
              );
            })}
          </div>

          {/* Join the conversation */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-electric-blue/20 via-purple-500/20 to-green-500/20 border border-electric-blue/30 rounded-3xl p-12 backdrop-blur-sm">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-electric shadow-electric mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Still Questions About the Revolution?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of revolutionary developers. Ask questions, share ideas, and help shape the future of software development.
              </p>
              <button className="bg-gradient-electric text-white px-8 py-4 rounded-xl font-semibold hover:shadow-electric transition-all duration-300 group">
                <span className="mr-2">Join the Revolutionary Community</span>
                <Zap className="inline h-5 w-5 group-hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;