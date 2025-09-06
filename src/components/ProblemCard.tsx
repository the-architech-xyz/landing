import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  title: string;
  number: string;
  description: string;
  source: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
  index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  number,
  description,
  source,
  icon: Icon,
  color,
  isActive,
  index
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      x: index % 2 === 0 ? -30 : 30
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      x: 0
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.95,
      x: index % 2 === 0 ? 30 : -30
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: 0.2 
      }
    }
  };

  return (
    <motion.div
      className="w-full"
      variants={cardVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: isActive ? index * 0.1 : 0
      }}
    >
      <div className="glass-card rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm">
        {/* Header with icon and number */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-2xl bg-${color}-500/20 flex items-center justify-center`}>
            <Icon className={`w-6 h-6 text-${color}-500`} />
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">
              Problem {index + 1}
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
          </div>
        </div>

        {/* Large number */}
        <motion.div
          className={`text-6xl font-black text-${color}-500 mb-4`}
          variants={numberVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          {number}
        </motion.div>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Source */}
        <div className="text-sm text-muted-foreground/70">
          <span className="font-medium">Source:</span> {source}
        </div>

        {/* Progress indicator */}
        <div className="mt-6 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index 
                  ? `bg-${color}-500 w-8` 
                  : i < index 
                    ? 'bg-green-500 w-4' 
                    : 'bg-gray-600 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemCard;

