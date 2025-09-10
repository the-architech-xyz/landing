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
  const [activeTab, setActiveTab] = useState<'technologies' | 'blueprint' | 'structure' | 'preview'>('technologies');

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
      setActiveTab('blueprint');
      
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
      className="min-h-screen bg-gradient-to-br from-architech-section-light via-architech-section-dark to-architech-section-light relative overflow-hidden py-32"
    >
      {/* Sophisticated background layers */}
      <div className="absolute inset-0">
        {/* Primary grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Secondary subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,169,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(57,255,20,0.08)_0%,transparent_50%)]"></div>
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-architech-surface/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Clean Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-satoshi font-bold text-foreground mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('interactiveDemo.canvas.title')}{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              {t('interactiveDemo.canvas.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('interactiveDemo.canvas.subtitle')}
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Input and Modules */}
            <div className="space-y-10">
              {/* Enhanced Input Section */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                {/* Glass morphism card */}
                <div className="relative bg-gradient-to-br from-card/80 via-card/90 to-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-10 shadow-2xl shadow-architech-electric/5 group-hover:shadow-architech-electric/10 transition-all duration-500">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-architech-electric/5 via-transparent to-architech-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Clean Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t('interactiveDemo.canvas.input.label')}
                </h3>
                    <p className="text-muted-foreground">
                      {t('interactiveDemo.canvas.input.placeholder')}
                    </p>
                  </div>
                
                  <div className="space-y-6">
                    {/* Clean Input */}
                    <div className="relative">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ex: Un SaaS avec authentification et paiements Stripe"
                        className="text-lg py-6 px-6 bg-architech-surface/50 border-2 border-border/50 rounded-2xl focus:border-architech-electric/50 focus:ring-4 focus:ring-architech-electric/10 transition-all duration-300 placeholder:text-muted-foreground/60"
                    disabled={isProcessing}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !isProcessing && userInput.trim()) {
                            processInput(userInput);
                          }
                        }}
                      />
                      {isProcessing && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="h-5 w-5 text-architech-electric/60" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                    
                    {/* Clean Example Projects */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-architech-electric to-architech-brand-green rounded-full"></div>
                        <p className="text-sm font-medium text-muted-foreground">{t('interactiveDemo.canvas.input.examples')}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-2 relative z-10">
                        {exampleProjects.map((example, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.01, x: 2 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full relative z-10"
                          >
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('Example clicked:', example); // Debug log
                                setUserInput(example);
                                processInput(example);
                              }}
                              disabled={isProcessing}
                              className="w-full text-left p-4 bg-architech-surface/20 border border-border/30 hover:border-architech-electric/40 hover:bg-architech-electric/5 rounded-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-architech-electric/20"
                              type="button"
                              style={{
                                pointerEvents: isProcessing ? 'none' : 'auto',
                                position: 'relative',
                                zIndex: 10
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-architech-electric/40 group-hover:bg-architech-electric transition-colors duration-300"></div>
                                <span className="text-sm font-medium text-foreground group-hover:text-architech-electric transition-colors duration-300">{example}</span>
                              </div>
                            </button>
                          </motion.div>
                        ))}
                      </div>
                  </div>
                  
                    {/* Enhanced CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                  <Button
                    onClick={() => processInput(userInput)}
                    disabled={!userInput.trim() || isProcessing}
                        className="w-full bg-gradient-to-r from-architech-electric via-architech-brand-blue to-architech-electric hover:shadow-2xl hover:shadow-architech-electric/25 text-white font-bold py-6 text-lg rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center justify-center gap-3">
                    {isProcessing ? (
                      <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Sparkles className="h-6 w-6" />
                              </motion.div>
                              <span>Génération en cours...</span>
                      </>
                    ) : (
                      <>
                              <Zap className="h-6 w-6" />
                              <span>Générer mon architecture</span>
                      </>
                    )}
                        </div>
                  </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right side - Tabbed Results */}
            {(selectedModules.length > 0 || showBlueprint || showProjectStructure || showWorkingPreview) && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-card/80 via-card/90 to-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
                  {/* Tab Navigation */}
                  <div className="flex gap-2 mb-6">
                    {selectedModules.length > 0 && (
                      <button
                        onClick={() => setActiveTab('technologies')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeTab === 'technologies'
                            ? 'bg-architech-brand-green text-white shadow-lg'
                            : 'text-muted-foreground hover:text-foreground hover:bg-architech-surface/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Layers className="h-4 w-4" />
{t('interactiveDemo.canvas.tabs.technologies')}
                        </div>
                      </button>
                    )}
                    {showBlueprint && (
                      <button
                        onClick={() => setActiveTab('blueprint')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeTab === 'blueprint'
                            ? 'bg-architech-brand-blue text-white shadow-lg'
                            : 'text-muted-foreground hover:text-foreground hover:bg-architech-surface/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4" />
{t('interactiveDemo.canvas.tabs.blueprint')}
                        </div>
                      </button>
                    )}
                    {showProjectStructure && (
                      <button
                        onClick={() => setActiveTab('structure')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeTab === 'structure'
                            ? 'bg-architech-brand-green text-white shadow-lg'
                            : 'text-muted-foreground hover:text-foreground hover:bg-architech-surface/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Layers className="h-4 w-4" />
{t('interactiveDemo.canvas.tabs.structure')}
                        </div>
                      </button>
                    )}
                    {showWorkingPreview && (
                      <button
                        onClick={() => setActiveTab('preview')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeTab === 'preview'
                            ? 'bg-architech-electric text-white shadow-lg'
                            : 'text-muted-foreground hover:text-foreground hover:bg-architech-surface/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
{t('interactiveDemo.canvas.tabs.preview')}
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[400px]">
                    {/* Technologies Tab */}
                    {activeTab === 'technologies' && selectedModules.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-gradient-to-br from-architech-section-light/80 to-architech-section-dark/80 rounded-2xl p-6 border border-architech-brand-green/20 shadow-inner"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-architech-brand-green to-architech-electric flex items-center justify-center">
                            <Layers className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {t('interactiveDemo.canvas.technologies.title')}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {selectedModules.length} {selectedModules.length > 1 ? t('interactiveDemo.canvas.technologies.countPlural') : t('interactiveDemo.canvas.technologies.count')}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedModules.map((index) => {
                            const tech = techStack[index];
                            return (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: selectedModules.indexOf(index) * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-gradient-to-r from-architech-brand-blue/10 to-architech-electric/10 border border-architech-brand-blue/20 rounded-xl hover:border-architech-brand-blue/40 transition-all duration-300 group"
                              >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                  <tech.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-foreground text-lg mb-1">
                                    {tech.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {tech.description}
                                  </p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-architech-brand-blue animate-pulse"></div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Blueprint Tab */}
                    {activeTab === 'blueprint' && showBlueprint && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-gradient-to-br from-architech-section-light/80 to-architech-section-dark/80 rounded-2xl p-6 border border-architech-brand-blue/20 shadow-inner"
                      >
                        {/* Code editor styling */}
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono ml-4">architecture.yml</span>
                        </div>
                        
                        <div className="font-mono text-sm max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-architech-brand-blue/30 scrollbar-track-transparent">
                          {blueprintLines.map((line, index) => (
                            <motion.div
                              key={index}
                              className="text-foreground min-h-[1.5rem] leading-6 flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                              <span className="text-muted-foreground/50 text-xs w-8 select-none">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="ml-4">
                        {line.startsWith("#") ? (
                                  <span className="text-architech-brand-blue/80 font-semibold">
                            {line}
                          </span>
                        ) : line.includes(":") ? (
                          <>
                                    <span className="text-architech-brand-blue font-semibold">
                              {line.split(":")[0]}:
                            </span>
                            <span className="text-architech-brand-green ml-2 font-medium">
                              "{line.split(":")[1].trim()}"
                            </span>
                          </>
                                ) : line.startsWith("  -") ? (
                                  <span className="text-architech-electric font-medium">
                                    {line}
                                  </span>
                        ) : (
                          <span className="text-foreground">{line}</span>
                        )}
                              </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

                    {/* Structure Tab */}
                    {activeTab === 'structure' && showProjectStructure && (
                <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-gradient-to-br from-architech-section-light/80 to-architech-section-dark/80 rounded-2xl p-6 border border-architech-brand-green/20 shadow-inner"
                      >
                        {/* File explorer styling */}
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono ml-4">📁 project-structure</span>
                        </div>
                        
                        <div className="font-mono text-sm max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-architech-brand-green/30 scrollbar-track-transparent">
                    {renderProjectStructure(generateProjectStructure(selectedModules))}
                  </div>
                </motion.div>
              )}

                    {/* Preview Tab */}
                    {activeTab === 'preview' && showWorkingPreview && (
                <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-gradient-to-br from-architech-section-light/80 to-architech-section-dark/80 rounded-2xl p-6 border border-architech-electric/20 shadow-inner"
                      >
                    <motion.div
                          className="bg-white rounded-2xl p-6 shadow-2xl shadow-architech-electric/10 border border-architech-electric/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          {/* Browser header */}
                          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                            <div className="flex items-center gap-3">
                              <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              </div>
                              <h4 className="font-bold text-gray-800 text-lg">
                            Dashboard
                          </h4>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-gray-500">Live</span>
                            </div>
                          </div>
                          
                          {/* Dashboard content */}
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <motion.div 
                                className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                    <Database className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="text-sm text-blue-600 font-semibold">
                                    Projets actifs
                                  </div>
                                </div>
                                <div className="text-3xl font-bold text-blue-800">
                                  3
                                </div>
                              </motion.div>
                              
                              <motion.div 
                                className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="text-sm text-green-600 font-semibold">
                              Tâches terminées
                                  </div>
                                </div>
                                <div className="text-3xl font-bold text-green-800">
                                  12
                                </div>
                              </motion.div>
                            </div>
                            
                            {/* Additional dashboard elements */}
                            <div className="bg-gray-50 rounded-xl p-4">
                              <div className="text-sm text-gray-600 font-medium mb-2">Activité récente</div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  Nouveau projet créé
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  Tâche terminée
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                    </motion.div>
                    )}
                  </div>
                  </div>
                </motion.div>
              )}
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