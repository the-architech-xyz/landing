import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedBlueprintProps {
  className?: string;
}

const AnimatedBlueprint = ({ className = "" }: AnimatedBlueprintProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Blueprint elements
    const elements = [
      // Main structure
      {
        type: "rect",
        x: 0.1,
        y: 0.2,
        width: 0.3,
        height: 0.4,
        label: "Frontend",
        delay: 0
      },
      {
        type: "rect",
        x: 0.6,
        y: 0.2,
        width: 0.3,
        height: 0.4,
        label: "Backend",
        delay: 0.5
      },
      {
        type: "rect",
        x: 0.35,
        y: 0.7,
        width: 0.3,
        height: 0.2,
        label: "Database",
        delay: 1
      },
      // Connection lines
      {
        type: "line",
        from: { x: 0.4, y: 0.4 },
        to: { x: 0.6, y: 0.4 },
        delay: 1.5
      },
      {
        type: "line",
        from: { x: 0.5, y: 0.6 },
        to: { x: 0.5, y: 0.7 },
        delay: 2
      },
      {
        type: "line",
        from: { x: 0.4, y: 0.4 },
        to: { x: 0.5, y: 0.7 },
        delay: 2.5
      },
      {
        type: "line",
        from: { x: 0.6, y: 0.4 },
        to: { x: 0.5, y: 0.7 },
        delay: 3
      },
      // Additional architectural elements
      {
        type: "rect",
        x: 0.05,
        y: 0.05,
        width: 0.15,
        height: 0.1,
        label: "Auth",
        delay: 3.5
      },
      {
        type: "rect",
        x: 0.8,
        y: 0.05,
        width: 0.15,
        height: 0.1,
        label: "API",
        delay: 4
      },
      {
        type: "line",
        from: { x: 0.125, y: 0.15 },
        to: { x: 0.25, y: 0.25 },
        delay: 4.5
      },
      {
        type: "line",
        from: { x: 0.875, y: 0.15 },
        to: { x: 0.75, y: 0.25 },
        delay: 5
      }
    ];

    let animationId: number;
    let startTime = Date.now();

    const draw = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      const canvasRect = canvas.getBoundingClientRect();
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
      
      // Set drawing style
      ctx.strokeStyle = "rgba(0, 169, 255, 0.15)"; // Very subtle blue
      ctx.fillStyle = "rgba(57, 255, 20, 0.1)"; // Very subtle green
      ctx.lineWidth = 1;
      ctx.font = "10px monospace";
      ctx.textAlign = "center";

      // Draw elements based on timing
      elements.forEach((element) => {
        const progress = Math.max(0, Math.min(1, (currentTime - element.delay) / 2));
        
        if (progress > 0) {
          const x = element.x * canvasRect.width;
          const y = element.y * canvasRect.height;
          const width = element.width * canvasRect.width;
          const height = element.height * canvasRect.height;

          ctx.globalAlpha = progress * 0.6; // Fade in effect

          if (element.type === "rect") {
            // Draw rectangle
            ctx.strokeRect(x, y, width, height);
            
            // Draw label
            ctx.fillStyle = "rgba(0, 169, 255, 0.3)";
            ctx.fillText(
              element.label,
              x + width / 2,
              y + height / 2 + 3
            );
            ctx.fillStyle = "rgba(57, 255, 20, 0.1)";
          } else if (element.type === "line") {
            // Draw line
            ctx.beginPath();
            ctx.moveTo(element.from.x * canvasRect.width, element.from.y * canvasRect.height);
            ctx.lineTo(element.to.x * canvasRect.width, element.to.y * canvasRect.height);
            ctx.stroke();
          }
        }
      });

      // Reset alpha
      ctx.globalAlpha = 1;

      // Continue animation
      animationId = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.3 }}
      />
      
      {/* Additional subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 169, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 169, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Floating architectural elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-architech-brand-blue rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-architech-brand-green rounded-full opacity-30"
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-1 h-1 bg-architech-brand-blue rounded-full opacity-25"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default AnimatedBlueprint;
