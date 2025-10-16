import { Github, Linkedin, Twitter, MapPin, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, defaultViewport, floating } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";

const TeamSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="team" className="py-24 bg-architech-section-light relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-10 right-10 w-20 h-20 bg-primary opacity-10 blur-xl"
        animate={floating}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-creative opacity-10 blur-xl"
        animate={{ ...floating, transition: { ...floating.transition, delay: 1.5 } }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 border border-architech-electric/20 text-sm font-medium text-architech-electric mb-8"
            variants={scaleIn}
          >
            <Code className="h-4 w-4" />
            {t('team.badge')}
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            variants={fadeInUp}
          >
            {t('team.title.line1')}{" "}
            <span className="text-transparent bg-gradient-brand bg-clip-text">
              {t('team.title.line2')}
            </span>
            <br />
            {t('team.title.line3')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {t('team.subtitle')}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {/* Photo */}
            <motion.div 
              className="relative group"
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-square overflow-hidden relative shadow-2xl shadow-electric-blue/20 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <motion.img
                  src={"/me.jpg"}
                  alt={t('common.alt.founder')}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">{t('team.founder.name')}</h3>
                  <p className="text-base md:text-lg text-white/80">{t('team.founder.title')}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
                    <span className="text-sm text-white/70">{t('team.founder.status')}</span>
                  </div>
                </div>
              </div>
              
              {/* Real LinkedIn link only */}
              <motion.div 
                className="absolute -top-4 -right-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/antoinesrvt/" // Updated with real LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card flex items-center justify-center text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:shadow-glow group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="space-y-6"
              variants={fadeInRight}
            >
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-foreground mb-2"
                  whileHover={{ color: "hsl(var(--architech-electric))" }}
                  transition={{ duration: 0.3 }}
                >
                  {t('team.story.title')}
                </motion.h3>
                
                <motion.div 
                  className="flex items-center gap-2 text-muted-foreground mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <MapPin className="h-4 w-4" />
                  <span>{t('team.founder.location')}</span>
                </motion.div>
              </div>

              <motion.div 
                className="space-y-4 prose prose-lg prose-invert text-muted-foreground max-w-none"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                  dangerouslySetInnerHTML={{ __html: t('team.story.paragraph1') }}
                />
                
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                >
                  {t('team.story.paragraph2')}
                </motion.p>

                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                  dangerouslySetInnerHTML={{ __html: t('team.story.paragraph3') }}
                />
                
                <motion.p 
                  className="leading-relaxed"
                  variants={fadeInUp}
                  dangerouslySetInnerHTML={{ __html: t('team.story.paragraph4') }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <motion.div 
            className="max-w-2xl mx-auto glass-card p-8 border border-architech-border hover:border-architech-electric/50 transition-all duration-500 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-4 group-hover:text-architech-electric transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('team.mission.title')}
            </motion.h3>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('team.mission.description')}
            </motion.p>
            
            <motion.div 
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-architech-electric/10 text-sm text-architech-electric font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Zap className="h-4 w-4" />
              <span>{t('team.mission.tagline')}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 