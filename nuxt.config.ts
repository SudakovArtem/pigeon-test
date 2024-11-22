// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '@ui': fileURLToPath(new URL('./components/Ui', import.meta.url)),
    '@vars': fileURLToPath(new URL('./assets/styles/global/variables.scss', import.meta.url))
  },
  css: ['@/assets/styles/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/assets/styles/global/variables.scss" as *;
            @use "@/assets/styles/global/mixins.scss" as *;
          `
        }
      }
    }
  }
})
