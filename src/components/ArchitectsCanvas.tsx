import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Sparkles, Code, Database, Shield, CreditCard, Palette, Layers } from "lucide-react";

const ArchitectsCanvas = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedModules, setSelectedModules] = useState<number[]>([]);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [blueprintLines, setBlueprintLines] = useState<string[]>([]);
  const [showProjectStructure, setShowProjectStructure] = useState(false);
  const [showWorkingPreview, setShowWorkingPreview] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, targetX: number, targetY: number, progress: number}>>([]);
  const [showParticles, setShowParticles] = useState(false);

  const techStack = [
    { 
      name: "React", 
      keywords: ["react", "frontend", "ui", "interface", "component", "spa"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      brandColor: "#61DAFB",
      description: "Frontend framework for building user interfaces"
    },
    { 
      name: "PostgreSQL", 
      keywords: ["database", "postgresql", "postgres", "sql", "data", "storage", "db"],
      icon: Database,
      color: "from-teal-500 to-green-500",
      brandColor: "#336791",
      description: "Advanced open-source relational database"
    },
    { 
      name: "JWT Auth", 
      keywords: ["auth", "authentication", "jwt", "login", "security", "user", "signin"],
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      brandColor: "#000000",
      description: "Secure authentication with JSON Web Tokens"
    },
    { 
      name: "Stripe", 
      keywords: ["stripe", "payment", "billing", "saas", "subscription", "money", "pay"],
      icon: CreditCard,
      color: "from-purple-500 to-indigo-500",
      brandColor: "#635BFF",
      description: "Complete payment processing platform"
    },
    { 
      name: "Tailwind CSS", 
      keywords: ["tailwind", "css", "styling", "design", "ui", "frontend", "style"],
      icon: Palette,
      color: "from-cyan-500 to-teal-500",
      brandColor: "#06B6D4",
      description: "Utility-first CSS framework for rapid UI development"
    },
    { 
      name: "Next.js", 
      keywords: ["nextjs", "next", "framework", "fullstack", "ssr", "react", "app"],
      icon: Layers,
      color: "from-gray-700 to-gray-900",
      brandColor: "#000000",
      description: "The React framework for production"
    }
  ];

  const exampleProjects = [
    "Un SaaS avec authentification et paiements Stripe",
    "Une application de gestion de tâches collaborative",
    "Un e-commerce avec panier et commandes",
    "Un dashboard d'analytics en temps réel",
    "Une plateforme de blog avec CMS"
  ];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to analyze user input and select modules
  const analyzeInput = (input: string) => {
    const lowerInput = input.toLowerCase();
    const selected: number[] = [];
    
    techStack.forEach((tech, index) => {
      if (tech.keywords.some(keyword => lowerInput.includes(keyword))) {
        selected.push(index);
      }
    });
    
    return selected;
  };

  // Function to generate blueprint based on input
  const generateBlueprint = (input: string, modules: number[]) => {
    const projectName = input.split(' ').slice(0, 3).join(' ').replace(/[^a-zA-Z0-9\s]/g, '') || 'Mon Projet';
    
    const blueprint = [
      "# Architecture générée par Architech",
      "project:",
      `  name: "${projectName}"`,
      "  type: \"fullstack-app\"",
      "  version: \"1.0.0\"",
      "",
      "architecture:",
      "  frontend: \"React + Next.js\"",
      "  backend: \"Next.js API Routes\"",
      "  database: \"PostgreSQL\"",
      "  auth: \"JWT + NextAuth.js\"",
      "  styling: \"TailwindCSS\"",
      "  deployment: \"Vercel\"",
      "",
      "features:",
      "  - \"Interface utilisateur moderne\"",
      "  - \"Authentification sécurisée\"",
      "  - \"Base de données relationnelle\"",
      "  - \"Design responsive\"",
      "  - \"Déploiement automatique\"",
      "",
      "modules_selected:",
      ...modules.map(index => `  - "${techStack[index].name}"`),
      "",
      "database_schema:",
      "  users: \"id, email, name, role, created_at\"",
      "  projects: \"id, name, description, owner_id, status\"",
      "  tasks: \"id, title, description, project_id, assignee_id\""
    ];
    
    return blueprint;
  };

  // Function to generate project structure
  const generateProjectStructure = (modules: number[]) => {
    const structure = [
      { name: "src/", type: "folder", children: [
        { name: "app/", type: "folder", children: [
          { name: "api/", type: "folder", children: [
            { name: "auth/", type: "folder", children: [
              { name: "route.ts", type: "file", icon: "🔐" }
            ]},
            { name: "users/", type: "folder", children: [
              { name: "route.ts", type: "file", icon: "👥" }
            ]}
          ]},
          { name: "dashboard/", type: "folder", children: [
            { name: "page.tsx", type: "file", icon: "📊" }
          ]},
          { name: "layout.tsx", type: "file", icon: "🏗️" }
        ]},
        { name: "components/", type: "folder", children: [
          { name: "ui/", type: "folder", children: [
            { name: "button.tsx", type: "file", icon: "🔘" },
            { name: "input.tsx", type: "file", icon: "📝" }
          ]}
        ]},
        { name: "lib/", type: "folder", children: [
          { name: "db.ts", type: "file", icon: "🗄️" },
          { name: "auth.ts", type: "file", icon: "🔐" }
        ]}
      ]},
      { name: "package.json", type: "file", icon: "📦" },
      { name: "tailwind.config.js", type: "file", icon: "🎨" },
      { name: "next.config.js", type: "file", icon: "⚡" }
    ];
    
    return structure;
  };

  // Enhanced typing animation function
  const typeText = (text: string, callback?: () => void, speed: number = 30) => {
    setIsTyping(true);
    setTypingText("");
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        if (callback) callback();
      }
    }, speed);
  };

  // Process user input
  const processInput = async (input: string) => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    setUserInput(input);
    
    // Clear previous state
    setSelectedModules([]);
    setShowBlueprint(false);
    setBlueprintLines([]);
    setShowProjectStructure(false);
    setShowWorkingPreview(false);
    
    // Analyze input and select modules
    const modules = analyzeInput(input);
    setSelectedModules(modules);
    
    // Animate module selection
    setTimeout(() => {
      setShowParticles(true);
      createLuminousExtraction();
    }, 500);
    
    // Generate and display blueprint
    setTimeout(() => {
      const blueprint = generateBlueprint(input, modules);
      setShowBlueprint(true);
      
      // Type blueprint line by line
      blueprint.forEach((line, index) => {
        setTimeout(() => {
          setBlueprintLines(prev => [...prev, line]);
        }, index * 100);
      });
    }, 1500);
    
    // Show project structure
    setTimeout(() => {
      setShowProjectStructure(true);
    }, 3000);
    
    // Show working preview
    setTimeout(() => {
      setShowWorkingPreview(true);
      setIsProcessing(false);
    }, 4000);
  };

  // Luminous Extraction Particle System
  const createLuminousExtraction = () => {
    setShowParticles(true);
    const newParticles = [];
    
    const particleCount = isMobile ? 6 : 12;
    
    for (let i = 0; i < particleCount; i++) {
      const inputX = isMobile ? 100 + (i % 3) * 40 : 200 + (i % 4) * 50;
      const inputY = isMobile ? 250 + Math.floor(i / 3) * 25 : 300 + Math.floor(i / 4) * 30;
      
      const techIndex = i % selectedModules.length;
      const techX = isMobile ? 300 + (techIndex % 2) * 150 : 600 + (techIndex % 2) * 200;
      const techY = isMobile ? 350 + Math.floor(techIndex / 2) * 120 : 400 + Math.floor(techIndex / 2) * 150;
      
      newParticles.push({
        id: i,
        x: inputX,
        y: inputY,
        targetX: techX,
        targetY: techY,
        progress: 0
      });
    }
    
    setParticles(newParticles);
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        progress: Math.min(particle.progress + 0.02, 1),
        x: particle.x + (particle.targetX - particle.x) * 0.05,
        y: particle.y + (particle.targetY - particle.y) * 0.05
      })));
      
      if (newParticles.some(p => p.progress < 1)) {
        requestAnimationFrame(animateParticles);
      } else {
        setTimeout(() => setShowParticles(false), 1000);
      }
    };
    
    requestAnimationFrame(animateParticles);
  };

  // Project Structure Tree Component
  const renderProjectStructure = (items: any[], level: number = 0) => {
    return items.map((item, index) => (
      <motion.div
        key={`${item.name}-${index}`}
        className="select-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
      >
        <div className={`flex items-center gap-2 py-1 ${level > 0 ? 'ml-4' : ''}`}>
          <span className="text-lg">{item.icon}</span>
          <span className={`font-mono text-sm ${
            item.type === 'folder' 
              ? 'text-architech-brand-blue font-semibold' 
              : 'text-muted-foreground'
          }`}>
            {item.name}
          </span>
        </div>
        {item.children && (
          <div className="ml-2">
            {renderProjectStructure(item.children, level + 1)}
          </div>
        )}
      </motion.div>
    ));
  };

  return (
    <section
      ref={containerRef}
      id="interactive-demo"
      className="min-h-screen bg-architech-section-light relative overflow-hidden py-24"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-satoshi font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            De l'Idée au Code,{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              en Temps Réel
            </span>
          </motion.h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Décrivez votre projet et voyez la magie opérer instantanément
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Input and Modules */}
            <div className="space-y-8">
              {/* Input Section */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Décrivez votre projet
                </h3>
                
                <div className="space-y-4">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ex: Un SaaS avec authentification et paiements Stripe"
                    className="text-lg py-4"
                    disabled={isProcessing}
                  />
                  
                  {/* Example Projects */}
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Ou cliquez sur un exemple :</p>
                    <div className="flex flex-wrap gap-2">
                      {exampleProjects.map((example, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => processInput(example)}
                          disabled={isProcessing}
                          className="text-xs"
                        >
                          {example}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => processInput(userInput)}
                    disabled={!userInput.trim() || isProcessing}
                    className="w-full bg-gradient-electric hover:shadow-electric text-white font-semibold py-4 text-lg"
                  >
                    {isProcessing ? (
                      <>
                        <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5 mr-2" />
                        Générer mon architecture
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>

              {/* Modules Selection */}
              <motion.div
                className="bg-card border border-border rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Modules sélectionnés
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        selectedModules.includes(index)
                          ? "border-architech-brand-blue bg-architech-brand-blue/10 shadow-lg shadow-architech-brand-blue/20"
                          : "border-border bg-card"
                      }`}
                      animate={{
                        scale: selectedModules.includes(index) ? 1.05 : 1,
                        opacity: selectedModules.includes(index) ? 1 : 0.6
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                          <tech.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">
                            {tech.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tech.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right side - Blueprint and Results */}
            <div className="space-y-8">
              {/* Blueprint */}
              {showBlueprint && (
                <motion.div
                  className="bg-card border border-border rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Blueprint généré
                  </h3>
                  
                  <div className="bg-architech-section-light rounded-xl p-4 border border-architech-brand-blue/30 font-mono text-sm max-h-64 overflow-y-auto">
                    {blueprintLines.map((line, index) => (
                      <motion.div
                        key={index}
                        className="text-foreground min-h-[1.5rem] leading-6"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {line.startsWith("#") ? (
                          <span className="text-architech-brand-blue/70 font-medium">
                            {line}
                          </span>
                        ) : line.includes(":") ? (
                          <>
                            <span className="text-architech-brand-blue font-medium">
                              {line.split(":")[0]}:
                            </span>
                            <span className="text-architech-brand-green ml-2 font-medium">
                              "{line.split(":")[1].trim()}"
                            </span>
                          </>
                        ) : (
                          <span className="text-foreground">{line}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Project Structure */}
              {showProjectStructure && (
                <motion.div
                  className="bg-card border border-border rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Structure du projet
                  </h3>
                  
                  <div className="bg-architech-section-light rounded-xl p-4 border border-architech-brand-green/30 font-mono text-sm max-h-64 overflow-y-auto">
                    {renderProjectStructure(generateProjectStructure(selectedModules))}
                  </div>
                </motion.div>
              )}

              {/* Working Preview */}
              {showWorkingPreview && (
                <motion.div
                  className="bg-card border border-border rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Aperçu en direct
                  </h3>
                  
                  <div className="bg-architech-section-light rounded-xl p-4 border border-architech-brand-green/30">
                    <motion.div
                      className="bg-white rounded-lg p-4 shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b pb-2">
                          <h4 className="font-semibold text-gray-800 text-sm">
                            Dashboard
                          </h4>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded">
                            <div className="text-xs text-blue-600 font-medium">
                              Projets actifs
                            </div>
                            <div className="text-lg font-bold text-blue-800">
                              3
                            </div>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <div className="text-xs text-green-600 font-medium">
                              Tâches terminées
                            </div>
                            <div className="text-lg font-bold text-green-800">
                              12
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Luminous Extraction Particles */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none z-40">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-full shadow-lg shadow-architech-brand-blue/50"
              style={{
                left: particle.x,
                top: particle.y,
                boxShadow: `0 0 20px ${
                  particle.progress > 0.5 ? "#39FF14" : "#00A9FF"
                }`,
              }}
              animate={{
                scale: [0.5, 1.2, 0.8],
                opacity: [0, 1, 0.8, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArchitectsCanvas;