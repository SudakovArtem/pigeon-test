<script setup lang="ts">
interface Props {
  text?: string
  type?: 'button' | 'submit' | 'reset'
}

interface Emits {
  (event: 'click'): void
}

withDefaults(defineProps<Props>(), {
  text: '',
  type: 'button'
})

defineEmits<Emits>()
</script>

<template>
  <button class="btn" :type="type" @click="$emit('click')">
    <slot />
    <span class="btn__text" v-html="text" />
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: $color-default-white;
  background: $color-black-pearl;
  border: none;
  box-sizing: border-box;
  border-radius: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  width: 25rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: background-color $transition;

  &:hover {
    background: $color-black-russian;
  }
}
</style>
