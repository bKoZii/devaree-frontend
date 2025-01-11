<template>
  <div>
    <section class="container mx-auto">
      <h1 class="text-xl font-bold">
        หน้าบัญชีผู้ใช้
      </h1>
      <p>{{ liff?.isLoggedIn }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLiff } from '@/composables/liff'

const { liff } = useLiff()
const profile = ref()
profile.value = liff.value?.getProfile()
</script>
