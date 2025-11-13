import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import eslint from 'vite-plugin-eslint'
import Sitemap from 'vite-plugin-sitemap'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const hostname = 'https://www.alephsramosdev.com.br'

const staticRoutes = [
  '/',
  '/curriculo',
  '/projetos',
  '/servicos/criacao-de-sites',
  '/servicos/automacao',
  '/servicos/trafego-pago',
  '/servicos/design',
  '/servicos/copywriter',
]

const projectSlugs = [
  'euyagolopes',
  'kdea-construtora',
  'chales-fast-homes',
  'pisos-vinilicos-fast',
  'steel-conecta',
  'lp-pousada-le-ange',
  'nova-metalica',
  'fast-homes',
  'pousada-le-ange',
]

const projectRoutes = projectSlugs.map(slug => `/projetos/${slug}`)
const sitemapRoutes = Array.from(new Set([...staticRoutes, ...projectRoutes]))
const dynamicRoutes = sitemapRoutes.filter(route => route !== '/')

const sitemapPriority = {
  '/': 1,
  '/projetos': 0.9,
  '/curriculo': 0.8,
}

const sitemapChangefreq = {
  '*': 'monthly',
  '/': 'weekly',
  '/projetos': 'weekly',
}

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      react(),
      eslint(),
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          titleProp: true,
        },
        include: '**/*.svg?react',
      }),
      ...(isProduction
        ? [
          Sitemap({
            hostname,
            readable: true,
            dynamicRoutes,
            generateRobotsTxt: false,
            changefreq: sitemapChangefreq,
            priority: sitemapPriority,
            lastmod: new Date(),
          }),
          ViteImageOptimizer({
            svg: {
              multipass: true,
            },
            png: {
              quality: 80,
            },
            jpeg: {
              quality: 80,
            },
            jpg: {
              quality: 80,
            },
            webp: {
              quality: 80,
            },
            avif: {
              quality: 70,
            },
            includePublic: true,
            logStats: true,
          }),
        ]
        : []),
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
  }
})