import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedBlueprintProps {
  className?: string;
}

const AnimatedBlueprint = ({ className = "" }: AnimatedBlueprintProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Add CSS animation keyframes for smooth line drawing
    const style = document.createElement('style');
    style.textContent = `
      @keyframes drawLine {
        0% {
          stroke-dashoffset: 1000;
          opacity: 0;
        }
        5% {
          opacity: 0.06;
        }
        15% {
          opacity: 0.08;
        }
        85% {
          opacity: 0.08;
        }
        95% {
          opacity: 0.06;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 0.08;
        }
      }
      
      @keyframes drawLineSlow {
        0% {
          stroke-dashoffset: 1000;
          opacity: 0;
        }
        10% {
          opacity: 0.04;
        }
        20% {
          opacity: 0.06;
        }
        80% {
          opacity: 0.06;
        }
        90% {
          opacity: 0.04;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 0.06;
        }
      }
      
      @keyframes drawLineFade {
        0% {
          stroke-dashoffset: 1000;
          opacity: 0;
        }
        15% {
          opacity: 0.03;
        }
        25% {
          opacity: 0.05;
        }
        75% {
          opacity: 0.05;
        }
        85% {
          opacity: 0.03;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 0.05;
        }
      }
    `;
    document.head.appendChild(style);

    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Main animated blueprint SVG */}
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.4 }}
      >
        {/* Background grid */}
        <defs>
          <pattern id="blueprintGrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgb(0, 169, 255)" strokeWidth="0.1" opacity="0.03"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
        
        {/* Main architectural structure - interlocking rectangles */}
        <rect
          x="10"
          y="15"
          width="25"
          height="35"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.5"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.08"
          style={{
            animation: "drawLine 8s ease-in-out 0s infinite",
            animationFillMode: "forwards"
          }}
        />
        <rect
          x="65"
          y="15"
          width="25"
          height="35"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.5"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.08"
          style={{
            animation: "drawLine 8s ease-in-out 2s infinite",
            animationFillMode: "forwards"
          }}
        />
        <rect
          x="37.5"
          y="60"
          width="25"
          height="20"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.5"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.08"
          style={{
            animation: "drawLine 6s ease-in-out 4s infinite",
            animationFillMode: "forwards"
          }}
        />
        
        {/* Connection lines */}
        <line
          x1="35"
          y1="32.5"
          x2="65"
          y2="32.5"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.3"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.06"
          style={{
            animation: "drawLine 4s ease-in-out 6s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="60"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.3"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.06"
          style={{
            animation: "drawLine 3s ease-in-out 7s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="35"
          y1="32.5"
          x2="50"
          y2="60"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.3"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.06"
          style={{
            animation: "drawLine 4s ease-in-out 8s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="65"
          y1="32.5"
          x2="50"
          y2="60"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.3"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.06"
          style={{
            animation: "drawLine 4s ease-in-out 9s infinite",
            animationFillMode: "forwards"
          }}
        />
        
        {/* Additional architectural elements */}
        <rect
          x="5"
          y="5"
          width="12"
          height="8"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.4"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.06"
          style={{
            animation: "drawLine 5s ease-in-out 10s infinite",
            animationFillMode: "forwards"
          }}
        />
        <rect
          x="83"
          y="5"
          width="12"
          height="8"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.4"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.06"
          style={{
            animation: "drawLine 5s ease-in-out 11s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="11"
          y1="13"
          x2="22.5"
          y2="22.5"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.2"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.05"
          style={{
            animation: "drawLine 3s ease-in-out 12s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="89"
          y1="13"
          x2="77.5"
          y2="22.5"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.2"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.05"
          style={{
            animation: "drawLine 3s ease-in-out 13s infinite",
            animationFillMode: "forwards"
          }}
        />
        
        {/* Grid lines for blueprint feel - using different animation styles */}
        <line
          x1="0"
          y1="25"
          x2="100"
          y2="25"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.03"
          style={{
            animation: "drawLineSlow 15s ease-in-out 14s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.03"
          style={{
            animation: "drawLineSlow 15s ease-in-out 15s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="0"
          y1="75"
          x2="100"
          y2="75"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.03"
          style={{
            animation: "drawLineSlow 15s ease-in-out 16s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="25"
          y1="0"
          x2="25"
          y2="100"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.03"
          style={{
            animation: "drawLineSlow 15s ease-in-out 17s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.03"
          style={{
            animation: "drawLineSlow 15s ease-in-out 18s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="75"
          y1="0"
          x2="75"
          y2="100"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.03"
          style={{
            animation: "drawLineSlow 15s ease-in-out 19s infinite",
            animationFillMode: "forwards"
          }}
        />
        
        {/* Additional architectural details */}
        <circle
          cx="22.5"
          cy="32.5"
          r="1"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.2"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.04"
          style={{
            animation: "drawLineFade 8s ease-in-out 20s infinite",
            animationFillMode: "forwards"
          }}
        />
        <circle
          cx="77.5"
          cy="32.5"
          r="1"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.2"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.04"
          style={{
            animation: "drawLineFade 8s ease-in-out 21s infinite",
            animationFillMode: "forwards"
          }}
        />
        <circle
          cx="50"
          cy="70"
          r="1.5"
          fill="none"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.2"
          strokeDasharray="1000 1000"
          strokeDashoffset="1000"
          opacity="0.04"
          style={{
            animation: "drawLineFade 8s ease-in-out 22s infinite",
            animationFillMode: "forwards"
          }}
        />
        
        {/* Architectural dimension lines */}
        <line
          x1="5"
          y1="5"
          x2="17"
          y2="5"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="2 1"
          opacity="0.02"
          style={{
            animation: "drawLineFade 10s ease-in-out 23s infinite",
            animationFillMode: "forwards"
          }}
        />
        <line
          x1="83"
          y1="5"
          x2="95"
          y2="5"
          stroke="rgb(0, 169, 255)"
          strokeWidth="0.1"
          strokeDasharray="2 1"
          opacity="0.02"
          style={{
            animation: "drawLineFade 10s ease-in-out 24s infinite",
            animationFillMode: "forwards"
          }}
        />
      </svg>
      
      {/* Additional subtle grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 169, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 169, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Floating architectural elements with more subtle movement */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-architech-brand-blue rounded-full"
        animate={{
          y: [0, -8, 0],
          x: [0, 4, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-architech-brand-green rounded-full"
        animate={{
          y: [0, -6, 0],
          x: [0, -3, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-architech-brand-blue rounded-full"
        animate={{
          y: [0, -4, 0],
          x: [0, 2, 0],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default AnimatedBlueprint;
