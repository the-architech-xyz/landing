import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const SocialProofSection = () => {
  const logos = [
    { name: "React", logo: "⚛️" },
    { name: "TypeScript", logo: "🔷" },
    { name: "Node.js", logo: "🟢" },
    { name: "PostgreSQL", logo: "🐘" },
    { name: "Prisma", logo: "🔮" },
    { name: "Tailwind", logo: "🎨" },
    { name: "Vercel", logo: "▲" },
    { name: "Docker", logo: "🐳" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <p className="text-lg text-muted-foreground mb-8">
            Built with industry-standard technologies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border hover:border-electric-blue/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{tech.logo}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
