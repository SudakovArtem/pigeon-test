<script setup lang="ts">
interface Emits {
  (event: 'start'): void
}

defineEmits<Emits>()
</script>

<template>
  <div class="test-intro">
    <div class="test-intro__wrapper">
      <figure class="test-intro__info">
        <img class="test-intro__img" src="@img/pigeon.jpg" alt="Что думает о тебе голубь" />
        <div class="test-intro__title">
          <h1 id="title">Что думает о тебе голубь</h1>
        </div>
        <figcaption class="test-intro__description">
          <p>
            Следующая подсказка в надёжных руках… точнее, крыльях! Тебе придётся стать настоящим укротителем голубей.
            Завоюй его доверие, и он раскроет тебе свою тайну. Совет: крошка хлеба творит чудеса!
          </p>
          <p>
            Все птицы по-своему удивительны. К примеру, голуби удивительны тем, что умеют переносить суровые зимы, имеют
            способность «хоуминга» и жить рядом с человеком. При этом между птицей и человеком складываются определенные
            и порой непростые отношения.
          </p>
          <p>
            Тебя когда-нибудь интересовало, как относиться и что думает о тебе проходящий мимо голубь в парке? Уважает
            ли он тебя? А, может быть, он считает тебя терпилой?
          </p>
        </figcaption>
      </figure>
      <UiButton class="test-intro__run" text="Начать" @click="$emit('start')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.test-intro {
  &__wrapper {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    overflow: hidden;
    background: $color-bunker;
    padding: 0 0 2.5rem;
  }

  &__info {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  &__img {
    display: block;
    overflow: hidden;
    justify-content: center;
    width: 100%;
    object-fit: contain;
    border-radius: 1.8rem 1.8rem 0 0;
  }

  &__title {
    background: rgba($color-black-pearl, 80%);
    width: 100%;
    height: 7.5rem;
    margin-top: -7.5rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;

    h1 {
      margin: 0;
      text-align: left;
      font-size: 2.2rem;
      color: $color-whisper;
    }
  }

  &__description {
    color: #c5c5c5;
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    p {
      font-size: 1.7rem;
      line-height: 1.2;
      margin: 0;
    }
  }

  &__run {
    width: 25rem;
    margin: 0 auto;
  }
}
</style>
