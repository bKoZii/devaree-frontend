<template>
  <div>
    <UCard class="mt-10">
      <template #header>
        <div class="flex items-center justify-between">
          <h1 class="text-lg font-bold">
            Welcome to Nuxt 3 Starter
          </h1>
          <ColorScheme>
            <USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
            />
          </ColorScheme>
        </div>
      </template>

      <p class="text-sm">
        a Nuxt 3 starter with Nuxt UI, ESLint, and more...
      </p>
      <template #footer>
        <h2 class="mb-3 font-bold">
          Learn More
        </h2>
        <UButtonGroup>
          <UButton
            to="https://ui.nuxt.com"
            target="_blank"
          >
            Nuxt UI Documentation
          </UButton>
          <UButton
            to="https://nuxt.com"
            target="_blank"
          >
            Nuxt Documentation
          </UButton>
          <UButton
            to="https://tailwindcss.com/"
            target="_blank"
            color="sky"
          >
            TailwindCSS
          </UButton>
          <UButton
            to="https://eslint.nuxt.com/"
            target="_blank"
            color="indigo"
          >
            Nuxt ESLint
          </UButton>
        </UButtonGroup>
      </template>
    </UCard>
  </div>
</template>
