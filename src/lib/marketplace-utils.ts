/**
 * THE ARCHITECH - MARKETPLACE UTILITIES
 * 
 * Helper functions for working with marketplace data
 */

import type { GenomeShowcase, MarketplaceModule } from "@/types/marketplace";

/**
 * Get example project descriptions from genomes
 */
export function getExampleProjects(genomes: GenomeShowcase[]): string[] {
  return genomes.map((genome) => genome.description);
}

/**
 * Get genome code string for display
 */
export function getGenomeCodeString(genome: GenomeShowcase): string {
  const { adapters, integrators, features = [] } = genome.genome;
  
  let code = `export const genome = {\n`;
  code += `  adapters: [${adapters.map(a => `'${a}'`).join(', ')}],\n`;
  code += `  integrators: [${integrators.map(i => `'${i}'`).join(', ')}]`;
  if (features.length > 0) {
    code += `,\n  features: [${features.map(f => `'${f}'`).join(', ')}]`;
  }
  code += `\n}`;
  
  return code;
}

/**
 * Format large numbers for display
 */
export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}

/**
 * Get actual module objects from a genome's module list
 * Maps genome module names to actual marketplace modules
 */
export function getModulesFromGenome(
  genome: GenomeShowcase | null,
  allModules: MarketplaceModule[]
): MarketplaceModule[] {
  if (!genome?.genome) return [];

  const { adapters = [], integrators = [], features = [] } = genome.genome;
  const moduleNames = [...adapters, ...integrators, ...features];
  
  // Map module names to actual module objects
  return moduleNames
    .map(moduleName => {
      // Try to find module by matching the module name in the ID
      // e.g., "stripe" should match "payment/stripe"
      return allModules.find(m => 
        m.id.includes(moduleName.toLowerCase()) || 
        m.name.toLowerCase().includes(moduleName.toLowerCase())
      );
    })
    .filter((m): m is MarketplaceModule => m !== undefined);
}

