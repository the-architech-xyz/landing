import { Zap, TrendingUp, Target, Clock, AlertTriangle, BarChart3, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ModernPieChart from "./ModernPieChart";
import { useScrollTriggerGSAP } from "@/hooks/useScrollTriggerGSAP";
import { useTranslation } from "@/hooks/useTranslation";

// Desktop Sticky Scroll Component
const DesktopStickyScroll = ({ innovationTaxCards, pieChartData, t }: { innovationTaxCards: any[], pieChartData: any[], t: any }) => {
  const { containerRef, stickyRef, setContentRef, activeIndex } = useScrollTriggerGSAP();
  
  return (
    <section
      ref={containerRef}
      className="bg-architech-section-dark relative overflow-hidden"
      style={{ height: "220vh", minHeight: "220vh" }}
    >
      <div
        className="sticky-wrapper"
        style={{ height: "100vh", position: "sticky", top: "5vh" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            ref={stickyRef}
            className="grid lg:grid-cols-2 gap-16 items-center h-[90vh]"
          >
            {/* Left Side - Content Cards */}
            <div className="relative h-full">
              <div className="tabs-content-container h-full">
                {innovationTaxCards.map((card, index) => (
                  <div
                    key={index}
                    ref={setContentRef(index)}
                    className="tabs-content"
                  >
                    <div className="space-y-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-${card.color}-500/20 flex items-center justify-center`}
                        >
                          {(() => {
                            const IconComponent = card.icon;
                            return (
                              <IconComponent
                                className={`w-8 h-8 text-${card.color}-500`}
                              />
                            );
                          })()}
                        </div>
                        <div>
                         
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            {t("benefits.innovationTax.titleHighlight")}{" "}
                            {index + 1}
                          </div>
                          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-4">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-center space-y-6">
                      {/* Large Number */}
                      <div className="relative">
                        <div
                          className={`text-9xl font-black text-${card.color}-500 mb-2`}
                        >
                          {card.number}
                        </div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      </div>

                      {/* Source */}
                      <div className="glass-card rounded-xl p-4 border border-muted-foreground/20 bg-gradient-to-br from-white/5 to-white/2">
                        <div className="text-sm text-muted-foreground/70">
                          <span className="font-medium">
                            {t("common.source")}
                          </span>{" "}
                          {card.source}
                        </div>
                      </div>

                      {/* Progress Dots */}
                      <div className="flex justify-center gap-2">
                        {innovationTaxCards.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === index
                                ? `bg-${card.color}-500 w-8`
                                : i < index
                                ? "bg-green-500"
                                : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual (Pie Chart) - Static */}
            <div className="relative h-full flex items-center justify-center">
              <ModernPieChart data={pieChartData} className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && mobileCardIndex < innovationTaxCards.length - 1) {
      setMobileCardIndex(mobileCardIndex + 1);
    }
    if (isRightSwipe && mobileCardIndex > 0) {
      setMobileCardIndex(mobileCardIndex - 1);
    }
  };

  // Create refs and state for both mobile and desktop
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const setContentRef = () => {}; // No-op for mobile

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const innovationTaxCards = [
    {
      icon: Clock,
      number: t('benefits.innovationTax.components.setupTax.statistic'),
      title: t('benefits.innovationTax.components.setupTax.title'),
      description: t('benefits.innovationTax.components.setupTax.description'),
      source: "Industry Research",
      color: "red"
    },
    {
      icon: AlertTriangle,
      number: t('benefits.innovationTax.components.technicalDebtTax.statistic'),
      title: t('benefits.innovationTax.components.technicalDebtTax.title'),
      description: t('benefits.innovationTax.components.technicalDebtTax.description'),
      source: "Stripe / Chalmers University",
      color: "orange"
    },
    {
      icon: BarChart3,
      number: t('benefits.innovationTax.components.aiSupervisionTax.statistic'),
      title: t('benefits.innovationTax.components.aiSupervisionTax.title'),
      description: t('benefits.innovationTax.components.aiSupervisionTax.description'),
      source: "AI Research Institute",
      color: "purple"
    }
  ];


  const solutionStats = [
    {
      icon: TrendingUp,
      metric: "2-3x",
      title: t('benefits.solutions.instantGeneration.title'),
      description: t('benefits.solutions.instantGeneration.description'),
      color: "green"
    },
    {
      icon: Target,
      metric: "41%",
      title: t('benefits.solutions.fullStackReady.title'),
      description: t('benefits.solutions.fullStackReady.description'),
      color: "blue"
    },
    {
      icon: Zap,
      metric: "100%",
      title: t('benefits.solutions.enterpriseGrade.title'),
      description: t('benefits.solutions.enterpriseGrade.description'),
      color: "purple"
    }
  ];

  const pieChartData = [
    {
      label: t('benefits.chart.innovationTax'),
      percentage: 70,
      color: "#ef4444",
      description: t('benefits.chart.innovationTaxDesc')
    },
    {
      label: t('benefits.chart.actualCoding'),
      percentage: 30,
      color: "#22c55e",
      description: t('benefits.chart.actualCodingDesc')
    }
  ];


  return (
    <section id="benefits">
      {/* Header Section */}
      <section className="py-16 sm:py-24 bg-architech-section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <motion.h2
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-satoshi font-bold text-foreground leading-tight tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t("benefits.innovationTax.title")}{" "}
          <span className="text-transparent bg-gradient-to-r from-architech-brand-blue to-architech-brand-green bg-clip-text">
            {t("benefits.innovationTax.titleHighlight")}
          </span>
        </motion.h2>  
      </section>

      {/* Sticky Scroll Section - Desktop / Mobile Carousel */}
      {isMobile ? (
        /* Mobile Carousel Version */
        <section className="bg-architech-section-dark relative overflow-hidden py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="space-y-8">
              {/* Mobile Card with Swipe Support */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="touch-pan-y select-none"
              >
                {/* Swipe Indicator */}
                {/* <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronLeft className="w-4 h-4" />
                    <span>{t('common.swipeToNavigate')}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div> */}
                <motion.div
                  key={mobileCardIndex}
                  className="glass-card rounded-3xl p-8 border border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center space-y-6">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-${innovationTaxCards[mobileCardIndex].color}-500/20 flex items-center justify-center`}
                      >
                        {(() => {
                          const IconComponent =
                            innovationTaxCards[mobileCardIndex].icon;
                          return (
                            <IconComponent
                              className={`w-8 h-8 text-${innovationTaxCards[mobileCardIndex].color}-500`}
                            />
                          );
                        })()}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          {t("benefits.innovationTax.title")}{" "}
                          {mobileCardIndex + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {innovationTaxCards[mobileCardIndex].title}
                        </h3>
                      </div>
                    </div>

                    {/* Large Number */}
                    <div className="relative">
                      <div
                        className={`text-6xl font-black text-${innovationTaxCards[mobileCardIndex].color}-500 mb-2`}
                      >
                        {innovationTaxCards[mobileCardIndex].number}
                      </div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {innovationTaxCards[mobileCardIndex].description}
                    </p>

                    {/* Source */}
                    <div className="glass-card rounded-xl p-4 border border-muted-foreground/20 bg-gradient-to-br from-white/5 to-white/2">
                      <div className="text-sm text-muted-foreground/70">
                        <span className="font-medium">
                          {t("common.source")}
                        </span>{" "}
                        {innovationTaxCards[mobileCardIndex].source}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() =>
                    setMobileCardIndex(Math.max(0, mobileCardIndex - 1))
                  }
                  disabled={mobileCardIndex === 0}
                  className="w-12 h-12 rounded-full bg-architech-brand-blue/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6 text-architech-brand-blue" />
                </button>

                {/* Progress Dots */}
                <div className="flex gap-2">
                  {innovationTaxCards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMobileCardIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === mobileCardIndex
                          ? "bg-architech-brand-blue w-8"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setMobileCardIndex(
                      Math.min(
                        innovationTaxCards.length - 1,
                        mobileCardIndex + 1
                      )
                    )
                  }
                  disabled={mobileCardIndex === innovationTaxCards.length - 1}
                  className="w-12 h-12 rounded-full bg-architech-brand-blue/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6 text-architech-brand-blue" />
                </button>
              </div>

              {/* Mobile Pie Chart */}
              <div className="flex justify-center">
                <ModernPieChart data={pieChartData} className="mx-auto" />
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Desktop Sticky Scroll Version */
        <DesktopStickyScroll
          innovationTaxCards={innovationTaxCards}
          pieChartData={pieChartData}
          t={t}
        />
      )}

      {/* Solution Section */}
      <section className="py-12 sm:py-24 bg-architech-section-dark relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t("benefits.solution.title")}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {t("benefits.solution.description")}
            </p>
          </div>

          {/* Proof of Gain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutionStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                className="glass-card rounded-2xl p-8 border border-muted-foreground/20 bg-gradient-to-br from-white/5 to-white/2 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: `var(--${stat.color}-500)`,
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--${stat.color}-500/20)`,
                }}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-${stat.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${stat.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                  </div>

                  {/* Metric */}
                  <div
                    className={`text-4xl font-black text-${stat.color}-500 mb-3 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {stat.metric}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-foreground/90 transition-colors duration-300">
                    {stat.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Progress indicator */}
                  {/* <div className="mt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 bg-${stat.color}-500 rounded-full animate-pulse`} />
                      <span className="text-xs text-muted-foreground font-medium">{t('common.provenResults')}</span>
                    </div>
                    <div className={`w-full h-1 bg-${stat.color}-500/20 rounded-full overflow-hidden`}>
            <motion.div
                        className={`h-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
        </div>
      </section>
    </section>
  );
};

export default BenefitsSection;