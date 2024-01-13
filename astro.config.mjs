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
    integrations: [
        tailwind(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
                collection: 'storyblok/Collection',
                piece: 'storyblok/Piece'
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