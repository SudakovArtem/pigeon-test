<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: inherit;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.6rem;
  max-width: 70rem;
}
</style>
