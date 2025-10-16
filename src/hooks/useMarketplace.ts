/**
 * THE ARCHITECH - MARKETPLACE DATA HOOK
 * 
 * Centralized access to marketplace data
 * Makes it easy to use modules and genomes across components
 */

import marketplaceData from "@/data/marketplace.json";
import type { MarketplaceModule, GenomeShowcase, ModuleCategory } from "@/types/marketplace";

export function useMarketplace() {
  return {
    modules: marketplaceData.modules as MarketplaceModule[],
    genomes: marketplaceData.genomes as GenomeShowcase[],
    stats: marketplaceData.stats,
    version: marketplaceData.version,
    lastUpdated: marketplaceData.lastUpdated,
  };
}

export function useModulesByCategory(category: ModuleCategory) {
  const { modules } = useMarketplace();
  return modules.filter((m) => m.category === category);
}

export function useFeaturedModules() {
  const { modules } = useMarketplace();
  return modules.filter((m) => m.featured);
}

export function useGenomeById(genomeId: string) {
  const { genomes } = useMarketplace();
  return genomes.find((g) => g.id === genomeId);
}

export function useModuleById(moduleId: string) {
  const { modules } = useMarketplace();
  return modules.find((m) => m.id === moduleId);
}

