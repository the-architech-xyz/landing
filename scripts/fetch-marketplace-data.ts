#!/usr/bin/env tsx
/**
 * THE ARCHITECH - MARKETPLACE DATA FETCHER
 * 
 * This script fetches the marketplace manifest from the @thearchitech.xyz/marketplace package
 * and generates a static JSON file for use in the website.
 * 
 * Usage:
 * - Runs automatically before build (prebuild script)
 * - Can be run manually: tsx scripts/fetch-marketplace-data.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchMarketplaceData() {
  try {
    console.log('📦 Fetching marketplace data...');

    // Try to read from installed package
    let manifestData;
    let source = 'package';

    try {
      const packageManifestPath = resolve(
        __dirname,
        '../node_modules/@thearchitech.xyz/marketplace/manifest.json'
      );
      const rawManifest = JSON.parse(readFileSync(packageManifestPath, 'utf-8'));
      console.log('✓ Loaded from @thearchitech.xyz/marketplace package');
      
      // Transform real package structure to our expected format
      // Also merge genomes from mock if package doesn't have them
      const mockPath = resolve(__dirname, '../src/data/marketplace-mock.json');
      const mockData = JSON.parse(readFileSync(mockPath, 'utf-8'));
      manifestData = transformRealManifest(rawManifest, mockData);
      source = 'package';
    } catch (error) {
      // Fallback to mock data if package doesn't exist yet
      console.log('⚠ Package not found, using mock data');
      const mockPath = resolve(__dirname, '../src/data/marketplace-mock.json');
      manifestData = JSON.parse(readFileSync(mockPath, 'utf-8'));
      source = 'mock';
    }

    // Ensure output directory exists
    const outputDir = resolve(__dirname, '../src/data');
    mkdirSync(outputDir, { recursive: true });

    // Write to src/data/marketplace.json
    const outputPath = resolve(outputDir, 'marketplace.json');
    writeFileSync(outputPath, JSON.stringify(manifestData, null, 2));

    console.log(`✓ Marketplace data written to src/data/marketplace.json`);
    console.log(`📊 Stats: ${manifestData.stats.totalModules} modules, ${manifestData.genomes?.length || 0} genomes`);
    console.log(`📍 Source: ${source}`);
    console.log('✅ Done!');

    return manifestData;
  } catch (error) {
    console.error('❌ Error fetching marketplace data:', error);
    process.exit(1);
  }
}

/**
 * Transform real marketplace package structure to our website format
 */
function transformRealManifest(rawManifest: any, mockData?: any) {
  const modules = rawManifest.modules || [];
  
  // Count by category
  const adapters = modules.filter((m: any) => m.category === 'adapter').length;
  const integrations = modules.filter((m: any) => m.category === 'integration').length;
  const features = modules.filter((m: any) => m.category === 'feature').length;
  const templates = modules.filter((m: any) => m.category === 'template').length;
  
  // Transform modules to add missing display data
  const transformedModules = modules.map((module: any) => ({
    ...module,
    // Normalize category name
    category: module.category === 'integration' ? 'integrator' : module.category,
    // Extract display name from ID (e.g., "payment/stripe" -> "Stripe")
    name: module.name || extractNameFromId(module.id),
    // Add placeholder description if missing
    description: module.description || `${extractNameFromId(module.id)} integration for The Architech`,
    // Add author (required by our types)
    author: module.author || 'the-architech',
    // Add placeholder stats (will be real when package includes them)
    stars: module.stars || 0,
    downloads: module.downloads || 0,
    // Add GitHub URL if missing
    githubUrl: module.githubUrl || `https://github.com/the-architech-xyz/marketplace/tree/main/${module.path?.replace('/adapter.json', '').replace('/integration.json', '')}`,
    // Add optional npmUrl
    npmUrl: module.npmUrl,
  }));
  
  // Try to load genomes from the package's genomes manifest
  let genomes = rawManifest.genomes || [];
  
  try {
    const genomesManifestPath = resolve(__dirname, '../node_modules/@thearchitech.xyz/marketplace/genomes/manifest.json');
    const genomesManifest = JSON.parse(readFileSync(genomesManifestPath, 'utf-8'));
    
    if (genomesManifest.genomes && genomesManifest.genomes.length > 0) {
      console.log(`✓ Found ${genomesManifest.genomes.length} genomes in package`);
      genomes = genomesManifest.genomes;
      
      // Read actual genome files and add code
      const genomesPath = resolve(__dirname, '../node_modules/@thearchitech.xyz/marketplace/genomes');
      genomes = genomes.map((genome: any) => {
        let genomeCode = '';
        try {
          if (genome.file) {
            const genomeFilePath = resolve(genomesPath, genome.file);
            genomeCode = readFileSync(genomeFilePath, 'utf-8');
          }
        } catch (error) {
          console.warn(`⚠️  Could not read genome file: ${genome.file}`);
        }
        
        // Transform to match our expected structure
        return {
          id: genome.id === 'saas-app' ? 'saas-starter' : genome.id, // Map saas-app to saas-starter
          name: genome.name,
          description: genome.description,
          modules: [], // Will be populated by module matching
          useCase: genome.category,
          showcaseUrl: genome.id === 'saas-app' ? '/solutions/saas-starter' : undefined,
          tags: genome.tags || [],
          genome: {
            adapters: [],
            integrators: [],
            features: [],
          },
          complexity: genome.complexity,
          moduleCount: genome.modules,
          file: genome.file,
          code: genomeCode, // The actual genome code!
        };
      });
    }
  } catch (error) {
    console.warn('⚠️  Could not load genomes from package, using mock data');
    genomes = mockData?.genomes || [];
  }
  
  return {
    version: rawManifest.version || '1.0.0',
    lastUpdated: rawManifest.lastUpdated || new Date().toISOString(),
    stats: {
      totalModules: rawManifest.totalModules || modules.length,
      adapters: adapters,
      integrators: integrations,
      features: features,
      templates: templates,
      contributors: 150, // Placeholder - can be added to package later
    },
    modules: transformedModules,
    genomes: genomes, // From package or fallback to mock
  };
}

/**
 * Extract display name from module ID
 * e.g., "payment/stripe" -> "Stripe"
 * e.g., "framework/nextjs" -> "Next.js"
 */
function extractNameFromId(id: string): string {
  const parts = id.split('/');
  const name = parts[parts.length - 1];
  
  // Special cases for better display names
  const nameMap: Record<string, string> = {
    'nextjs': 'Next.js',
    'shadcn-ui': 'shadcn/ui',
    'better-auth': 'Better Auth',
    'dev-tools': 'Dev Tools',
    'next-intl': 'next-intl',
    'typeorm': 'TypeORM',
    'drizzle': 'Drizzle ORM',
    'prisma': 'Prisma',
    'stripe': 'Stripe',
    'resend': 'Resend',
    'sentry': 'Sentry',
    'vitest': 'Vitest',
    'tailwind': 'Tailwind CSS',
    'zustand': 'Zustand',
    'web3': 'Web3.js',
    'sequelize': 'Sequelize',
    'docker': 'Docker',
  };
  
  return nameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  fetchMarketplaceData();
}

export default fetchMarketplaceData;

