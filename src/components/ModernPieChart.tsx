import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PieChartData {
  label: string;
  percentage: number;
  color: string;
  description: string;
}

interface ModernPieChartProps {
  data: PieChartData[];
  className?: string;
}

const ModernPieChart: React.FC<ModernPieChartProps> = ({ data, className = "" }) => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  // Calculate the conic gradient
  const gradientStops = data.reduce((acc, item, index) => {
    const startAngle = acc.totalPercentage;
    const endAngle = startAngle + item.percentage;
    
    acc.stops.push(`${item.color} ${startAngle}% ${endAngle}%`);
    acc.totalPercentage = endAngle;
    
    return acc;
  }, { stops: [] as string[], totalPercentage: 0 });

  const conicGradient = `conic-gradient(from 0deg, ${gradientStops.stops.join(', ')})`;

  return (
    <div className={`relative ${className}`}>
      {/* Main Pie Chart */}
      <motion.div
        className="relative w-80 h-80 mx-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer glow effect */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-30"
          style={{
            background: conicGradient,
            transform: 'scale(1.1)',
          }}
        />
        
        {/* Main pie chart */}
        <div
          className="w-full h-full rounded-full relative cursor-pointer"
          style={{
            background: conicGradient,
            boxShadow: `
              0 25px 50px rgba(0, 0, 0, 0.25),
              inset 0 0 0 3px rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05)
            `,
            transform: 'rotateX(20deg) rotateY(10deg)',
            transformStyle: 'preserve-3d',
          }}
          onMouseEnter={() => setHoveredSegment('Innovation Tax')}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          {/* Inner hole for donut effect */}
          <div
            className="absolute inset-8 rounded-full bg-architech-section-dark"
            style={{
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
            }}
          />
          
          {/* 3D depth shadow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
              transform: 'translateZ(-10px)',
            }}
          />
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="text-4xl font-black text-foreground mb-2"
              animate={{ scale: hoveredSegment ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              52
            </motion.div>
            <div className="text-sm text-muted-foreground font-medium">
              Minutes
            </div>
            <div className="text-xs text-muted-foreground/70 mt-1">
              Actual Coding
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hover tooltip */}
      {hoveredSegment && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="glass-card rounded-xl p-4 border border-muted-foreground/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
            <div className="text-sm font-medium text-foreground mb-1">
              Innovation Tax
            </div>
            <div className="text-xs text-muted-foreground">
              70% of developer time lost to setup, config, and technical debt
            </div>
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-muted-foreground/20" />
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-8 space-y-3">
        {data.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/2 border border-muted-foreground/10"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {item.description}
              </div>
            </div>
            <div className="text-sm font-bold text-foreground">
              {item.percentage}%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ModernPieChart;