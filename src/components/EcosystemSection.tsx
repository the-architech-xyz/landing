import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Package, Users, ArrowRight } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInDown, 
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
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#F8F9FA] mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            A living{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              ecosystem
            </span>
            {" "}for developers
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[#F8F9FA]/80 max-w-4xl mx-auto leading-relaxed px-4"
            variants={fadeInUp}
          >
            Beyond the Templates:{" "}
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text font-semibold">
              Your Vision, Your Stack.
            </span>
          </motion.p>
        </motion.div>

        {/* Main Content - 2 Columns for Desktop */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Blueprint Visual + Content */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  How It Works
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every module is defined by a simple file describing actions: create a file, run a command, add a dependency, etc... <br /> It's transparent, easy to debug, and simple to create your own.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 relative overflow-hidden">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Simple Blueprint File
                  </h4>
                  <div className="bg-[#0D1B2A] rounded-xl p-6 border border-architech-brand-blue/30 font-mono text-sm text-left">
                    <pre className="text-foreground whitespace-pre-wrap">
{`# Blueprint: Authentication Module
version: "1.0"
actions:
  - create_file: "auth.js"
  - run_command: "npm install bcrypt"
  - add_dependency: "express-session"`}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Ecosystem Vision */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
               
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're building a community marketplace where developers can share pre-built integrations and modules. For unique needs, our AI will generate custom integrations automatically.
                </p>
              </div>

              {/* Ecosystem Features - Simplified */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 glass-card rounded-lg border border-architech-brand-blue/20">
                  <Package className="w-5 h-5 text-architech-brand-blue" />
                  <span className="text-foreground font-medium">Community Marketplace</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 glass-card rounded-lg border border-architech-brand-green/20">
                  <Code2 className="w-5 h-5 text-architech-brand-green" />
                  <span className="text-foreground font-medium">AI Generation</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 glass-card rounded-lg border border-architech-brand-blue/20">
                  <Users className="w-5 h-5 text-architech-brand-blue" />
                  <span className="text-foreground font-medium">Open Source</span>
                </div>
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
                  <span>Join Discord</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;