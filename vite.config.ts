import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';
import { register } from 'esbuild-register/dist/node';

register();

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
  return data.toString();
}

export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV === 'development' && componentTagger(),
    {
      name: 'generate-sitemap',
      buildStart: async () => {
        const sitemap = await generateSitemap();
        writeFileSync('sitemap.xml', sitemap);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    middlewareMode: true,
    fs: {
      strict: true,
    }
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
});