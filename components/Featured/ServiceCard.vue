<template>
  <div>
    <UCard :ui="{ body: { padding: 'p-0 sm:p-0' }, base: 'overflow-hidden' }">
      <div class="flex flex-col items-start sm:flex-row">
        <img
          src="https://s.isanook.com/wo/0/ud/15/77373/77373-20171002050303-9deaba6.jpg"
          alt="นวดเท้า"
          class="w-full rounded-b sm:w-80"
        >
        <section class="grow p-4 ">
          <h2 class="text-xl font-bold">
            {{ service.name }}
          </h2>
          <p class="my-5 leading-5">
            {{ service.description }}
          </p>
          <div class="flex flex-row items-center justify-between">
            <div>
              <p class="text-sm text-gray-500">
                ราคาเริ่มต้น
              </p><span class="text-lg font-bold">{{ service.price }} บาท</span>
            </div>
            <UButton
              label="จองทันที"
              color="primary"
              size="lg"
              icon="ph:calendar-check-duotone"
            />
          </div>
        </section>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
interface Service {
  name: string
  description: string
  price: number
}
defineProps<{ service: Service }>()
</script>
