<script setup>
import Headers from './TopicHeader.vue'

const portfolioLists = [
  {
    name: 'Remote Work Landing Page',
    image: '/public/desktop-design (3).jpg',
    stack: 'Frontend',
    description: 'A Landing page for remote work service',
    link: 'https://ken-remote-work.netlify.app/'
  },
  {
    name: 'Theme-Changing Calculator',
    image: '/public/desktop-preview (4).jpg',
    stack: 'Frontend',
    description: 'A simple calculator that changes up to 3 color themes',
    link: 'https://kencalculatorapp.netlify.app/'
  },
  {
    name: 'Tip Calculator',
    image: '/public/desktop-design-completed.jpg',
    stack: 'Frontend',
    description:
      'A simple app that calculates the amount each person in a group contributes to the total amount of a meal and tip too',
    link: 'https://kentipcalc.netlify.app/'
  },
  {
    name: 'Social Media Dashboard',
    image: '/public/desktop-preview (3).jpg',
    stack: 'Frontend',
    description: 'A simple social media dashboard analytics view',
    link: 'https://kensocialmediadb.netlify.app/'
  },
  {
    name: 'Advice Generator',
    image: '/public/desktop-design (2).jpg',
    stack: 'Frontend',
    description: 'A simple site that interacts api that generates random advice',
    link: 'https://kenadvice.netlify.app/'
  },
  {
    name: 'Crappo Landing page',
    image: '/public/Thumbnail.png',
    stack: 'Frontend',
    description: 'A landing page for a web3 project',
    link: 'https://kenadvice.netlify.app/'
  },
  {
    name: 'Fylo Landing Page',
    image: '/public/desktop-preview (5).jpg',
    stack: 'Frontend',
    description: 'A simple landing page',
    link: 'https://kenfylo.netlify.app/'
  },
  {
    name: 'E-commerce App',
    image: '/public/Screenshot 2025-01-12 190607.png',
    stack: 'Frontend',
    description: 'A simple web app that users can view products and make orders.',
    link: 'https://kennyshops.netlify.app/'
  },
  {
    name: 'E-commerce API Documentation',
    image: '/public/postman.png',
    stack: 'Backend',
    description:
      'A team project that I led to build a set of apis for an e-commerce platform that has 3 users- admin, vendor and users',
    link: 'https://documenter.getpostman.com/view/37796078/2sAXjGbYsA'
  }
]
</script>

<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <Headers topic="Portfolio" />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <!-- CARD 1 -->
      <div
        v-for="item in portfolioLists"
        :key="item.name"
        class="rounded overflow-hidden shadow-lg flex flex-col"
      >
        <a href="#"></a>
        <div class="relative">
          <a href="#">
            <img class="w-full" :src="item.image" alt="Sunset in the mountains" />
            <div
              class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"
            ></div>
          </a>
          <a href="#!">
            <div
              class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {{ item.stack }}
            </div>
          </a>
        </div>
        <div class="px-6 py-4 mb-auto">
          <a
            :href="item.link"
            class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >{{ item.name }}</a
          >
          <p class="text-gray-500 text-sm">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
