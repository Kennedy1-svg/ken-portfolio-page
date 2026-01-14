<script setup>
import SvgIcons from './SvgIcons.vue'
import { routes } from '../helpers/routelist.js'
import { ref } from 'vue'

const showNav = ref(false)

const toggleNav = () => {
  showNav.value = !showNav.value
}
</script>

<template>
  <header class="bg-darkBlue border-b border-gray-700 fixed w-full z-10 mb-5">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <SvgIcons name="kennedy-icon" />
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center md:space-x-10">
          <router-link
            v-for="route in routes"
            :key="route.name"
            :to="route.link"
            class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
          >
            {{ route.name }}
          </router-link>
        </div>

        <!-- Mobile Toggle Button -->
        <button
          @click="toggleNav"
          type="button"
          class="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <transition name="fade">
        <nav v-if="showNav" class="md:hidden min-h-screen px-4 py-10 text-center bg-black relative">
          <SvgIcons name="kennedy-icon" class="mx-auto mb-10" />

          <div class="flex flex-col items-center space-y-4">
            <router-link
              v-for="route in routes"
              :key="route.name"
              :to="route.link"
              @click="toggleNav"
              class="py-2 font-medium text-white transition-all duration-200 hover:text-opacity-70"
            >
              {{ route.name }}
            </router-link>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
/* Optional fade transition for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
