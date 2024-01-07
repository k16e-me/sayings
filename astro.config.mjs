import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'
import alpinejs from '@astrojs/alpinejs'

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
        alpinejs()
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