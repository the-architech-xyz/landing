import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "@/hooks/useTranslation";
import { Download, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const LightPaper = () => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      // Create a hidden iframe for PDF generation
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${t('lightPaper.title')}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #1a1a1a;
              background: #ffffff;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
            }
            
            .header {
              text-align: center;
              margin-bottom: 60px;
              padding-bottom: 40px;
              border-bottom: 3px solid #00A9FF;
            }
            
            .title {
              font-size: 48px;
              font-weight: 800;
              color: #1a1a1a;
              margin-bottom: 20px;
              line-height: 1.2;
            }
            
            .subtitle {
              font-size: 24px;
              color: #666666;
              font-weight: 400;
              max-width: 600px;
              margin: 0 auto;
            }
            
            .section {
              margin-bottom: 50px;
            }
            
            .section-title {
              font-size: 32px;
              font-weight: 700;
              color: #00A9FF;
              margin-bottom: 25px;
              padding-bottom: 10px;
              border-bottom: 2px solid #39FF14;
            }
            
            .section-content {
              font-size: 16px;
              color: #333333;
              margin-bottom: 20px;
              text-align: justify;
            }
            
            .architecture-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin: 30px 0;
            }
            
            .architecture-card {
              border: 2px solid #00A9FF;
              border-radius: 12px;
              padding: 20px;
              background: linear-gradient(135deg, #00A9FF10, #39FF1410);
            }
            
            .architecture-card-title {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 15px;
              display: flex;
              align-items: center;
            }
            
            .architecture-card-title::before {
              content: "■";
              color: #39FF14;
              font-size: 20px;
              margin-right: 10px;
            }
            
            .architecture-card-content {
              font-size: 14px;
              color: #555555;
              line-height: 1.5;
            }
            
            .result-box {
              background: linear-gradient(135deg, #00A9FF10, #39FF1410);
              border: 2px solid #00A9FF;
              border-radius: 12px;
              padding: 25px;
              margin: 30px 0;
              text-align: center;
            }
            
            .result-text {
              font-size: 18px;
              font-weight: 600;
              color: #1a1a1a;
            }
            
            .use-cases-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin: 30px 0;
            }
            
            .use-case-card {
              border: 2px solid #00A9FF;
              border-radius: 12px;
              padding: 20px;
              background: linear-gradient(135deg, #00A9FF10, #39FF1410);
            }
            
            .use-case-title {
              font-size: 20px;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 15px;
            }
            
            .use-case-description {
              font-size: 14px;
              color: #555555;
              margin-bottom: 15px;
              line-height: 1.5;
            }
            
            .use-case-stack {
              font-size: 12px;
              color: #666666;
              margin-bottom: 10px;
              font-weight: 600;
            }
            
            .use-case-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }
            
            .use-case-tag {
              background: #00A9FF20;
              color: #00A9FF;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 11px;
              font-weight: 500;
              border: 1px solid #00A9FF40;
            }
            
            .cta-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              margin: 30px 0;
            }
            
            .cta-card {
              border: 2px solid #00A9FF;
              border-radius: 12px;
              padding: 25px;
              text-align: center;
              background: linear-gradient(135deg, #00A9FF10, #39FF1410);
            }
            
            .cta-title {
              font-size: 18px;
              font-weight: 700;
              color: #1a1a1a;
              margin-bottom: 15px;
            }
            
            .cta-button {
              background: linear-gradient(135deg, #00A9FF, #39FF14);
              color: white;
              padding: 12px 24px;
              border: none;
              border-radius: 8px;
              font-weight: 600;
              font-size: 14px;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
            }
            
            .footer {
              text-align: center;
              margin-top: 60px;
              padding-top: 40px;
              border-top: 2px solid #00A9FF;
              color: #666666;
              font-size: 14px;
            }
            
            .page-break {
              page-break-before: always;
            }
            
            @media print {
              body {
                padding: 20px;
              }
              
              .page-break {
                page-break-before: always;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="title">${t('lightPaper.title')}</h1>
            <p class="subtitle">${t('lightPaper.subtitle')}</p>
          </div>

          <div class="section">
            <h2 class="section-title">${t('lightPaper.sections.digitalParadox.title')}</h2>
            <div class="section-content">
              ${t('lightPaper.sections.digitalParadox.content').split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">${t('lightPaper.sections.innovationTax.title')}</h2>
            <div class="section-content">
              ${t('lightPaper.sections.innovationTax.content').split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">${t('lightPaper.sections.aiMirage.title')}</h2>
            <div class="section-content">
              ${t('lightPaper.sections.aiMirage.content').split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">${t('lightPaper.sections.softwareSupplyChain.title')}</h2>
            <div class="section-content">
              ${t('lightPaper.sections.softwareSupplyChain.content').split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>

            <div class="architecture-grid">
              <div class="architecture-card">
                <div class="architecture-card-title">${t('lightPaper.sections.softwareSupplyChain.adapters.title')}</div>
                <div class="architecture-card-content">${t('lightPaper.sections.softwareSupplyChain.adapters.description')}</div>
              </div>
              <div class="architecture-card">
                <div class="architecture-card-title">${t('lightPaper.sections.softwareSupplyChain.integrators.title')}</div>
                <div class="architecture-card-content">${t('lightPaper.sections.softwareSupplyChain.integrators.description')}</div>
              </div>
              <div class="architecture-card">
                <div class="architecture-card-title">${t('lightPaper.sections.softwareSupplyChain.assemblyPlant.title')}</div>
                <div class="architecture-card-content">${t('lightPaper.sections.softwareSupplyChain.assemblyPlant.description')}</div>
              </div>
            </div>

            <div class="result-box">
              <div class="result-text">${t('lightPaper.sections.softwareSupplyChain.result')}</div>
            </div>
          </div>

          <div class="section page-break">
            <h2 class="section-title">${t('lightPaper.sections.useCases.title')}</h2>
            <div class="section-content">
              <p>${t('lightPaper.sections.useCases.subtitle')}</p>
            </div>

            <div class="use-cases-grid">
              ${[
                {
                  title: t('lightPaper.sections.useCases.aiWriting.title'),
                  description: t('lightPaper.sections.useCases.aiWriting.description'),
                  stack: Array.isArray(t('lightPaper.sections.useCases.aiWriting.stack')) ? t('lightPaper.sections.useCases.aiWriting.stack') : []
                },
                {
                  title: t('lightPaper.sections.useCases.ecommerce.title'),
                  description: t('lightPaper.sections.useCases.ecommerce.description'),
                  stack: Array.isArray(t('lightPaper.sections.useCases.ecommerce.stack')) ? t('lightPaper.sections.useCases.ecommerce.stack') : []
                },
                {
                  title: t('lightPaper.sections.useCases.dashboard.title'),
                  description: t('lightPaper.sections.useCases.dashboard.description'),
                  stack: Array.isArray(t('lightPaper.sections.useCases.dashboard.stack')) ? t('lightPaper.sections.useCases.dashboard.stack') : []
                }
              ].map(useCase => `
                <div class="use-case-card">
                  <div class="use-case-title">${useCase.title}</div>
                  <div class="use-case-description">${useCase.description}</div>
                  <div class="use-case-stack">Stack Used:</div>
                  <div class="use-case-tags">
                    ${Array.isArray(useCase.stack) ? useCase.stack.map(tech => `<span class="use-case-tag">${tech}</span>`).join('') : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">${t('lightPaper.sections.humanBenefit.title')}</h2>
            <div class="section-content">
              ${t('lightPaper.sections.humanBenefit.content').split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="section">
            <h2 class="section-title">${t('lightPaper.sections.founder.title')}</h2>
            <div class="section-content">
              ${t('lightPaper.sections.founder.content').split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="section page-break">
            <h2 class="section-title">${t('lightPaper.sections.startBuilding.title')}</h2>
            <div class="section-content">
              <p>${t('lightPaper.sections.startBuilding.content')}</p>
            </div>

            <div class="cta-grid">
              <div class="cta-card">
                <div class="cta-title">${t('lightPaper.sections.startBuilding.builders')}</div>
                <a href="#" class="cta-button">${t('lightPaper.actions.tryCli')}</a>
              </div>
              <div class="cta-card">
                <div class="cta-title">${t('lightPaper.sections.startBuilding.architects')}</div>
                <a href="#" class="cta-button">${t('lightPaper.actions.joinCommunity')}</a>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #666666; margin-bottom: 15px;">${t('lightPaper.sections.startBuilding.whitepaper')}</p>
              <a href="#" class="cta-button">${t('lightPaper.actions.readWhitepaper')}</a>
            </div>
          </div>

          <div class="footer">
            <p>© 2024 Architech. All rights reserved.</p>
          </div>
        </body>
        </html>
      `;

      // Write content to iframe
      iframe.contentDocument?.write(htmlContent);
      iframe.contentDocument?.close();

      // Wait for content to load, then trigger download
      iframe.onload = () => {
        setTimeout(() => {
          // Create a blob with the HTML content
          const blob = new Blob([htmlContent], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          
          // Create a temporary link and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.download = 'architech-lightpaper.html';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Clean up
          URL.revokeObjectURL(url);
          document.body.removeChild(iframe);
        }, 1000);
      };

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Title Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="inline-block rounded-md px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider mb-4">
              WHITEPAPER
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t('lightPaper.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('lightPaper.subtitle')}
            </p>
            <Button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="bg-primary hover:bg-primary/90 text-white transition-colors mt-6"
              size="lg"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  {t('lightPaper.actions.downloadPdf')}
                </>
              )}
            </Button>
          </motion.div>

          {/* Section 1: Digital Paradox */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.digitalParadox.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.digitalParadox.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Section 2: Innovation Tax */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.innovationTax.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.innovationTax.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Section 3: AI Mirage */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.aiMirage.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.aiMirage.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Section 4: Software Supply Chain */}
          <motion.section variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.softwareSupplyChain.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.softwareSupplyChain.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Architecture Components */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Adapters */}
              <Card className="border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-architech-brand-green to-architech-brand-blue rounded-full mr-3"></div>
                    <h3 className="text-lg font-satoshi font-bold text-foreground">
                      {t('lightPaper.sections.softwareSupplyChain.adapters.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('lightPaper.sections.softwareSupplyChain.adapters.description')}
                  </p>
                </CardContent>
              </Card>

              {/* Integrators */}
              <Card className="border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-architech-brand-blue to-architech-brand-green rounded-full mr-3"></div>
                    <h3 className="text-lg font-satoshi font-bold text-foreground">
                      {t('lightPaper.sections.softwareSupplyChain.integrators.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('lightPaper.sections.softwareSupplyChain.integrators.description')}
                  </p>
                </CardContent>
              </Card>

              {/* Assembly Plant */}
              <Card className="border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-architech-brand-green to-architech-brand-blue rounded-full mr-3"></div>
                    <h3 className="text-lg font-satoshi font-bold text-foreground">
                      {t('lightPaper.sections.softwareSupplyChain.assemblyPlant.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('lightPaper.sections.softwareSupplyChain.assemblyPlant.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-architech-brand-blue/10 to-architech-brand-green/10 rounded-xl p-6 border border-architech-brand-blue/20">
              <p className="text-foreground font-medium text-lg leading-relaxed">
                {t('lightPaper.sections.softwareSupplyChain.result')}
              </p>
            </div>
          </motion.section>

          {/* Section 5: Use Cases */}
          <motion.section variants={fadeInUp} className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                {t('lightPaper.sections.useCases.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('lightPaper.sections.useCases.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: t('lightPaper.sections.useCases.aiWriting.title'),
                  description: t('lightPaper.sections.useCases.aiWriting.description'),
                  stack: Array.isArray(t('lightPaper.sections.useCases.aiWriting.stack')) ? t('lightPaper.sections.useCases.aiWriting.stack') : []
                },
                {
                  title: t('lightPaper.sections.useCases.ecommerce.title'),
                  description: t('lightPaper.sections.useCases.ecommerce.description'),
                  stack: Array.isArray(t('lightPaper.sections.useCases.ecommerce.stack')) ? t('lightPaper.sections.useCases.ecommerce.stack') : []
                },
                {
                  title: t('lightPaper.sections.useCases.dashboard.title'),
                  description: t('lightPaper.sections.useCases.dashboard.description'),
                  stack: Array.isArray(t('lightPaper.sections.useCases.dashboard.stack')) ? t('lightPaper.sections.useCases.dashboard.stack') : []
                }
              ].map((useCase, index) => (
                <Card key={index} className="border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5 hover:shadow-lg hover:shadow-architech-brand-blue/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-satoshi font-bold text-foreground mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground">Stack Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(useCase.stack) && useCase.stack.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-architech-brand-blue/10 text-architech-brand-blue border-architech-brand-blue/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {/* <Button 
                      variant="outline" 
                      className="w-full mt-4 border-architech-brand-blue/30 text-architech-brand-blue hover:bg-architech-brand-blue/10"
                    >
                      See the Blueprint <ArrowRight className="w-4 h-4 ml-2" />
                    </Button> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Section 6: Human Benefit */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.humanBenefit.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.humanBenefit.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Section 7: Founder */}
          <motion.section variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.founder.title')}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.founder.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Section 8: Start Building */}
          <motion.section variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {t('lightPaper.sections.startBuilding.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('lightPaper.sections.startBuilding.content')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-satoshi font-bold text-foreground mb-3">
                    {t('lightPaper.sections.startBuilding.builders')}
                  </h3>
                  <Button className="w-full bg-gradient-to-r from-architech-brand-blue to-architech-brand-green text-white hover:shadow-lg hover:shadow-architech-brand-blue/25">
                    {t('lightPaper.actions.tryCli')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-architech-brand-blue/20 bg-gradient-to-br from-architech-brand-blue/5 to-architech-brand-green/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-satoshi font-bold text-foreground mb-3">
                    {t('lightPaper.sections.startBuilding.architects')}
                  </h3>
                  <Button variant="outline" className="w-full border-architech-brand-blue/30 text-architech-brand-blue hover:bg-architech-brand-blue/10">
                    {t('lightPaper.actions.joinCommunity')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                {t('lightPaper.sections.startBuilding.whitepaper')}
              </p>
              <Button variant="ghost" className="text-architech-brand-blue hover:text-architech-brand-green">
                {t('lightPaper.actions.readWhitepaper')} <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default LightPaper;
