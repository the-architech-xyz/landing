import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInDown, 
  scaleIn, 
  staggerContainer, 
  defaultViewport 
} from '@/lib/animations';

const UseCaseShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const useCases = [
    {
      id: 1,
      title: "Internal Dashboard",
      description: "Analytics and admin tools for your team",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <div className="text-xs text-gray-600 font-medium">Dashboard</div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 bg-white rounded shadow-sm"></div>
              <div className="h-12 bg-white rounded shadow-sm"></div>
            </div>
          </div>
        </div>
      ),
      stack: [
        { name: "React (Vite)", color: "bg-blue-500" },
        { name: "Tremor UI", color: "bg-purple-500" },
        { name: "Supabase", color: "bg-green-500" },
        { name: "Auth.js", color: "bg-orange-500" }
      ]
    },
    {
      id: 2,
      title: "AI Writing Assistant",
      description: "Intelligent content creation platform",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
            <div className="text-xs text-gray-600 font-medium">AI Assistant</div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="h-20 bg-white rounded-lg shadow-sm p-3">
              <div className="h-2 bg-gray-200 rounded mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-2 bg-emerald-200 rounded w-1/2"></div>
            </div>
            <div className="h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg"></div>
          </div>
        </div>
      ),
      stack: [
        { name: "Next.js", color: "bg-gray-800" },
        { name: "OpenAI", color: "bg-green-600" },
        { name: "Pinecone", color: "bg-yellow-500" },
        { name: "Stripe", color: "bg-purple-600" }
      ]
    },
    {
      id: 3,
      title: "Team Whiteboard",
      description: "Real-time collaborative workspace",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-violet-50 to-purple-100 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-violet-500 rounded-lg"></div>
            <div className="text-xs text-gray-600 font-medium">Whiteboard</div>
          </div>
          <div className="space-y-3 flex-1 relative">
            <div className="absolute top-2 right-2 w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="h-16 bg-white rounded-lg shadow-sm relative">
              <div className="absolute top-2 left-2 w-8 h-6 bg-violet-200 rounded"></div>
              <div className="absolute bottom-2 right-2 w-6 h-4 bg-purple-200 rounded"></div>
            </div>
            <div className="h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-lg"></div>
          </div>
        </div>
      ),
      stack: [
        { name: "Liveblocks", color: "bg-violet-500" },
        { name: "Vercel Postgres", color: "bg-blue-600" },
        { name: "Clerk", color: "bg-orange-500" },
        { name: "Vercel", color: "bg-black" }
      ]
    },
    {
      id: 4,
      title: "Mobile App",
      description: "Cross-platform mobile application",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <div className="text-xs text-gray-600 font-medium">Mobile App</div>
          </div>
          <div className="space-y-3 flex-1">
            {/* Phone mockup */}
            <div className="h-20 bg-white rounded-lg shadow-sm p-2 relative">
              <div className="w-full h-full bg-gradient-to-b from-blue-100 to-indigo-100 rounded border-2 border-gray-200 relative">
                {/* Phone screen content */}
                <div className="absolute top-1 left-1 right-1 bottom-1 bg-white rounded">
                  <div className="h-2 bg-blue-300 rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded w-2/3 mb-1"></div>
                  <div className="h-3 bg-blue-200 rounded"></div>
                </div>
                {/* Phone home indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg"></div>
          </div>
        </div>
      ),
      stack: [
        { name: "React Native", color: "bg-blue-500" },
        { name: "Expo", color: "bg-purple-500" },
        { name: "Firebase", color: "bg-orange-500" },
        { name: "NativeWind", color: "bg-cyan-500" }
      ]
    },
    {
      id: 5,
      title: "Modern E-commerce",
      description: "Full-featured online store",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-pink-500 rounded-lg"></div>
            <div className="text-xs text-gray-600 font-medium">E-commerce</div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="h-16 bg-white rounded-lg shadow-sm p-2">
              <div className="h-8 bg-pink-200 rounded mb-2"></div>
              <div className="flex justify-between">
                <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                <div className="h-2 bg-pink-300 rounded w-1/4"></div>
              </div>
            </div>
            <div className="h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg"></div>
          </div>
        </div>
      ),
      stack: [
        { name: "Remix", color: "bg-blue-600" },
        { name: "Sanity", color: "bg-pink-500" },
        { name: "Algolia", color: "bg-blue-500" },
        { name: "Lemon Squeezy", color: "bg-yellow-500" }
      ]
    },
    {
      id: 6,
      title: "Data Analytics Platform",
      description: "Business intelligence and reporting",
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg"></div>
            <div className="text-xs text-gray-600 font-medium">Analytics</div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="h-16 bg-white rounded-lg shadow-sm p-2">
              <div className="h-6 bg-gradient-to-r from-cyan-300 to-blue-300 rounded mb-2"></div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-2 bg-cyan-200 rounded"></div>
                <div className="h-2 bg-blue-200 rounded"></div>
                <div className="h-2 bg-cyan-200 rounded"></div>
              </div>
            </div>
            <div className="h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg"></div>
          </div>
        </div>
      ),
      stack: [
        { name: "React", color: "bg-blue-500" },
        { name: "D3.js", color: "bg-orange-500" },
        { name: "ClickHouse", color: "bg-yellow-600" },
        { name: "Docker", color: "bg-blue-600" }
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
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-architech-brand-green rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, -12, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
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
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              From Internal Tools to AI-Powered Apps.
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-[#F8F9FA]/80 max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            See how The Architech transforms your vision into production-ready applications with the perfect tech stack for every use case.
          </motion.p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={defaultViewport}
              onMouseEnter={() => setHoveredCard(useCase.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="glass-card rounded-3xl p-6 border border-architech-brand-blue/20 bg-gradient-to-br from-[#00A9FF]/5 to-[#39FF14]/5 relative overflow-hidden h-80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-architech-brand-blue/20">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 relative">
                    <AnimatePresence mode="wait">
                      {hoveredCard === useCase.id ? (
                        <motion.div
                          key="stack"
                          className="absolute inset-0"
                          initial={{ opacity: 0, rotateY: 90 }}
                          animate={{ opacity: 1, rotateY: 0 }}
                          exit={{ opacity: 0, rotateY: -90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-full flex flex-col justify-center">
                            <h4 className="text-sm font-semibold text-architech-brand-blue mb-4 text-center">
                              Module Stack
                            </h4>
                            <div className="space-y-3">
                              {useCase.stack.map((module, idx) => (
                                <motion.div
                                  key={module.name}
                                  className="flex items-center gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className={`w-3 h-3 rounded-full ${module.color}`}></div>
                                  <span className="text-sm text-foreground font-medium">
                                    {module.name}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="visual"
                          className="absolute inset-0"
                          initial={{ opacity: 0, rotateY: -90 }}
                          animate={{ opacity: 1, rotateY: 0 }}
                          exit={{ opacity: 0, rotateY: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          {useCase.visual}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-4 text-center">
                    <motion.div
                      className="inline-flex items-center gap-2 text-xs text-architech-brand-blue/70"
                      animate={{ opacity: hoveredCard === useCase.id ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Hover to see stack</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Capability CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div
            className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-architech-brand-green/20 bg-gradient-to-br from-[#39FF14]/5 to-[#00A9FF]/5 relative overflow-hidden max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                variants={scaleIn}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-architech-brand-green to-architech-brand-blue rounded-full flex items-center justify-center shadow-lg shadow-architech-brand-green/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                variants={fadeInUp}
              >
                Your needs are not here?
              </motion.h3>
              
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed"
                variants={fadeInUp}
              >
                Don't worry, <span className="text-architech-brand-green font-semibold">The Architech can dynamically choose the right technologies</span> for your specific needs.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm sm:text-base"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-green/10 border border-architech-brand-green/20 rounded-full text-architech-brand-green">
                  <span className="w-2 h-2 bg-architech-brand-green rounded-full"></span>
                  <span>IoT & Hardware</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue">
                  <span className="w-2 h-2 bg-architech-brand-blue rounded-full"></span>
                  <span>Blockchain & Web3</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-green/10 border border-architech-brand-green/20 rounded-full text-architech-brand-green">
                  <span className="w-2 h-2 bg-architech-brand-green rounded-full"></span>
                  <span>Real-time Systems</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-architech-brand-blue/10 border border-architech-brand-blue/20 rounded-full text-architech-brand-blue">
                  <span className="w-2 h-2 bg-architech-brand-blue rounded-full"></span>
                  <span>Custom APIs</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseShowcase;
