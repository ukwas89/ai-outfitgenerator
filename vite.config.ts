import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from "lovable-tagger"
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { writeFileSync } from 'fs'

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://aioutfitgenerator.online' });

  const links = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.8 },
    { url: '/terms', changefreq: 'monthly', priority: 0.8 },
    { url: '/how-it-works', changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  ];

  const stream = Readable.from(links).pipe(sitemap);
  const data = await streamToPromise(stream);
  writeFileSync('./public/sitemap.xml', data.toString());
}

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'generate-sitemap',
      buildStart: async () => {
        await generateSitemap();
      },
    },
  ].filter(Boolean),
  base: '', // This ensures assets are loaded correctly
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate a single CSS file
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Ensure consistent file names for WordPress
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    host: "::",
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))