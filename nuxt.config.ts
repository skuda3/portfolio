// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            meta: [
                { name: 'theme-color', content: '#020617' }
            ]
        }
    }
})