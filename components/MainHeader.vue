<template>
  <div class="w-full bg-devaree-100 p-3   drop-shadow backdrop-blur dark:border-b dark:border-gray-800 dark:bg-black dark:drop-shadow-none">
    <section class="container mx-auto flex flex-row flex-nowrap items-center justify-between">
      <h1 class="text-xl font-bold">
        ดีวารี สปา
        <span class="text-xs text-gray-500"> - Frontend Demo</span>
      </h1>
      <div class="flex items-stretch gap-5">
        <template
          v-for="menu in menus"
          :key="menu.name"
        >
          <ULink :to="menu.to">
            {{ menu.name }}
          </ULink>
        </template>
        <UDivider
          orientation="vertical"
          :ui="{ border: { base: 'border-b' } }"
        />
        <NavbarThemeSwitcher />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const menus = [{
  name: 'หน้าหลัก',
  icon: 'ph:house-duotone',
  to: '/',
}, {
  name: 'จองคิวบริการ',
  icon: 'ph:calendar-check-duotone',
  to: '/booking',
}, {
  name: 'บัญชี',
  icon: 'ph:user-circle-duotone',
  to: '/account',
}]
</script>
