import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    trailingSlash: 'never',
    site: 'https://sayings.cc',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
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
    ]
})