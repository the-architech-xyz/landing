import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Code, Database, Shield, Palette, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";

const InteractiveDemoSection = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  const demoSteps = [
    {
      id: "prompt",
      title: t('interactiveDemo.steps.idea.title'),
      description: t('interactiveDemo.steps.idea.description'),
      icon: Code,
      color: "from-blue-600 to-blue-400",
      code: `// Une application de gestion de tâches avec authentification
const app = {
  name: "TaskManager",
  features: ["auth", "database", "ui", "api"]
};`
    },
    {
      id: "adapters",
      title: t('interactiveDemo.steps.adapters.title'),
      description: t('interactiveDemo.steps.adapters.description'),
      icon: Database,
      color: "from-green-600 to-green-400",
      code: `✅ Auth Service (JWT + OAuth)
✅ Database (PostgreSQL + Prisma)
✅ UI Components (React + Tailwind)
✅ API Gateway (Express + TypeScript)`
    },
    {
      id: "blueprint",
      title: t('interactiveDemo.steps.blueprint.title'),
      description: t('interactiveDemo.steps.blueprint.description'),
      icon: Shield,
      color: "from-purple-600 to-purple-400",
      code: `📁 src/
  ├── components/
  ├── pages/
  ├── services/
  └── utils/
📁 prisma/
  └── schema.prisma
📄 package.json
📄 README.md`
    },
    {
      id: "output",
      title: t('interactiveDemo.steps.output.title'),
      description: t('interactiveDemo.steps.output.description'),
      icon: Palette,
      color: "from-orange-600 to-orange-400",
      code: `🎉 Application générée avec succès !
📊 4 modules assemblés
⏱️ Temps: 2.3 secondes
🚀 Prêt pour le déploiement`
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(current => {
              if (current >= demoSteps.length - 1) {
                setIsPlaying(false);
                setShowCTA(true);
                return current;
              }
              return current + 1;
            });
            return 0;
          }
          return prev + 4;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setCurrentStep(0);
      setProgress(0);
      setShowCTA(false);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
    setShowCTA(false);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-background via-electric-blue/5 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium text-electric-blue mb-8">
            <Zap className="h-4 w-4" />
            {t('interactiveDemo.badge')}
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('interactiveDemo.title.line1')}{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              {t('interactiveDemo.title.line2')}
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('interactiveDemo.subtitle')}
          </p>

          {/* Visual Cue */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
            <span>{t('interactiveDemo.cue')}</span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Demo controls and progress */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('interactiveDemo.building')}
                </h3>

                {/* Demo controls */}
                <div className="flex gap-4 mb-8">
                  <Button
                    onClick={handlePlay}
                    className={`${
                      isPlaying
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gradient-electric"
                    } text-white px-8 py-4 text-lg`}
                  >
                    {isPlaying ? (
                      <Play className="h-5 w-5 mr-2" />
                    ) : (
                      <Play className="h-5 w-5 mr-2" />
                    )}
                    {isPlaying ? t('interactiveDemo.buttons.pause') : t('interactiveDemo.buttons.startDemo')}
                  </Button>

                  <Button variant="outline" onClick={handleReset} className="px-6 py-4">
                    {t('interactiveDemo.buttons.reset')}
                  </Button>
                </div>

                {/* Build steps */}
                <div className="space-y-4">
                  {demoSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        index === currentStep
                          ? "border-electric-blue bg-electric-blue/5 shadow-lg"
                          : index < currentStep
                          ? "border-green-500/50 bg-green-500/5"
                          : "border-border bg-card"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                      >
                        {index < currentStep ? (
                          <CheckCircle className="h-6 w-6 text-white" />
                        ) : (
                          <step.icon className="h-6 w-6 text-white" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-lg">
                          {step.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {step.description}
                        </div>

                        {index === currentStep && isPlaying && (
                          <div className="mt-3">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-gradient-electric h-2 rounded-full transition-all duration-100"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Code output */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-muted px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {demoSteps[currentStep]?.title || t('interactiveDemo.readyToBuild')}
                    </div>
                  </div>
                </div>

                <div className="p-6 min-h-[300px]">
                  <pre className="text-sm text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap">
                    {currentStep < demoSteps.length
                      ? demoSteps[currentStep].code
                      : t('interactiveDemo.clickToStart')}
                  </pre>
                </div>
              </div>

              {/* Results summary */}
              {showCTA && (
                <motion.div 
                  className="mt-6 p-8 bg-gradient-electric rounded-2xl text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="font-bold text-xl mb-4">{t('interactiveDemo.complete.title')}</h4>
                  <p className="text-sm opacity-90 mb-6">
                    ✅ {t('interactiveDemo.complete.platform')}<br />
                    ✅ {t('interactiveDemo.complete.features')}<br />
                    ✅ Code prêt pour la production<br />
                    ⏱️ {t('interactiveDemo.complete.time')}
                  </p>
                  
                  {/* Main CTA */}
                  <Button 
                    size="lg" 
                    className="bg-white text-electric-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg group"
                    onClick={() => {
                      const element = document.getElementById('cta');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Rejoindre la Liste d'Attente
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
