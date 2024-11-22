<script setup lang="ts">
interface Props {
  result: string
  points: number
}

defineProps<Props>()
</script>

<template>
  <div class="test-result">
    <h1 class="test-result__title">Твой результат:</h1>
    <h2 class="test-result__text" v-text="result" />
  </div>
</template>

<style scoped lang="scss">
.test-result {
  padding: 2rem 0 0 0;
  overflow: hidden;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $color-bunker;

  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin: 0 0 2.5rem;
  }

  &__text {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    color: $color-whisper;
    line-height: 1.2;
    padding: 0 1rem;
    margin: 0 0 3rem;
  }
}
</style>
