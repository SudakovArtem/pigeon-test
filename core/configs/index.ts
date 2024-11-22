import type { nuxtContext } from '@nuxt/types'
import type { coreFunctionList } from '@/types/ICore'
import Constants from '@/core/configs/modules/constants'
import type { CoreContext } from '@/types'

const configList: coreFunctionList = [Constants]

export default (context: nuxtContext) => {
  class ConfigsLocator {}
  context.$configs = <CoreContext.Configs>new ConfigsLocator()
  configList.forEach((fn) => fn(context))
}
