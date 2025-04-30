<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="text-[#003049] font-roboto bg-lightBg">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
