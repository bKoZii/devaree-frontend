<template>
  <Body class="bg-gray-50 dark:bg-gray-950" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return title ? `${title} - ดีวารี สปา` : 'ดีวารี สปา'
  },
})
</script>

<style>
@media (min-width: 400px) and (prefers-reduced-motion: no-preference) {
  .page-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .page-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-20px);
  }
  .layout-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .layout-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
