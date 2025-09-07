import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/animations";
import { FileText, Cpu, Download } from "lucide-react";

const HowItWorksSection = () => {
  // Debug: Force content to be visible (remove this in production)
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    // Fallback: if animations don't trigger after 1 second, force visibility
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  const steps = [
    {
      number: "01",
      title: "Choose Your Blueprint",
      description: "Select from battle-tested blueprints or create your own. Each blueprint is a proven architecture pattern.",
      icon: FileText,
      details: [
        "Browse available blueprints",
        "Choose your tech stack",
        "Customize the configuration",
        "Download or clone the blueprint"
      ],
      codeExample: `# Available blueprints:
npx @architech/cli list

# Choose a blueprint:
npx @architech/cli create react-saas
# or
npx @architech/cli create nextjs-ecommerce
# or
npx @architech/cli create nodejs-api`
    },
    {
      number: "02", 
      title: "CLI Generates Your Project",
      description: "The CLI transforms your blueprint into a complete, production-ready codebase with all dependencies configured.",
      icon: Cpu,
      details: [
        "CLI scaffolds the project structure",
        "Installs all dependencies",
        "Configures build tools and linting",
        "Sets up development environment"
      ],
      codeExample: `# CLI generates your project:
npx @architech/cli create react-saas my-app

# Output:
✓ Created project structure
✓ Installed dependencies
✓ Configured TypeScript
✓ Set up TailwindCSS
✓ Added ESLint & Prettier
✓ Ready to develop!`
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
        {forceVisible ? (
          // Fallback: Non-animated version for debugging
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16 sm:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                  style={{ minHeight: '400px' }}
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
                </div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, index) => (
            <motion.div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                variants={fadeInUp}
                initial={forceVisible ? "visible" : "hidden"}
              whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                // Fallback: ensure content is visible even if animation fails
                style={{ 
                  minHeight: '400px',
                  opacity: forceVisible ? 1 : undefined
                }}
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
        )}

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