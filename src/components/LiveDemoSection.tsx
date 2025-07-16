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
      color: "from-green-600 to-green-400",
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
      color: "from-orange-600 to-orange-400",
      code: "// Type-safe API routes\nexport async function GET(request: Request) {\n  const users = await prisma.user.findMany({\n    include: { profile: true }\n  });\n  return Response.json(users);\n}"
    },
    {
      id: "tests",
      title: "TestAgent",
      description: "Generating comprehensive test suites",
      icon: TestTube,
      color: "from-red-600 to-red-400",
      code: "// Full test coverage\ndescribe('Authentication', () => {\n  it('should authenticate valid users', async () => {\n    const response = await login(validUser);\n    expect(response.status).toBe(200);\n  });\n});"
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
          return prev + 2;
        });
      }, 50);
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
    <section className="py-24 bg-gradient-to-br from-background via-electric-blue/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-sm font-medium text-electric-blue mb-8">
            <Zap className="h-4 w-4" />
            Live Demo - Build an App in 60 Seconds
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
            Watch The{" "}
            <span className="text-transparent bg-gradient-electric bg-clip-text">
              Revolution
            </span>
            <br />
            In Action
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how The Architech transforms months of work into minutes. 
            This is not a mockup - this is real code generation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Control Panel */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Build Progress</h3>
                
                {/* Controls */}
                <div className="flex items-center gap-4 mb-8">
                  <Button 
                    onClick={handlePlay}
                    size="lg"
                    className={`${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-electric'} text-white`}
                  >
                    {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                    {isPlaying ? 'Pause Build' : 'Start Building'}
                  </Button>
                  
                  <Button onClick={handleReset} variant="outline" size="lg">
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* Progress Steps */}
                <div className="space-y-4">
                  {buildSteps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;
                    
                    return (
                      <div 
                        key={step.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                          isActive 
                            ? 'border-electric-blue bg-electric-blue/10' 
                            : isCompleted 
                              ? 'border-green-500/50 bg-green-500/10'
                              : 'border-border bg-surface-elevated/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-green-500' 
                            : isActive 
                              ? `bg-gradient-to-br ${step.color}` 
                              : 'bg-muted'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : (
                            <StepIcon className="h-6 w-6 text-white" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                        
                        {isActive && (
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-electric transition-all duration-100"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Code Preview */}
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-3xl p-8 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Generated Code</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-background/50 border border-border rounded-xl p-6 font-mono text-sm">
                  <pre className="text-muted-foreground whitespace-pre-wrap">
                    {currentStep < buildSteps.length ? buildSteps[currentStep].code : "// Build complete! 🎉\n// Your app is ready to deploy."}
                  </pre>
                </div>

                {/* Floating particles effect when active */}
                {isPlaying && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-2 h-2 bg-electric-blue rounded-full animate-ping"></div>
                    <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-20 left-20 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">60s</div>
                  <div className="text-xs text-muted-foreground">Build Time</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">100%</div>
                  <div className="text-xs text-muted-foreground">Test Coverage</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-electric bg-clip-text">0</div>
                  <div className="text-xs text-muted-foreground">Config Files</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;