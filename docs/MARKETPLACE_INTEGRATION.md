# THE ARCHITECH - MARKETPLACE INTEGRATION GUIDE

## 🎯 Overview

This document explains how the marketplace data integration works, allowing the website to display real modules, genomes, and stats from the `@thearchitech.xyz/marketplace` package.

---

## 🏗️ Architecture

### **Build-Time Static Generation**

We use a **build-time static generation** approach rather than runtime API calls:

```
┌─────────────────────────────────────────────┐
│  @thearchitech.xyz/marketplace package      │
│  └── manifest.json                          │
└──────────────────┬──────────────────────────┘
                   │
                   │ (build time)
                   ↓
┌─────────────────────────────────────────────┐
│  scripts/fetch-marketplace-data.ts          │
│  - Reads manifest.json from package         │
│  - Falls back to mock data if not found     │
└──────────────────┬──────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────┐
│  src/data/marketplace.json (generated)      │
│  - Static file bundled with website         │
└──────────────────┬──────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────┐
│  React Components                           │
│  - Import static JSON                       │
│  - Zero network requests                    │
│  - Instant data access                      │
└─────────────────────────────────────────────┘
```

**Benefits:**
- ⚡ **Zero latency** - No API calls, data is bundled
- 🔒 **Type-safe** - Full TypeScript support
- 📦 **Single source of truth** - Package controls data
- 🚀 **SEO-friendly** - Content is pre-rendered
- 💪 **Offline-ready** - Works without internet

---

## 📁 File Structure

```
/scripts
  └── fetch-marketplace-data.ts      # Build script

/src
  ├── /types
  │   └── marketplace.ts             # TypeScript types
  ├── /data
  │   ├── marketplace.json           # Generated (gitignored)
  │   └── marketplace-mock.json      # Fallback data
  ├── /hooks
  │   └── useMarketplace.ts          # React hooks
  └── /lib
      └── marketplace-utils.ts       # Helper functions
```

---

## 🔧 How to Use

### **1. In Components:**

```typescript
import { useMarketplace } from "@/hooks/useMarketplace";

function MyComponent() {
  const { modules, genomes, stats } = useMarketplace();
  
  return (
    <div>
      <p>Total modules: {stats.totalModules}</p>
      {modules.map(module => (
        <div key={module.id}>{module.name}</div>
      ))}
    </div>
  );
}
```

### **2. Get Specific Data:**

```typescript
import { useGenomeById, useFeaturedModules } from "@/hooks/useMarketplace";

// Get a specific genome
const saasGenome = useGenomeById('saas-starter');

// Get featured modules only
const featured = useFeaturedModules();
```

### **3. Format Genome Code:**

```typescript
import { getGenomeCodeString } from "@/lib/marketplace-utils";

const genome = useGenomeById('saas-starter');
const codeString = getGenomeCodeString(genome);
// Returns: "export const genome = { ... }"
```

---

## 🚀 Development Workflow

### **Start Development:**
```bash
pnpm dev
```
This automatically runs the fetch script, then starts Vite.

### **Build for Production:**
```bash
pnpm build
```
This fetches latest data, then builds the site.

### **Manually Update Data:**
```bash
pnpm run fetch:marketplace
```

---

## 📦 Package Integration

### **Current State (Using Mock Data):**
The script uses `src/data/marketplace-mock.json` as fallback.

### **When Real Package Exists:**

1. **Install the package:**
   ```bash
   pnpm add -D @thearchitech.xyz/marketplace
   ```

2. **That's it!**
   The script automatically detects the package and uses real data.

### **Package Structure Expected:**
```
@thearchitech.xyz/marketplace/
└── manifest.json
    ├── version
    ├── lastUpdated
    ├── stats { totalModules, adapters, integrators, ... }
    ├── modules [ { id, name, description, category, ... } ]
    └── genomes [ { id, name, genome: { adapters, integrators } } ]
```

---

## 🎨 Components Using Marketplace Data

### **Pages:**
- ✅ `/marketplace` - Full module catalog
- ✅ `/solutions/saas-starter` - Real genome example

### **Components:**
- ✅ `ArchitectsCanvas` - Featured modules & genome examples
- ✅ `ProductsSection` - Stats (when integrated)

### **Where Data is Used:**
- Module cards (name, description, stars, downloads)
- Category filters with counts
- Example project descriptions
- Genome code snippets
- Statistics counters

---

## 🔄 Update Workflow

### **Updating Marketplace Data:**

1. **Developer updates** `@thearchitech.xyz/marketplace` package
2. **CI/CD or developer** runs `pnpm build`
3. **Script fetches** latest manifest.json
4. **Site rebuilds** with new data
5. **Deploy** with updated content

### **No Code Changes Needed:**
- Adding new modules → Automatically appears
- Updating descriptions → Automatically updates
- Changing stats → Automatically reflects

---

## 📊 Data Schema

### **MarketplaceModule:**
```typescript
{
  id: string;              // Unique identifier
  name: string;            // Display name
  description: string;     // Short description
  category: ModuleCategory; // adapter | integrator | feature | template
  version: string;         // Semver version
  author: string;          // Author username
  githubUrl: string;       // GitHub repo URL
  npmUrl?: string;         // NPM package URL
  stars: number;           // GitHub stars
  downloads: number;       // NPM downloads
  tags: string[];          // Search tags
  dependencies?: string[]; // Required packages
  compatibility?: string[]; // Version requirements
  featured?: boolean;      // Highlight in UI
}
```

### **GenomeShowcase:**
```typescript
{
  id: string;              // Unique identifier
  name: string;            // Display name
  description: string;     // Use case description
  modules: string[];       // Array of module IDs
  useCase: string;         // Category
  showcaseUrl?: string;    // Link to deep dive
  tags?: string[];         // Search tags
  genome: {
    adapters: string[];
    integrators: string[];
    features?: string[];
  }
}
```

---

## ✅ Benefits Summary

1. **Performance** ⚡
   - No API calls = Instant loads
   - Static JSON bundled with app
   - No loading spinners needed

2. **Type Safety** 🔒
   - Full TypeScript support
   - Compile-time validation
   - Autocomplete in IDE

3. **Maintainability** 🛠️
   - Single source of truth (package)
   - Update once, reflect everywhere
   - Version-controlled data

4. **Developer Experience** 💎
   - Easy hooks: `useMarketplace()`
   - Helper functions included
   - Mock data for development

5. **SEO** 📈
   - Content pre-rendered in HTML
   - Search engines index modules
   - Better discoverability

---

## 🔮 Future Enhancements

- [ ] Add search indexing for better performance
- [ ] Add module detail pages (`/marketplace/:moduleId`)
- [ ] Add GitHub API integration for real-time stars
- [ ] Add NPM API for real-time downloads
- [ ] Add community ratings/reviews
- [ ] Add "recently updated" sorting
- [ ] Add version history display

---

**Last Updated:** 2025-10-16  
**Status:** ✅ Production Ready

