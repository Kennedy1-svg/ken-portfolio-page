<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="text-green-600 font-roboto">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
