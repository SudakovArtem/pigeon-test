<script setup lang="ts">
interface Props {
  result: string
  points: number
}

interface Emits {
  (event: 'reset'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="test-result">
    <h1 class="test-result__title">Твой результат:</h1>
    <h2 class="test-result__text" v-text="result" />
    <div v-if="points >= 25" class="test-result__prompt">
      <p class="test-result__prompt-text">
        Готова испытать свои силы в расшифровке? Твоя следующая подсказка скрыта в ребусе. Совет: иногда ключ к разгадке
        — это думать не логично, а весело! Удачи, ты почти у цели!
      </p>
      <img class="test-result__img" src="@img/pampers.png" alt="Ребус" />
    </div>
    <UiButton v-else class="test-result__button" text="Начать заново" @click="$emit('reset')">
      <BaseIcon class="test-result__button-icon" name="reload" />
    </UiButton>
  </div>
</template>

<style scoped lang="scss">
.test-result {
  padding: 2rem 1.6rem;
  overflow: hidden;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $color-bunker;

  &__title {
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

  &__prompt {
    background-color: rgba($color-lime, 20%);
    padding: 2rem 1rem;
    border-radius: 2.5rem;
  }

  &__prompt-text {
    margin: 0 0 2rem;
  }

  &__img {
    display: block;
    width: 100%;
    object-fit: contain;
  }

  &__button {
    width: 25rem;
    margin: 0 auto;
  }

  &__button-icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
