/**
 * THE ARCHITECH MARKETPLACE - TYPE DEFINITIONS
 * 
 * TypeScript types for the marketplace manifest.json
 * Ensures type safety when using marketplace data
 */

export type ModuleCategory = "adapter" | "integrator" | "feature" | "template" | "connector";
export type ModuleComplexity = "simple" | "intermediate" | "advanced";

export interface ModuleParameter {
  type: string;
  default?: any;
  description: string;
}

export interface MarketplaceModule {
  id: string;
  name: string;
  description: string;
  category: ModuleCategory | string; // Allow any category from package
  type?: "adapter" | "connector" | "feature"; // V2.0 field
  version: string;
  author: string;
  githubUrl: string;
  npmUrl?: string;
  stars: number;
  downloads: number;
  tags: string[];
  dependencies?: string[];
  compatibility?: string[];
  featured?: boolean;
  
  // V2.0 Enhanced fields
  complexity?: ModuleComplexity;
  provides?: string[];
  requires?: string[];
  connects?: string[];
  parameters?: Record<string, ModuleParameter>;
  blueprint?: string;
  jsonFile?: string;
  path?: string;
  engine?: {
    cliVersion: string;
  };
}

export interface GenomeShowcase {
  id: string;
  name: string;
  description: string;
  modules: string[]; // Array of module IDs (V1) or object (V2)
  useCase: string;
  showcaseUrl?: string;
  tags?: string[];
  genome: {
    adapters: string[];
    integrators?: string[];
    connectors?: string[]; // V2.0 uses connectors instead of integrators
    features?: string[];
  };
  
  // V2.0 Enhanced fields
  path?: string;
  stack?: string;
  pattern?: string;
  complexity?: ModuleComplexity;
  estimatedTime?: string;
  moduleCount?: number;
  aliases?: string[];
  file?: string; // Genome file name
  code?: string; // Actual genome TypeScript code from the package
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  moduleCount: number;
  modules: string[];
}

export interface MarketplaceStats {
  totalModules: number;
  adapters: number;
  integrators: number;
  connectors?: number; // V2.0 field
  features: number;
  templates: number;
  genomes?: number; // V2.0 field
  contributors: number;
  lastUpdated?: string;
}

export interface MarketplaceManifest {
  version: string;
  lastUpdated?: string;
  generatedAt?: string; // V2.0 field
  stats: MarketplaceStats;
  modules: MarketplaceModule[] | {
    adapters?: MarketplaceModule[];
    connectors?: MarketplaceModule[];
    features?: MarketplaceModule[];
  }; // V2.0 can be grouped
  genomes: GenomeShowcase[];
  categories?: CategoryInfo[]; // V2.0 field
  tags?: string[]; // V2.0 field
}

