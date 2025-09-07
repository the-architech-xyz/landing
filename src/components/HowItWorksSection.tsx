import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";
import { FileText, Cpu, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Blueprint Your Vision",
      description: "Describe your intent. The AI suggests a stack. You always have the final say.",
      icon: FileText,
      details: [
        "Tell us what you want to build",
        "AI analyzes your requirements",
        "Get a suggested tech stack",
        "Customize and approve the blueprint"
      ],
      codeExample: `# Describe your app:
description: "A collaborative project management app with modern design"

# AI suggests a stack (you can edit this):
stack:
  framework: "React (Next.js)"
  styling: "TailwindCSS"
  database: "PostgreSQL (Supabase)"
  auth: "JWT (Auth.js)"`
    },
    {
      number: "02", 
      title: "Let the AI Architect",
      description: "The AI orchestrates battle-tested, open-source modules into a robust system.",
      icon: Cpu,
      details: [
        "AI selects proven modules",
        "Configures integrations",
        "Sets up project structure",
        "Ensures best practices"
      ],
      codeExample: `# AI orchestrates your stack:
- Next.js with App Router
- Supabase for database & auth
- TailwindCSS for styling
- TypeScript for type safety
- ESLint + Prettier for code quality`
    },
    {
      number: "03",
      title: "Own Your Code, Instantly", 
      description: "Get production-ready code you fully own. No proprietary dependencies, no lock-in. Ever.",
      icon: Download,
      details: [
        "Download your complete project",
        "100% open-source code",
        "No vendor lock-in",
        "Full ownership and control"
      ],
      codeExample: `// You get clean, standard code
import { withAuth } from '@lib/auth';
import { useDatabase } from '@lib/db';

function DashboardPage({ user }) {
  const { data: projects } = useDatabase('projects');

  return (
    <Layout user={user}>
      <h1>Welcome, {user.name}</h1>
      <Button>Create New Project</Button>
    </Layout>
  );
}`
    }
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-32 bg-gradient-to-b from-background to-background/50 bg-architech-section-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-satoshi font-bold text-foreground mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform your vision into production-ready
            code
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                variants={fadeInUp}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-xl flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-satoshi font-bold text-architech-brand-blue">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-satoshi font-bold text-foreground mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-foreground"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Example */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="glass-card rounded-2xl p-6 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                    <div className="bg-[#0D1B2A] rounded-xl p-6 border border-architech-brand-blue/30 font-mono text-sm overflow-x-auto">
                      <pre className="text-foreground whitespace-pre-wrap">
                        <code>{step.codeExample}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          className="text-center mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see it in action?
          </p>
          <motion.button
            className="bg-gradient-to-r from-architech-brand-blue to-architech-brand-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-architech-brand-blue/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('architects-canvas');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Watch Live Demo
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;