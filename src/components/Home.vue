<script setup="js">
import SvgIcons from './SvgIcons.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Skills from './Skills.vue'
import Contact from './Contact.vue'
import { routes } from '../helpers/routelist.js'

import { ref } from 'vue'
let showNav = ref(false)
let showName = ref(true)

let display = () => {
  showNav.value = !showNav.value
  showName.value = !showName.value
}
</script>

<template>
  <div class="pb-14">
    <header class="bg-darkBlue border-b border-gray-700 fixed w-full z-10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- lg+ -->
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0">
            <div>
              <SvgIcons name="kennedy-icon" />
            </div>
          </div>

          <button
            @click="display"
            type="button"
            class="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-[#669BBC] hover:bg-[#669BBC]"
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

          <!-- <div class="hidden md:flex md:items-center md:space-x-10"> -->
          <div class="hidden md:flex md:items-center md:space-x-10">
            <router-link
              to="/about"
              class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              About Me
            </router-link>

            <router-link
              to="/portfolio"
              class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Portfolio
            </router-link>

            <router-link
              to="/skills"
              class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Stacks
            </router-link>

            <router-link
              to="/contact"
              class="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Contact
            </router-link>
          </div>

          <!-- </div> -->
        </nav>

        <!-- xs to lg -->
        <nav v-if="showNav" class="min-h-screen px-4 py-10 text-center bg-black relative md:hidden">
          <button
            @click="display"
            type="button"
            aria-label="Toggle Navigation"
            class="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-[#669BBC] hover:bg-[#669BBC]"
          >
            <div>
              <SvgIcons name="kennedy-icon" />
            </div>
          </button>

          <nav class="flex flex-col items-center mt-10 space-y-2">
            <RouterLink
              v-for="route in routes"
              :key="route.name"
              :to="route.link"
              @click="display"
              class="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              {{ route.name }}</RouterLink
            >
          </nav>
        </nav>
      </div>
    </header>
    <main class="md:flex justify-around items-center pt-28 md:pt-32 px-4 text-center md:text-left">
      <div class="order-first rounded-lg md:w-2/5 md:order-last mb-10 md:mb-0">
        <img
          src="/editedKode.jpg"
          alt="Portrait of Chimdinma Kennedy Ohia"
          class="rounded-lg shadow-lg w-full max-w-sm mx-auto md:mx-0"
        />
      </div>
      <div v-if="showName" class="md:w-1/2">
        <div class="mb-5">
          <p class="text-lg">Hi, I am</p>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">Chimdinma Kennedy Ohia</h1>
          <p class="text-2xl text-primary mt-4">Fullstack Developer</p>
        </div>
      </div>
    </main>

    <div class="hidden md:contents">
      <About id="about" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </div>
  </div>
</template>

<style scoped></style>
