import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, CheckCircle, Zap, Code, Database, Shield, Palette, TestTube } from "lucide-react";

const LiveDemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const buildSteps = [
    {
      id: "auth",
      title: "AuthAgent",
      description: "Setting up secure authentication",
      icon: Shield,
      color: "from-blue-600 to-blue-400",
      code: "// JWT + OAuth2 + Role-based permissions\nexport const authConfig = {\n  providers: ['google', 'github'],\n  jwt: { secret: process.env.JWT_SECRET },\n  permissions: ['admin', 'user']\n};"
    },
    {
      id: "database",
      title: "DatabaseAgent", 
      description: "Configuring optimized database schema",
      icon: Database,
      color: "from-muted to-muted-foreground",
      code: "// Auto-generated Prisma schema\nmodel User {\n  id        String   @id @default(cuid())\n  email     String   @unique\n  profile   Profile?\n  createdAt DateTime @default(now())\n}"
    },
    {
      id: "ui",
      title: "DesignAgent",
      description: "Creating accessible UI components",
      icon: Palette,
      color: "from-purple-600 to-purple-400", 
      code: "// Responsive, accessible components\nexport const Button = ({ variant, size, children }) => {\n  return (\n    <button className={cn(buttonVariants({ variant, size }))}>\n      {children}\n    </button>\n  );\n};"
    },
    {
      id: "api",
      title: "APIAgent",
      description: "Building REST + GraphQL endpoints",
      icon: Code,
      color: "from-muted to-muted-foreground",
      code: "// Type-safe API routes\nexport async function GET(request: Request) {\n  const users = await prisma.user.findMany({\n    include: { profile: true }\n  });\n  return Response.json(users);\n}"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium text-electric-blue mb-8">
            <Zap className="h-4 w-4" />
            Live Demo - See The Magic
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Watch Your App{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Come to Life
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to production-ready app in minutes. Watch as specialized
            AI agents collaborate to build your entire application.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Demo controls and progress */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Building: E-commerce Platform
                </h3>

                {/* Demo controls */}
                <div className="flex gap-4 mb-8">
                  <Button
                    onClick={handlePlay}
                    className={`${
                      isPlaying
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gradient-electric"
                    } text-white`}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 mr-2" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isPlaying ? "Pause" : "Start Demo"}
                  </Button>

                  <Button variant="outline" onClick={handleReset}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* Build steps */}
                <div className="space-y-4">
                  {buildSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        index === currentStep
                          ? "border-electric-blue bg-electric-blue/5"
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
                        <div className="font-semibold text-foreground">
                          {step.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {step.description}
                        </div>

                        {index === currentStep && isPlaying && (
                          <div className="mt-2">
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
              <div className="bg-background border border-border rounded-2xl overflow-hidden">
                <div className="bg-muted px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {buildSteps[currentStep]?.title || "Ready to build..."}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <pre className="text-sm text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap">
                    {currentStep < buildSteps.length
                      ? buildSteps[currentStep].code
                      : "// Click 'Start Demo' to begin building..."}
                  </pre>
                </div>
              </div>

              {/* Results summary */}
              <div className="mt-6 p-6 bg-gradient-electric rounded-2xl text-white">
                <h4 className="font-bold text-lg mb-2">Demo Complete!</h4>
                <p className="text-sm opacity-90">
                  ✅ Production-ready e-commerce platform
                  <br />
                  ✅ Authentication, database, UI, and API
                  <br />✅ Built in under 60 seconds
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