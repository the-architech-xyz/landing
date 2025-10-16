import { Linkedin, MailIcon } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * THE ARCHITECH FOOTER - "Technical Elegance"
 * Minimal, technical footer with new design system
 */

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container-architech py-16">
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/logo-removebg.png"
                  alt={t('common.alt.logo')}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <span className="font-geist text-xl font-bold text-title">
                  The Architech
                </span>
              
              </div>
            </div>
            <p className="font-inter text-subtle leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/sxhdEEWups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border hover:border-primary transition-colors group"
                title={t('social.discord.title')}
              >
                <DiscordIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-architech-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border hover:border-primary transition-colors group"
                title={t('social.linkedin.title')}
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              
              {/* Contact Email */}
              <a
                href="mailto:antoine.srvt@gmail.com"
                className="p-3 bg-card border border-border hover:border-primary transition-colors group"
                title={t('social.email.title')}
              >
                <MailIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Product
            </h3>
            <div className="space-y-3">
              <a
                href="/cli"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                CLI
              </a>
              <a
                href="/marketplace"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Marketplace
              </a>
              <a
                href="/for-teams"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                For Teams
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Company
            </h3>
            <div className="space-y-3">
              <a
                href="/philosophy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Philosophy
              </a>
              <a
                href="/team"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Team
              </a>
              <a
                href="/lightpaper"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Whitepaper
              </a>
            </div>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Resources
            </h3>
            <div className="space-y-3">
              <a
                href="/solutions/saas-starter"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                SaaS Starter Guide
              </a>
              <a
                href="https://github.com/the-architech"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/@the-architech/cli"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                NPM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-subtle mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-inter text-sm text-subtle">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

