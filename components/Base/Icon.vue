<template>
  <span class="icon-wrapper" v-html="icon" />
</template>

<script lang="ts" setup>
interface Props {
  name: string
}

const props = defineProps<Props>()

const icon = ref<string>('')

const getIcon = async () => {
  try {
    const icons = import.meta.glob('assets/icons/**/**.svg', {
      query: '?raw',
      import: 'default',
      eager: false
    })

    icon.value = (await icons[`/assets/icons/${props.name}.svg`]()) as string
  } catch {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`)
  }
}

await getIcon()

watchEffect(getIcon)
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(svg) {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: unset;
  }
}
</style>
