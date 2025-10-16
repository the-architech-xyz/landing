import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/**
 * THE ARCHITECH NAVIGATION
 * 
 * Multi-page navigation with dropdown menus
 * Organized by Product, Solutions, and Company
 */

const productLinks = [
  { title: "CLI", description: "Command-line interface for power users", href: "/cli" },
  { title: "Marketplace", description: "Production-ready modules ecosystem", href: "/marketplace" },
  { title: "For Teams", description: "Private marketplace for enterprises", href: "/for-teams" },
];

const solutionLinks = [
  { title: "For Indie Hackers", description: "Ship MVPs fast", href: "/solutions/saas-starter" },
  { title: "For Developers", description: "Technical deep dive", href: "/cli" },
  { title: "For Teams", description: "Standardize workflows", href: "/for-teams" },
];

const companyLinks = [
  { title: "Philosophy", description: "Our vision and values", href: "/philosophy" },
  { title: "Team", description: "Meet the humans behind it", href: "/team" },
  { title: "Whitepaper", description: "Technical manifesto", href: "/lightpaper" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-removebg.png" alt="The Architech" className="w-8 h-8" />
            <span className="font-bold text-lg">The Architech</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Product Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-2 bg-card border border-border">
                      {productLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-foreground focus:bg-primary/10"
                            >
                              <div className="text-sm font-semibold leading-none">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-2 bg-card border border-border">
                      {solutionLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-foreground focus:bg-primary/10"
                            >
                              <div className="text-sm font-semibold leading-none">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-2 bg-card border border-border">
                      {companyLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-foreground focus:bg-primary/10"
                            >
                              <div className="text-sm font-semibold leading-none">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="/solutions/saas-starter"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </a>
            <a
              href="https://github.com/the-architech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/the-architech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-sm px-6 h-10 transition-colors"
              asChild
            >
              <a href="/#cta">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {/* Product Section */}
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Product
                </div>
                <div className="space-y-2">
                  {productLinks.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Solutions Section */}
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Solutions
                </div>
                <div className="space-y-2">
                  {solutionLinks.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company Section */}
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Company
                </div>
                <div className="space-y-2">
                  {companyLinks.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block py-2 text-sm hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Links */}
              <div className="pt-4 border-t border-border">
                <a 
                  href="/solutions/saas-starter" 
                  className="block py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Examples
                </a>
                <a 
                  href="https://github.com/the-architech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm hover:text-primary transition-colors"
                >
                  Docs
                </a>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://github.com/the-architech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <Button 
                  className="bg-primary hover:bg-primary/90 flex-1"
                  asChild
                >
                  <a href="/#cta" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;

