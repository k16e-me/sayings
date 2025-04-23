import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK')
const redirectHome = { status: 301, destination: '/' }

export default defineConfig({
    site: 'https://sayings.k16e.com',
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
                collections: 'composites/Collections',
                piece: 'composites/Piece'
            }
        })
    ],
    redirects: {
        '/pages': redirectHome,
        '/c': redirectHome,
    },
    image: {
        domains: ['a.storyblok.com']
    }
})