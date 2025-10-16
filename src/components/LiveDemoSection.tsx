import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, CheckCircle, Zap, Code, Database, Shield, Palette, TestTube } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const LiveDemoSection = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const buildSteps = [
    {
      id: "auth",
      title: t('liveDemo.steps.auth.title'),
      description: t('liveDemo.steps.auth.description'),
      icon: Shield,
      color: "from-blue-600 to-blue-400",
      code: t('liveDemo.steps.auth.code')
    },
    {
      id: "database",
      title: t('liveDemo.steps.database.title'), 
      description: t('liveDemo.steps.database.description'),
      icon: Database,
      color: "from-muted to-muted-foreground",
      code: t('liveDemo.steps.database.code')
    },
    {
      id: "ui",
      title: t('liveDemo.steps.ui.title'),
      description: t('liveDemo.steps.ui.description'),
      icon: Palette,
      color: "from-purple-600 to-purple-400", 
      code: t('liveDemo.steps.ui.code')
    },
    {
      id: "api",
      title: t('liveDemo.steps.api.title'),
      description: t('liveDemo.steps.api.description'),
      icon: Code,
      color: "from-muted to-muted-foreground",
      code: t('liveDemo.steps.api.code')
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(current => {
              if (current >= buildSteps.length - 1) {
                setIsPlaying(false);
                return current;
              }
              return current + 1;
            });
            return 0;
          }
          return prev + 3;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-background via-electric-blue/3 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 text-sm font-medium text-electric-blue mb-8">
            <Zap className="h-4 w-4" />
            {t('liveDemo.badge')}
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('liveDemo.title.line1')}{" "}
            <span className="text-primary">
              {t('liveDemo.title.line2')}
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('liveDemo.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Demo controls and progress */}
            <div className="space-y-8">
              <div className="bg-card border border-border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('liveDemo.building')}
                </h3>

                {/* Demo controls */}
                <div className="flex gap-4 mb-8">
                  <Button
                    onClick={handlePlay}
                    className={`${
                      isPlaying
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-primary"
                    } text-white`}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 mr-2" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isPlaying ? t('liveDemo.buttons.pause') : t('liveDemo.buttons.startDemo')}
                  </Button>

                  <Button variant="outline" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    {t('liveDemo.buttons.reset')}
                  </Button>
                </div>

                {/* Build steps */}
                <div className="space-y-4">
                  {buildSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center gap-4 p-4 border transition-all duration-300 ${
                        index === currentStep
                          ? "border-electric-blue bg-electric-blue/5"
                          : index < currentStep
                          ? "border-green-500/50 bg-green-500/5"
                          : "border-border bg-card"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                      >
                        {index < currentStep ? (
                          <CheckCircle className="h-6 w-6 text-white" />
                        ) : (
                          <step.icon className="h-6 w-6 text-white" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">
                          {step.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {step.description}
                        </div>

                        {index === currentStep && isPlaying && (
                          <div className="mt-2">
                            <div className="w-full bg-muted h-2">
                              <div
                                className="bg-primary h-2 transition-all duration-100"
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
              <div className="bg-background border border-border overflow-hidden">
                <div className="bg-muted px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500"></div>
                      <div className="w-3 h-3 bg-yellow-500"></div>
                      <div className="w-3 h-3 bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {buildSteps[currentStep]?.title || t('liveDemo.readyToBuild')}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <pre className="text-sm text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap">
                    {currentStep < buildSteps.length
                      ? buildSteps[currentStep].code
                      : t('liveDemo.clickToStart')}
                  </pre>
                </div>
              </div>

              {/* Results summary */}
              <div className="mt-6 p-6 bg-primary text-white">
                <h4 className="font-bold text-lg mb-2">{t('liveDemo.complete.title')}</h4>
                <p className="text-sm opacity-90">
                  ✅ {t('liveDemo.complete.platform')}
                  <br />
                  ✅ {t('liveDemo.complete.features')}
                  <br />✅ {t('liveDemo.complete.time')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;