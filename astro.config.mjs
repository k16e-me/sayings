import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'

const
    env = loadEnv('', process.cwd(), 'STORYBLOK'),
    redirectHome = { status: 301, destination: '/' }

// https://astro.build/config
export default defineConfig({
    site: 'https://sayings.cc',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    experimental: {
        clientPrerender: true
    },
    integrations: [
        tailwind(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'composites/Page',
                collection: 'composites/Collection',
                piece: 'composites/Piece'
            }
        })
    ],
    redirects: {
        '/pages': redirectHome,
        '/pages/': redirectHome,
        '/c': redirectHome,
        '/c/': redirectHome
    },
    image: {
        domains: ['a.storyblok.com']
    }
})