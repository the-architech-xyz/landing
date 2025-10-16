import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Star, ExternalLink, Github, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import marketplaceData from "@/data/marketplace.json";
import type { ModuleCategory, MarketplaceModule } from "@/types/marketplace";

/**
 * THE ARCHITECH MARKETPLACE PAGE
 * 
 * Target: Discoverers, contributors, ecosystem builders
 * Goal: Showcase ecosystem → Drive exploration & contribution
 * Design: GitHub/NPM-like, data-driven, searchable
 * 
 * Data source: Build-time static generation from @thearchitech.xyz/marketplace
 */

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ModuleCategory | "all">("all");

  useEffect(() => {
    // Set dark mode by default (principal mode)
    document.documentElement.classList.add('dark');
  }, []);

  // Real data from marketplace manifest (build-time static generation)
  const modules: MarketplaceModule[] = marketplaceData.modules as MarketplaceModule[];
  const stats = marketplaceData.stats;

  const categories: { value: ModuleCategory | "all"; label: string; color: string }[] = [
    { value: "all", label: `All (${stats.totalModules})`, color: "bg-primary/10 text-primary border-primary/30" },
    { value: "adapter", label: `Adapters (${stats.adapters})`, color: "bg-blue-500/10 text-blue-500 border-blue-500/30" },
    { value: "integrator", label: `Integrators (${stats.integrators})`, color: "bg-accent/10 text-accent border-accent/30" },
    { value: "feature", label: `Features (${stats.features})`, color: "bg-green-500/10 text-green-500 border-green-500/30" },
    { value: "template", label: `Templates (${stats.templates})`, color: "bg-purple-500/10 text-purple-500 border-purple-500/30" },
  ];

  const getCategoryColor = (category: string) => {
    const found = categories.find((c) => c.value === category);
    return found?.color || categories[0].color;
  };

  const filteredModules = modules.filter((module) => {
    const matchesSearch =
      module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Musical Grid Background */}
        <div className="absolute inset-0 musical-grid opacity-50" />

        <div className="container-architech relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <div className="inline-block rounded-md px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold tracking-wider">
              THE MARKETPLACE
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6 text-balance"
          >
            The Composable <span className="text-primary">Software Supply Chain</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Discover, use, and contribute to the ecosystem of production-ready modules.
          </motion.p>

          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {[
              { label: "Adapters", value: `${stats.adapters}+`, color: "text-blue-500" },
              { label: "Integrators", value: `${stats.integrators}+`, color: "text-accent" },
              { label: "Features", value: `${stats.features}+`, color: "text-green-500" },
              { label: "Contributors", value: `${stats.contributors}+`, color: "text-primary" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base bg-card border-2 border-border focus:border-primary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  variant="outline"
                  className={`rounded-md ${
                    selectedCategory === category.value
                      ? category.color
                      : "bg-card border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8 text-muted-foreground">
            Found {filteredModules.length} {filteredModules.length === 1 ? "module" : "modules"}
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredModules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <Badge className={`text-xs ${getCategoryColor(module.category)}`}>
                    {module.category}
                  </Badge>
                </div>

                {/* Module Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{module.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {module.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    {module.downloads.toLocaleString()}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={module.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="section-padding bg-background">
        <div className="container-architech">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block rounded-md px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-bold tracking-wider mb-6">
              FOR CONTRIBUTORS
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Bricks. <span className="text-accent">Not Just the House.</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12">
              Join the ecosystem. Create modules that millions will use.
            </p>

            {/* 3-Step Guide */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  number: "01",
                  title: "Read the Doctrine",
                  description: "Understand Adapters vs Integrators",
                },
                {
                  number: "02",
                  title: "Create Your Module",
                  description: "Use architech create-module",
                },
                {
                  number: "03",
                  title: "Submit PR",
                  description: "Share with the community",
                },
              ].map((step) => (
                <div key={step.number} className="p-6 bg-card border border-border">
                  <div className="text-sm font-bold text-accent px-3 py-1 bg-accent/10 border border-accent/30 rounded-md inline-block mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-lg px-8 h-14"
              asChild
            >
              <a
                href="https://github.com/the-architech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Start Contributing on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;

