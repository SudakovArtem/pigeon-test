<script setup lang="ts">
import type { Test } from '@/types'

interface Props {
  modelValue: string
  question: string
  answers: Test.Answer[]
  progress: [number, number]
}

interface Emits {
  (event: 'update:modelValue', value: string): void
  (event: 'change', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="test-block">
    <div class="test-block__question">
      <p class="test-block__question-text" v-text="question" />
      <p class="test-block__progress-text" v-text="`${progress[0]} вопрос из ${progress[1]}`" />
      <progress class="test-block__progress" :value="progress[0]" :max="progress[1]" />
      <div class="test-block__answers">
        <label class="test-block__answer" v-for="answer in answers" :key="answer.id">
          <input
            type="radio"
            :value="answer.points"
            class="visually-hidden"
            v-model="model"
            @change="$emit('change', answer.points)"
          />
          <span v-text="answer.answer" />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test-block {
  &__question {
    box-sizing: border-box;
    display: flex;
    align-content: center;
    flex-direction: column;
    background: $color-bunker;
    border-radius: 1.5rem;
    align-items: center;

    @include tablet-desktop {
      padding: 2.5rem;
    }

    @include mobile {
      padding: 2.5rem 1.6rem;
    }
  }

  &__question-text {
    margin: 0 0 2rem;
    font-size: 2rem;
    text-align: center;
    line-height: 1.2;
  }

  &__progress {
    border-radius: 0.7rem;
    height: 2rem;
    margin-bottom: 2rem;

    @include tablet-desktop {
      width: 50%;
    }

    @include mobile {
      width: 100%;
    }

    &::-webkit-progress-value {
      background-color: $color-nobel;
      border-radius: 1rem;
    }

    &::-webkit-progress-bar {
      background-color: $color-nero;
      border-radius: 1rem;
    }

    &::-moz-progress-bar {
      background-color: $color-nero;
      border-radius: 1rem;
    }
  }

  &__progress-text {
    margin: 0 0 1rem;
    color: $color-dark-gray;
    font-size: 1.6rem;
    font-weight: 700;
  }

  &__answers {
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    gap: 1.5rem;
  }

  &__answer {
    text-align: center;
    width: 100%;
    background-color: $color-black-pearl;
    border-radius: 1.5rem;
    color: $color-default-white;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition:
      transform $transition,
      background-color $transition;
    border: none;
    font-size: 1.6rem;

    &:not(:disabled):hover {
      background: $color-black-russian;
      transform: scale(1.08);
    }
  }
}
</style>
