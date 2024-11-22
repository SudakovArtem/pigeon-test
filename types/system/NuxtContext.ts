import type { Context } from '@nuxt/types'
import type { CoreContext } from '@/types'

declare module '@nuxt/types' {
  interface nuxtContext extends Context {
    $configs: CoreContext.Configs
  }
}
