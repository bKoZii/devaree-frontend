<template>
  <div>
    <nav class="dark:bg-primary-950 jun-dock w-screen border-gray-200 bg-white dark:border-gray-800">
      <ul class="jun-dockMenu">
        <li class="jun-dockMenuItem">
          <template
            v-for="menu in menus"
            :key="menu.name"
          >
            <ULink
              :to="menu.to"
              class="jun-dockMenuButton"
              active-class="text-primary-500 dark:text-primary-300"
              inactive-class="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <UIcon
                :name="menu.icon"
                class="size-7"
              />
              <span>{{ menu.name }}</span>
            </ULink>
          </template>
        </li>
      </ul>
    </nav>
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
