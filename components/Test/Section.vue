<script setup lang="ts">
import type { CoreContext } from '@/types'

const root = useNuxtApp()
const {
  test: { questions }
} = (root.$configs as CoreContext.Configs).constants

const isStarted = ref<boolean>(false)
const currentQuestion = ref<number>(0)
const isFinished = ref<boolean>(false)
const answers = ref<string[]>(questions.map(() => ''))
const resultText = ref<string>('')
const resultPoints = computed<number>(() => {
  return answers.value.reduce((sum, value) => sum + Number(value), 0)
})

const getResultText = (value: number): string => {
  if (value < 11) {
    return 'Мда уж… Судя по твоим ответам, тебя не только голубь считает чмом и тепрпилой.'
  }

  if (value >= 11 && value < 18) {
    return 'Не сказать, что голубь нормально к тебе относится. Скорее у него неприязнь к тебе.'
  }

  if (value >= 25) {
    return 'Поздравляем! Ты пользуешься уважением у голубя. Цени это!'
  }

  return 'Ну в общем и целом голубь относится к тебе нормально. А это много значит.'
}

const onStart = () => {
  isStarted.value = true
}

const onChange = (): void => {
  if (currentQuestion.value === answers.value.length - 1) {
    resultText.value = getResultText(resultPoints.value)
    isFinished.value = true
    return
  }

  currentQuestion.value += 1
}
</script>

<template>
  <section class="test-section">
    <BaseContainer>
      <TransitionGroup name="fade">
        <TestIntro v-if="!isStarted" key="intro" @start="onStart" />
        <template v-for="(block, idx) in questions" :key="block.id">
          <LazyTestBlock
            v-if="isStarted && !isFinished && idx === currentQuestion"
            v-model="answers[idx]"
            :question="block.question"
            :answers="block.answer"
            :progress="[idx + 1, questions.length]"
            @change="onChange"
          />
        </template>
        <TestResutl v-if="isFinished" key="result" :result="resultText" :points="resultPoints" />
      </TransitionGroup>
    </BaseContainer>
  </section>
</template>

<style scoped lang="scss">
.test-section {
  @include tablet-desktop {
    padding: 5rem 0;
  }

  @include mobile {
    padding: 2rem 0;
  }
}
</style>
