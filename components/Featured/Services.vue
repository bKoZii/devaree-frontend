<template>
  <div>
    <h1 class="mb-3 text-center text-xl font-bold sm:text-3xl">
      บริการที่แนะนำ
    </h1>
    <section class="grid grid-cols-1 gap-3">
      <template
        v-for="service in services"
        :key="service.name"
      >
        <FeaturedServiceCard :service="service" />
      </template>
    </section>
  </div>
</template>

<script lang="ts" setup>
const services = [{
  name: 'บริการนวดเท้า',
  description: 'การนวดฝ่าเท้ายังมีประโยชน์ช่วยกระตุ้นการไหลเวียนโลหิต ทำให้หัวใจทำงานได้ดี ช่วยให้จิตใจสงบ มีสมาธิ และสามารถโฟกัสกับสิ่งต่าง ๆ ได้ดีมากขึ้น ดังนั้นแล้ว หากใครที่รู้สึกว่าช่วงนี้มีความเครียดสะสมจนทำให้นอนไม่ค่อยหลับ และรู้สึกเมื่อยล้าที่เท้าบ่อย ๆ การเข้ารับบริการนวดฝ่าเท้ากับผู้เชี่ยวชาญที่สปาดี ๆ ก็เป็นอีกหนึ่งวิธีที่จะช่วยคลายเครียดและช่วยให้สุขภาพโดยรวมของเราดีขึ้นได้',
  price: 500,
}, {
  name: 'นวดน้ำมันอุ่น',
  description: 'ใช้น้ำมันนวดตามจุดต่าง ๆ ของร่างกายในอุณหภูมิที่พอเหมาะ จะทำให้คุณรู้สึกผ่อนคลาย ความร้อนจากน้ำมันจะช่วยให้ผิวอ่อนนุ่ม ลดความตึงเครียดของกล้ามเนื้อได้เป็นอย่างดี แพ็กเกจนี้เหมาะเป็นอย่างยิ่งสำหรับผู้ที่ต้องการผ่อนคลายกล้ามเนื้อจากความอ่อนล้า',
  price: 1500,
}]
</script>
