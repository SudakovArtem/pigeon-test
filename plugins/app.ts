import type { nuxtContext } from '@nuxt/types'

import setConfigs from '@/core/configs/index'

// @ts-expect-error nuxtContext
export default defineNuxtPlugin((context: nuxtContext) => {
  setConfigs(context)
})
