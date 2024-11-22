import type { nuxtContext } from '@nuxt/types'
import { type Constants } from '@/types'
import test from './test'

export default (context: nuxtContext) => {
  context.$configs.constants = {
    test
  } as Constants
}
