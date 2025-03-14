import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Gastos PWA',
        short_name: 'Gastos',
        description: 'App para registrar gastos e ingresos',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'dragonfly.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'dragonfly.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
