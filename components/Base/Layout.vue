<template>
  <div class="page">
    <slot name="page-header" />
    <main class="page-wrapper">
      <slot name="page-content" />
    </main>
    <slot name="page-footer" />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.page-wrapper {
  position: relative;
  flex: auto;
  background: inherit;
}
</style>
