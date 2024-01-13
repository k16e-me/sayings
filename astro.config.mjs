import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'
import alpinejs from '@astrojs/alpinejs'
import AstroPWA from '@vite-pwa/astro'
import { manifest } from './manifest'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
    site: 'https://sayings.cc',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    integrations: [
        tailwind(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
                collection: 'storyblok/Collection',
                piece: 'storyblok/Piece'
            }
        }),
        alpinejs(),
        AstroPWA({
            mode: 'development',
            base: '/',
            scope: '/',
            includeAssets: ['favicon.svg'],
            registerType: 'autoUpdate',
            manifest,
            workbox: {
                navigateFallback: '/',
                globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
                cleanupOutdatedCaches: true,
            },
            devOptions: {
                enabled: true,
                navigateFallbackAllowlist: [/^\//],
            },
            experimental: {
                directoryAndTrailingSlashHandler: true,
            }
        })
    ],
    redirects: {
        '/pages': {
            status: 301,
            destination: '/'
        },
        '/pages/': {
            status: 301,
            destination: '/'
        },
        '/c': {
            status: 301,
            destination: '/'
        },
        '/c/': {
            status: 301,
            destination: '/'
        }
    },
    image: {
        domains: ['a.storyblok.com']
    }
})