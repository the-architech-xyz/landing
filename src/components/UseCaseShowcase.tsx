import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Bot, ShoppingCart, BarChart3, PenTool, Zap, Brain, Search, CreditCard, Database, Shield, RefreshCw, User, Triangle } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInDown, 
  scaleIn, 
  staggerContainer, 
  defaultViewport 
} from '@/lib/animations';

const UseCaseShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const useCases = [
    {
      id: 1,
      title: "AI Writing Assistant",
      description: "Launch your intelligent content creation platform in a weekend.",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-emerald-600 font-medium">AI Assistant</div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="h-24 bg-white rounded-xl shadow-sm p-4">
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                <div className="h-3 bg-emerald-200 rounded w-3/5 animate-pulse"></div>
              </div>
            </div>
            <div className="h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-medium text-sm">Generating content...</span>
            </div>
          </div>
        </div>
      ),
      stack: [
        { name: "Next.js", icon: Zap, color: "bg-gray-800" },
        { name: "OpenAI", icon: Brain, color: "bg-green-600" },
        { name: "Pinecone", icon: Search, color: "bg-yellow-500" },
        { name: "Stripe", icon: CreditCard, color: "bg-purple-600" }
      ]
    },
    {
      id: 2,
      title: "Modern E-commerce",
      description: "Build a full-featured online store with payments and inventory management.",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-pink-600 font-medium">E-commerce</div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="h-24 bg-white rounded-xl shadow-sm p-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-pink-100 rounded-lg"></div>
                <div className="h-16 bg-pink-100 rounded-lg"></div>
                <div className="h-16 bg-pink-100 rounded-lg"></div>
              </div>
            </div>
            <div className="h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-medium text-sm">Products loading...</span>
            </div>
          </div>
        </div>
      ),
      stack: [
        { name: "Remix", icon: Zap, color: "bg-blue-600" },
        { name: "Sanity", icon: PenTool, color: "bg-pink-500" },
        { name: "Algolia", icon: Search, color: "bg-blue-500" },
        { name: "Stripe", icon: CreditCard, color: "bg-purple-600" }
      ]
    },
    {
      id: 3,
      title: "Internal Dashboard",
      description: "Create powerful analytics and admin tools for your team in minutes.",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-blue-600 font-medium">Dashboard</div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="h-24 bg-white rounded-xl shadow-sm p-4">
              <div className="space-y-2">
                <div className="h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 bg-blue-100 rounded"></div>
                  <div className="h-8 bg-purple-100 rounded"></div>
                </div>
              </div>
            </div>
            <div className="h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-medium text-sm">Analytics ready</span>
            </div>
          </div>
        </div>
      ),
      stack: [
        { name: "React", icon: Zap, color: "bg-blue-500" },
        { name: "Tremor UI", icon: BarChart3, color: "bg-purple-500" },
        { name: "Supabase", icon: Database, color: "bg-green-500" },
        { name: "Auth.js", icon: Shield, color: "bg-orange-500" }
      ]
    },
    {
      id: 4,
      title: "Team Whiteboard",
      description: "Build real-time collaborative workspaces that your team will love.",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm text-violet-600 font-medium">Whiteboard</div>
          </div>
          <div className="space-y-4 flex-1 relative">
            <div className="absolute top-2 right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            <div className="h-24 bg-white rounded-xl shadow-sm relative">
              <div className="absolute top-2 left-2 w-12 h-8 bg-violet-200 rounded"></div>
              <div className="absolute bottom-2 right-2 w-8 h-6 bg-purple-200 rounded"></div>
        </div>
            <div className="h-12 bg-gradient-to-r from-violet-400 to-purple-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-medium text-sm">Collaborating...</span>
            </div>
          </div>
        </div>
      ),
      stack: [
        { name: "Liveblocks", icon: RefreshCw, color: "bg-violet-500" },
        { name: "Postgres", icon: Database, color: "bg-blue-600" },
        { name: "Clerk", icon: User, color: "bg-orange-500" },
        { name: "Vercel", icon: Triangle, color: "bg-black" }
      ]
    }
  ];

  return (
    <section
      id="use-cases"
      className="min-h-screen bg-architech-section-dark relative overflow-hidden py-16 sm:py-24"
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-architech-brand-blue rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-architech-brand-green rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, -12, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-sm font-medium text-architech-brand-blue mb-6 sm:mb-8"
            variants={scaleIn}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Use Cases
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#F8F9FA] mb-4 sm:mb-6 leading-tight px-2"
            variants={fadeInUp}
          >
            Build Anything.
            <br />
            <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
              Faster. Better.
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[#F8F9FA]/80 max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            From internal tools to AI-powered apps, The Architech gives you the
            perfect, production-ready foundation.
          </motion.p>
        </motion.div>

        {/* Use Case Carousel */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={defaultViewport}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Visual Pane */}
            <motion.div
              className="relative"
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card rounded-3xl p-8 border border-architech-brand-blue/20 bg-gradient-to-br from-[#00A9FF]/5 to-[#39FF14]/5 relative overflow-hidden">
                <div className="relative z-10">
                  {useCases[activeIndex].visual}
                </div>
              </div>
            </motion.div>

            {/* Right - Explanation Pane */}
            <motion.div
              className="space-y-8"
              key={`explanation-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {useCases[activeIndex].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {useCases[activeIndex].description}
                </p>
              </div>

              {/* Module Stack */}
              <div>
                <h4 className="text-xl font-semibold text-architech-brand-blue mb-6">
                  Module Stack Used:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {useCases[activeIndex].stack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        className="flex items-center gap-3 p-4 glass-card rounded-xl border border-architech-brand-blue/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-foreground">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button  // TODO: Add a button to see the blueprint */}
              {/* <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-electric text-white rounded-2xl font-semibold text-lg hover:shadow-glow transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>See the Blueprint</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button> */}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl">
              {useCases.map((useCase, index) => (
                <motion.button
                  key={useCase.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    index === activeIndex
                      ? "bg-architech-brand-blue text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-architech-brand-blue/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {useCase.title}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseShowcase;
