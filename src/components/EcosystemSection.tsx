import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight, Code2, Cpu, Wifi, MessageSquare, Store, Gamepad2, Music, Camera, Users, Zap } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInDown, 
  scaleIn, 
  staggerContainer, 
  defaultViewport 
} from '@/lib/animations';
import DiscordIcon from '@/components/DiscordIcon';

const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      className="min-h-screen bg-architech-section-dark relative overflow-hidden py-16 sm:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-architech-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-architech-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue text-sm font-medium mb-6"
            variants={fadeInDown}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Ecosystem
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F9FA] mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            More than templates.{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              A community.
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[#F8F9FA]/80 max-w-3xl mx-auto leading-relaxed px-4"
            variants={fadeInUp}
          >
            Join developers building the future of development together.
          </motion.p>
        </motion.div>

        {/* Simplified Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Single Visual Element */}
          <motion.div className="mb-12" variants={fadeInUp}>
            <div className="glass-card rounded-3xl p-12 border border-architech-brand-green/20 bg-gradient-to-br from-[#39FF14]/5 to-[#00A9FF]/5 relative overflow-hidden max-w-2xl mx-auto">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-architech-brand-green to-architech-brand-blue rounded-full flex items-center justify-center shadow-lg shadow-architech-brand-green/30">
                    <Package className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Simple Tech Preview */}
                <div className="flex justify-center items-center gap-6 mb-8">
                  {[
                    { icon: Code2, name: "Solidity", color: "bg-orange-500" },
                    { icon: Cpu, name: "Rust", color: "bg-orange-600" },
                    { icon: Wifi, name: "MQTT", color: "bg-blue-500" },
                    { icon: Store, name: "Shopify", color: "bg-green-600" },
                  ].map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs text-foreground font-medium">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Coming Soon Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-architech-brand-green/10 border border-architech-brand-green/20 rounded-full text-architech-brand-green text-sm font-medium">
                  <div className="w-2 h-2 bg-architech-brand-green rounded-full animate-pulse"></div>
                  Community Marketplace Coming Soon
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simplified Content */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                A Living Ecosystem
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We're building a community marketplace where developers share pre-built integrations. 
                For unique needs, our AI generates custom integrations automatically.
              </p>
            </div>

            {/* Single Feature Highlight */}
            <div className="glass-card rounded-2xl p-8 border border-architech-brand-blue/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-architech-brand-blue/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-architech-brand-blue" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Community-Driven Innovation
              </h4>
              <p className="text-muted-foreground">
                Share your modules, discover new integrations, and contribute to the growing ecosystem of developer tools.
              </p>
            </div>

            {/* CTA */}
            <motion.div className="pt-4" variants={fadeInUp}>
              <motion.a
                href="https://discord.gg/sxhdEEWups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DiscordIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Join Our Discord Community</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <p className="text-sm text-muted-foreground mt-3">
                Connect with developers, share ideas, and shape the future of our ecosystem
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
