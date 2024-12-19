import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import { generateSitemap } from 'sitemap';
import { writeFileSync } from 'fs';
import { register } from 'esbuild-register/dist/node';

register();

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
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
});
