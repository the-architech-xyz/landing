import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

// Sound effects (optional, muted by default)
const playSound = (soundType: 'typing' | 'snap' | 'transition', volume: number = 0.1) => {
  // Simple Web Audio API sound generation
  if (typeof window !== 'undefined' && window.AudioContext) {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    switch (soundType) {
      case 'typing':
        // Soft keyboard click
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume * 0.1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
      case 'snap':
        // Satisfying snap sound
        const snapOsc = audioContext.createOscillator();
        const snapGain = audioContext.createGain();
        snapOsc.connect(snapGain);
        snapGain.connect(audioContext.destination);
        snapOsc.frequency.setValueAtTime(200, audioContext.currentTime);
        snapOsc.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);
        snapGain.gain.setValueAtTime(0, audioContext.currentTime);
        snapGain.gain.linearRampToValueAtTime(volume * 0.2, audioContext.currentTime + 0.01);
        snapGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
        snapOsc.start(audioContext.currentTime);
        snapOsc.stop(audioContext.currentTime + 0.15);
        break;
      case 'transition':
        // Soft whoosh
        const whooshOsc = audioContext.createOscillator();
        const whooshGain = audioContext.createGain();
        whooshOsc.connect(whooshGain);
        whooshGain.connect(audioContext.destination);
        whooshOsc.frequency.setValueAtTime(100, audioContext.currentTime);
        whooshOsc.frequency.linearRampToValueAtTime(300, audioContext.currentTime + 0.3);
        whooshGain.gain.setValueAtTime(0, audioContext.currentTime);
        whooshGain.gain.linearRampToValueAtTime(volume * 0.05, audioContext.currentTime + 0.1);
        whooshGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
        whooshOsc.start(audioContext.currentTime);
        whooshOsc.stop(audioContext.currentTime + 0.4);
        break;
    }
  }
};

// Extend Window interface for our timeline
declare global {
  interface Window {
    architectureTimeline?: gsap.core.Timeline;
  }
}

const ArchitectsCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [blueprintLines, setBlueprintLines] = useState<string[]>([]);
  const [showModules, setShowModules] = useState(false);
  const [moduleAssembly, setModuleAssembly] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [showCheckmarks, setShowCheckmarks] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [layoutMode, setLayoutMode] = useState<'vertical' | 'horizontal'>('vertical');
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, targetX: number, targetY: number, progress: number}>>([]);
  const [showParticles, setShowParticles] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const techStack = [
    { 
      name: "React (Next.js)", 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 1c-1.5 0-3 .5-4.2 1.4C6.6 3.3 6 4.6 6 6c0 .8.2 1.6.6 2.3L12 12l5.4-3.7c.4-.7.6-1.5.6-2.3 0-1.4-.6-2.7-1.8-3.6C15 1.5 13.5 1 12 1z" fill="#61DAFB"/>
          <path d="M12 23c1.5 0 3-.5 4.2-1.4 1.2-.9 1.8-2.2 1.8-3.6 0-.8-.2-1.6-.6-2.3L12 12l-5.4 3.7c-.4.7-.6 1.5-.6 2.3 0 1.4.6 2.7 1.8 3.6C9 22.5 10.5 23 12 23z" fill="#61DAFB"/>
          <path d="M1 12c0-1.4.6-2.7 1.8-3.6C4 7.5 5.5 7 7 7c.8 0 1.6.2 2.3.6L12 12l-2.7 4.4c-.7.4-1.5.6-2.3.6-1.5 0-3-.5-4.2-1.4C1.6 14.7 1 13.4 1 12z" fill="#61DAFB"/>
          <path d="M23 12c0 1.4-.6 2.7-1.8 3.6C20 16.5 18.5 17 17 17c-.8 0-1.6-.2-2.3-.6L12 12l2.7-4.4c.7-.4 1.5-.6 2.3-.6 1.5 0 3 .5 4.2 1.4C22.4 9.3 23 10.6 23 12z" fill="#61DAFB"/>
        </svg>
      ), 
      color: "from-blue-500 to-cyan-500",
      brandColor: "#61DAFB",
      description: "Modern React framework with server-side rendering"
    },
    { 
      name: "PostgreSQL (Supabase)", 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791"/>
        </svg>
      ), 
      color: "from-teal-500 to-green-500",
      brandColor: "#336791",
      description: "Open source database with real-time capabilities"
    },
    { 
      name: "JWT (Auth.js)", 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#000000"/>
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#FFFFFF"/>
        </svg>
      ), 
      color: "from-green-500 to-emerald-500",
      brandColor: "#000000",
      description: "Secure authentication with JSON Web Tokens"
    },
    { 
      name: "TailwindCSS", 
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="#06B6D4"/>
        </svg>
      ), 
      color: "from-cyan-500 to-teal-500",
      brandColor: "#06B6D4",
      description: "Utility-first CSS framework for rapid UI development"
    }
  ];

  const blueprintContent = [
    "# AI is drafting the blueprint...",
    "stack:",
    "  framework: \"React (Next.js)\"",
    "  database: \"PostgreSQL (Supabase)\"",
    "  auth: \"JWT (Auth.js)\"",
    "  styling: \"TailwindCSS\""
  ];

  const generatedCode = `// Generated dashboard component
import { withAuth } from '@lib/auth';
import { useDatabase } from '@lib/db';
import { Button, Card } from '@lib/ui-components';

function DashboardPage({ user }) {
  const { data: projects } = useDatabase('projects').select('*');

  return (
    <Layout user={user}>
      <h1>Welcome, {user.name}</h1>
      <Button>Create New Project</Button>
    </Layout>
  );
}

export default withAuth(DashboardPage);`;

  // Enhanced typing animation function
  const typeText = (text: string, callback?: () => void, speed: number = 50) => {
    setIsTyping(true);
    setTypingText("");
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1));
        if (soundEnabled) playSound('typing', 0.05);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        if (callback) callback();
      }
    }, speed);
  };

  // Luminous Extraction Particle System (Mobile Optimized)
  const createLuminousExtraction = () => {
    setShowParticles(true);
    const newParticles = [];
    
    // Reduce particles on mobile for better performance
    const particleCount = isMobile ? 6 : 12;
    
    // Create particles from blueprint lines to tech blocks
    for (let i = 0; i < particleCount; i++) {
      const blueprintX = isMobile ? 100 + (i % 3) * 40 : 200 + (i % 4) * 50; // Blueprint area
      const blueprintY = isMobile ? 250 + Math.floor(i / 3) * 25 : 300 + Math.floor(i / 4) * 30;
      
      const techIndex = i % 4;
      const techX = isMobile ? 300 + (techIndex % 2) * 150 : 600 + (techIndex % 2) * 200; // Tech blocks area
      const techY = isMobile ? 350 + Math.floor(techIndex / 2) * 120 : 400 + Math.floor(techIndex / 2) * 150;
      
      newParticles.push({
        id: i,
        x: blueprintX,
        y: blueprintY,
        targetX: techX,
        targetY: techY,
        progress: 0
      });
    }
    
    setParticles(newParticles);
    
    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        progress: Math.min(particle.progress + 0.02, 1),
        x: particle.x + (particle.targetX - particle.x) * 0.05,
        y: particle.y + (particle.targetY - particle.y) * 0.05
      })));
      
      if (newParticles.some(p => p.progress < 1)) {
        requestAnimationFrame(animateParticles);
      } else {
        setTimeout(() => setShowParticles(false), 1000);
      }
    };
    
    requestAnimationFrame(animateParticles);
  };

  // Mobile detection and optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;

    // Create the cinematic timeline (paused by default)
    const tl = gsap.timeline({
      paused: true, // Don't auto-start!
      onComplete: () => {
        setIsPlaying(false);
        setCurrentPhase(4); // Final state
      },
      onUpdate: () => {
        const progress = tl.progress();
        setAnimationProgress(progress);
        if (progress < 0.2) {
          setCurrentPhase(0);
        } else if (progress < 0.4) {
          setCurrentPhase(1);
        } else if (progress < 0.7) {
          setCurrentPhase(2);
        } else if (progress < 0.9) {
          setCurrentPhase(3);
        } else {
          setCurrentPhase(4);
        }
      }
    });

    // Phase 1: Dialogue Initiation (0-4 seconds) - Vertical Chat
    tl.to({}, { duration: 0.5 }) // Brief pause
      .to({}, { 
        duration: 0.1, 
        onUpdate: () => {
          typeText("A collaborative project management app with a modern design system.", undefined, 30);
        }
      }, 0.5)
      .to({}, { duration: 1.5 }) // Pause for reading

    // Phase 2: The Architect's Reflection (4-8 seconds) - Still Vertical Chat
    .to({}, { duration: 0.5 }) // AI thinking
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => {
        setShowBlueprint(true);
        if (soundEnabled) playSound('transition', 0.1);
      }
    }, 4.5)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 1)) 
    }, 4.6)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 2)) 
    }, 4.8)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 3)) 
    }, 5.0)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 4)) 
    }, 5.2)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 5)) 
    }, 5.4)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 6)) 
    }, 5.6)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setBlueprintLines(blueprintContent.slice(0, 7)) 
    }, 5.8)
    .to({}, { duration: 1.2 }) // Pause for reading

    // Phase 3: Visual Construction (8-14 seconds) - TRANSITION TO HORIZONTAL
    .to({}, { duration: 0.5 }) // Setup
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => {
        setLayoutMode('horizontal');
        setShowModules(true);
        createLuminousExtraction(); // Trigger luminous extraction
        if (soundEnabled) playSound('transition', 0.15);
      }
    }, 8.5)
    .to({}, { 
      duration: 3, 
      onUpdate: (progress) => {
        setModuleAssembly(progress);
        if (soundEnabled && progress > 0.3 && progress < 0.4) {
          playSound('snap', 0.1);
        }
      }, 
      ease: "power2.out" 
    }, 8.5)
    .to({}, { duration: 1.5 }) // Pause for viewing

    // Phase 4: Final Delivery (14-20 seconds) - HORIZONTAL TRIPTYCH
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => {
        setShowCode(true);
        if (soundEnabled) playSound('transition', 0.1);
      }
    }, 14.0)
    .to({}, { 
      duration: 0.1, 
      onUpdate: () => setShowCheckmarks(true) 
    }, 14.2)
    .to({}, { duration: 2.8 }) // Final pause

    // Store timeline reference
    window.architectureTimeline = tl;

    return () => {
      if (window.architectureTimeline) {
        window.architectureTimeline.kill();
      }
    };
  }, []);

  const startAnimation = () => {
    if (window.architectureTimeline) {
      // Reset states first
      setTypedText("");
      setShowBlueprint(false);
      setBlueprintLines([]);
      setShowModules(false);
      setModuleAssembly(0);
      setShowCode(false);
      setShowCheckmarks(false);
      setCurrentPhase(0);
      setIsTyping(false);
      setTypingText("");
      setLayoutMode('vertical');
      setParticles([]);
      setShowParticles(false);
      setAnimationProgress(0);
      setHoveredTech(null);
      
      // Start the timeline
      setIsPlaying(true);
      window.architectureTimeline.restart();
    }
  };

  return (
    <section
      ref={containerRef}
      id="architects-canvas"
      className="min-h-screen bg-[#0D1B2A] relative overflow-hidden"
    >
      {/* Enhanced background with subtle architectural patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        {/* Floating architectural elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00A9FF] rounded-full opacity-20"
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
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#39FF14] rounded-full opacity-30"
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
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 ">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A9FF]/10 border border-[#00A9FF]/20 rounded-full text-sm font-medium text-[#00A9FF] mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            The Architecture Session
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-satoshi font-bold text-[#F8F9FA] mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Watch the AI Architect{" "}
            <span className="text-transparent bg-gradient-to-r from-[#00A9FF] to-[#39FF14] bg-clip-text">
              Build Your Vision
            </span>
            <br />
            In Real-Time
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[#F8F9FA]/80 max-w-3xl mx-auto px-4 font-inter"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Experience a live collaboration session with The Architect AI. Watch as your intent transforms 
            into production-ready architecture through intelligent design and seamless automation.
          </motion.p>
        </motion.div>
      </div>

      {/* Cinematic Timeline Container - Added more padding and proper centering */}
      <div 
        ref={timelineRef}
        className="relative w-full max-w-7xl mx-auto px-4" 
        style={{ minHeight: '80vh' }}
      >
        {/* Control Panel - Positioned within timeline container */}
        {!isPlaying && (
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center z-50 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.button
              onClick={startAnimation}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00A9FF] to-[#39FF14] text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 169, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/logo-removebg.png" alt="The Architect" className="h-6 w-6 object-contain" />
              <span>{currentPhase === 4 ? "Restart Session" : "Start Session"}</span>
            </motion.button>
            
            {/* Sound Toggle */}
            {/* <motion.button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                soundEnabled 
                  ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30' 
                  : 'bg-[#F8F9FA]/10 text-[#F8F9FA]/60 border border-[#F8F9FA]/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {soundEnabled ? (
                  <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
              <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
            </motion.button> */}
          </motion.div>
        )}

        <motion.div 
          className="relative flex items-center justify-center" 
          style={{ minHeight: '80vh' }}
          animate={{
            flexDirection: layoutMode === 'vertical' ? 'column' : 'row',
            gap: layoutMode === 'vertical' ? '2rem' : '4rem'
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Phase 1: Dialogue Initiation */}
          <AnimatePresence mode="wait">
            {currentPhase === 0 && (
              <motion.div
                key="phase-1"
                className="w-full max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* AI Message */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00A9FF] to-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00A9FF]/30 overflow-hidden">
                      <img src="/logo-removebg.png" alt="The Architect" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="bg-[#00A9FF]/10 border border-[#00A9FF]/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
                      <div className="text-[#00A9FF] font-semibold mb-3 text-lg">The Architect</div>
                      <div className="text-[#F8F9FA] text-lg">What are we building today?</div>
                    </div>
                  </div>
                </motion.div>

                {/* User Response */}
                <motion.div
                  className="flex items-start gap-4 justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                                     <div className="bg-[#39FF14]/10 border border-[#39FF14]/20 rounded-2xl p-6 backdrop-blur-sm max-w-md shadow-lg">
                     <div className="text-[#39FF14] font-semibold mb-3 text-lg">You</div>
                     <div className="text-[#F8F9FA] font-mono text-lg">
                       {typingText || typedText}
                       {isTyping && <span className="animate-pulse ml-1 text-[#39FF14]">|</span>}
                     </div>
                   </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#00A9FF] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#39FF14]/30 overflow-hidden">
                    <img src="/logo-removebg.png" alt="The Architect" className="w-8 h-8 object-contain" />
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Phase 2: The Architect's Reflection */}
            {currentPhase === 1 && (
              <motion.div
                key="phase-2"
                className="w-full max-w-6xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* AI Response */}
                  <motion.div
                    className="lg:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00A9FF] to-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00A9FF]/30 overflow-hidden">
                        <img src="/logo-removebg.png" alt="The Architect" className="w-8 h-8 object-contain" />
                      </div>
                      <div className="bg-[#00A9FF]/10 border border-[#00A9FF]/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
                        <div className="text-[#00A9FF] font-semibold mb-3 text-lg">The Architect</div>
                        <div className="text-[#F8F9FA] text-lg">Understood. I suggest this architecture. It's built for scale and flexibility.</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Blueprint */}
                  <motion.div
                    className="lg:order-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="glass-card rounded-2xl p-6 border border-[#00A9FF]/20 bg-gradient-to-br from-[#00A9FF]/5 to-[#39FF14]/5 shadow-xl">
                      <div className="bg-[#0D1B2A] rounded-xl p-6 border border-[#00A9FF]/30 font-mono text-sm">
                        {blueprintLines.map((line, index) => (
                          <motion.div
                            key={index}
                            className="text-[#F8F9FA] min-h-[1.5rem]"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            {line.startsWith('#') ? (
                              <span className="text-[#00A9FF]">{line}</span>
                            ) : line.startsWith('stack:') ? (
                              <span className="text-[#00A9FF]">{line}</span>
                            ) : line.includes(':') ? (
                              <>
                                <span className="text-[#00A9FF]">{line.split(':')[0]}:</span>
                                <span className="text-[#39FF14] ml-2">"{line.split(':')[1].trim()}"</span>
                              </>
                            ) : (
                              <span className="text-[#F8F9FA]">{line}</span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Phase 3: Visual Construction */}
            {currentPhase === 2 && (
              <motion.div
                key="phase-3"
                className="w-full max-w-6xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* AI Message */}
                  <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00A9FF] to-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00A9FF]/30 overflow-hidden">
                        <img src="/logo-removebg.png" alt="The Architect" className="w-8 h-8 object-contain" />
                      </div>
                      <div className="bg-[#00A9FF]/10 border border-[#00A9FF]/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
                        <div className="text-[#00A9FF] font-semibold mb-3 text-lg">The Architect</div>
                        <div className="text-[#F8F9FA] text-lg">Perfect. I'm now assembling the best-in-class open-source modules based on this blueprint.</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Module Assembly */}
                  <motion.div
                    className="lg:col-span-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="relative">
                      {/* Central Blueprint Node */}
                      <motion.div
                        className="w-28 h-28 bg-gradient-to-br from-[#00A9FF] to-[#39FF14] rounded-full flex items-center justify-center shadow-2xl shadow-[#00A9FF]/30 mb-8 overflow-hidden"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <img src="/logo-removebg.png" alt="The Architect" className="w-16 h-16 object-contain" />
                      </motion.div>

                                             {/* Tech Modules Grid - 2.5D Assembly (Mobile Optimized) */}
                       <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-8'}`}>
                         {techStack.map((tech, index) => (
                           <motion.div
                             key={tech.name}
                             className="relative group"
                             initial={{ 
                               opacity: 0, 
                               scale: 0, 
                               y: 100,
                               rotateX: -90,
                               z: -50
                             }}
                             animate={{ 
                               opacity: showModules ? 1 : 0, 
                               scale: showModules ? 1 : 0,
                               y: showModules ? 0 : 100,
                               rotateX: showModules ? 0 : -90,
                               z: showModules ? 0 : -50
                             }}
                             transition={{ 
                               delay: index * 0.4, 
                               duration: 0.8, 
                               ease: [0.68, -0.55, 0.265, 1.55],
                               type: "spring",
                               stiffness: 100,
                               damping: 15
                             }}
                             style={{
                               transform: `scale(${1 + moduleAssembly * 0.05}) rotateY(${moduleAssembly * 2}deg)`,
                               transformStyle: "preserve-3d"
                             }}
                           >
                             {/* Connection Line with Glow */}
                             <motion.div
                               className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-[#00A9FF] to-[#39FF14] opacity-60 origin-left shadow-lg shadow-[#00A9FF]/50"
                               initial={{ scaleX: 0, opacity: 0 }}
                               animate={{ 
                                 scaleX: showModules ? 1 : 0,
                                 opacity: showModules ? 0.8 : 0
                               }}
                               transition={{ 
                                 delay: index * 0.4 + 0.3, 
                                 duration: 0.6, 
                                 ease: "easeOut" 
                               }}
                               style={{
                                 transform: `rotate(${index * 90}deg)`,
                                 filter: "blur(0.5px)"
                               }}
                             />
                             
                             {/* Tech Block with 3D Effect and Interactive Tooltip */}
                             <motion.div 
                               className={`bg-gradient-to-br ${tech.color} rounded-xl p-5 text-center shadow-2xl group-hover:scale-105 transition-all duration-300 border border-white/10 cursor-pointer relative`}
                               style={{
                                 background: `linear-gradient(135deg, ${tech.brandColor}20, ${tech.brandColor}40)`,
                                 boxShadow: `0 10px 30px ${tech.brandColor}30, inset 0 1px 0 rgba(255,255,255,0.1)`
                               }}
                               whileHover={{ 
                                 y: -5,
                                 boxShadow: `0 20px 40px ${tech.brandColor}50`,
                                 scale: 1.05
                               }}
                               onHoverStart={() => !isMobile && setHoveredTech(index)}
                               onHoverEnd={() => !isMobile && setHoveredTech(null)}
                               onTap={() => {
                                 if (isMobile) {
                                   setHoveredTech(hoveredTech === index ? null : index);
                                 }
                                 if (soundEnabled) playSound('snap', 0.1);
                               }}
                             >
                               <motion.div 
                                 className="mb-3 text-white"
                                 animate={{ 
                                   rotateY: moduleAssembly * 10,
                                   scale: 1 + moduleAssembly * 0.1
                                 }}
                                 transition={{ duration: 0.3 }}
                               >
                                 {tech.logo}
                               </motion.div>
                               <div className="text-white font-semibold text-sm">{tech.name.split(' ')[0]}</div>
                               
                               {/* Interactive Tooltip (Mobile Optimized) */}
                               {hoveredTech === index && (
                                 <motion.div
                                   className={`absolute ${isMobile ? '-top-24' : '-top-20'} left-1/2 transform -translate-x-1/2 bg-[#0D1B2A] border border-[#00A9FF]/30 rounded-lg ${isMobile ? 'p-2' : 'p-3'} shadow-xl z-50 ${isMobile ? 'min-w-[150px]' : 'min-w-[200px]'}`}
                                   initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                   animate={{ opacity: 1, y: 0, scale: 1 }}
                                   exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                   transition={{ duration: 0.2 }}
                                 >
                                   <div className="text-[#00A9FF] font-semibold text-sm mb-1">{tech.name}</div>
                                   <div className="text-[#F8F9FA]/80 text-xs">{tech.description}</div>
                                   <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0D1B2A] border-r border-b border-[#00A9FF]/30 rotate-45"></div>
                                 </motion.div>
                               )}
                             </motion.div>
                           </motion.div>
                         ))}
                       </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Phase 4: Final Delivery */}
            {currentPhase === 3 && (
              <motion.div
                key="phase-4"
                className="w-full max-w-6xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* AI Final Message */}
                  <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00A9FF] to-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00A9FF]/30 overflow-hidden">
                        <img src="/logo-removebg.png" alt="The Architect" className="w-8 h-8 object-contain" />
                      </div>
                      <div className="bg-[#00A9FF]/10 border border-[#00A9FF]/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
                        <div className="text-[#00A9FF] font-semibold mb-3 text-lg">The Architect</div>
                        <div className="text-[#F8F9FA] text-lg">Architecture complete. Here is your clean, production-ready codebase. You have full ownership.</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Final Triptych */}
                  <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Validated Blueprint */}
                    <motion.div
                      className="glass-card rounded-2xl p-4 border border-[#00A9FF]/20 bg-gradient-to-br from-[#00A9FF]/5 to-[#39FF14]/5 shadow-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="bg-[#0D1B2A] rounded-xl p-4 border border-[#00A9FF]/30 font-mono text-xs">
                        {blueprintContent.map((line, index) => (
                          <motion.div
                            key={index}
                            className="text-[#F8F9FA] min-h-[1.5rem] flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            {line.startsWith('#') ? (
                              <span className="text-[#00A9FF]">{line}</span>
                            ) : line.startsWith('stack:') ? (
                              <>
                                <span className="text-[#00A9FF]">{line}</span>
                                {showCheckmarks && <span className="text-[#39FF14]">✅</span>}
                              </>
                            ) : line.includes(':') ? (
                              <>
                                <span className="text-[#00A9FF]">{line.split(':')[0]}:</span>
                                <span className="text-[#39FF14] ml-2">"{line.split(':')[1].trim()}"</span>
                                {showCheckmarks && <span className="text-[#39FF14] ml-2">✅</span>}
                              </>
                            ) : (
                              <span className="text-[#F8F9FA]">{line}</span>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Generated Code */}
                    <motion.div
                      className="glass-card rounded-2xl p-4 border border-[#00A9FF]/20 bg-gradient-to-br from-[#00A9FF]/5 to-[#39FF14]/5 shadow-xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="bg-[#0D1B2A] rounded-xl p-4 border border-[#00A9FF]/30 font-mono text-xs">
                        <pre className="text-[#F8F9FA] whitespace-pre-wrap">
                          <code>{generatedCode}</code>
                        </pre>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Final State */}
            {currentPhase === 4 && (
              <motion.div
                key="phase-final"
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="w-28 h-28 bg-gradient-to-br from-[#00A9FF] to-[#39FF14] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl overflow-hidden"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                >
                  <img src="/logo-removebg.png" alt="The Architect" className="w-16 h-16 object-contain" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#F8F9FA] mb-3">Session Complete!</h3>
                <p className="text-[#F8F9FA]/80 text-lg">Your architecture has been designed and implemented.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        

      </div>

      {/* Luminous Extraction Particles */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none z-40">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#00A9FF] to-[#39FF14] rounded-full shadow-lg shadow-[#00A9FF]/50"
              style={{
                left: particle.x,
                top: particle.y,
                boxShadow: `0 0 20px ${particle.progress > 0.5 ? '#39FF14' : '#00A9FF'}`
              }}
              animate={{
                scale: [0.5, 1.2, 0.8],
                opacity: [0, 1, 0.8, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* CTA */}
      {/* <motion.div
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00A9FF] to-[#39FF14] text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById("cta");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Start building now</span>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default ArchitectsCanvas; 