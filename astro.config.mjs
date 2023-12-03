import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    integrations: [
        tailwind(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
                collection: 'storyblok/Collection',
                piece: 'storyblok/piece'
            }
        })
    ],
    site: 'https://sayings.cc',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport'
    },
    // trailingSlash: 'never'
})