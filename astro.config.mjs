import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'
import AstroPWA from '@vite-pwa/astro'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    trailingSlash: 'never',
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
                piece: 'storyblok/Piece',
                cover: 'storyblok/Cover'
            }
        }),
        AstroPWA({
            mode: 'development',
            base: '/',
            scope: '/',
            includeAssets: ['favicon.svg'],
            registerType: 'autoUpdate',
            manifest: {
                name: 'Sayings',
                short_name: 'Sayings',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    }
                ]
            },
            workbox: {
                navigateFallback: '/',
                globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
            },
            devOptions: {
                enabled: true,
                navigateFallbackAllowlist: [/^\/$/],
            }
        })
    ],
    redirects: {
        '/pages': { status: 301, destination: '/' },
        '/c': { status: 301, destination: '/' }
    }
})