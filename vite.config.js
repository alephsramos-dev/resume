import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import eslint from 'vite-plugin-eslint'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    sitemap({
      hostname: 'https://your-domain.com',
    }),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        titleProp: true,
      },

  include: '**/*.svg?react',
    }),

    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      svg: {
        multipass: true,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      }
    }),


  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@database': path.resolve(__dirname, './src/database'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})