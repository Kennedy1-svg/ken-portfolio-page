<script setup>
import Headers from './TopicHeader.vue'

const portfolioLists = [
  {
    name: 'E-commerce App',
    image: '/Screenshot 2025-01-12 190607.png',
    stack: 'Frontend',
    description: 'A simple web app that users can view products and make orders.',
    link: 'https://kennyshops.netlify.app/'
  },
  {
    name: 'Backoffice',
    image: '/Screenshot 2025-04-29 180027.png',
    stack: 'Frontend',
    description:
      'Built and contributed to the admin panel/back office site that manages and stores data to this website',
    link: 'https://walurecapital.com/'
  },
  {
    name: 'Remote Work Landing Page',
    image: '/desktop-design (3).jpg',
    stack: 'Frontend',
    description: 'A Landing page for remote work service',
    link: 'https://ken-remote-work.netlify.app/'
  },
  {
    name: 'Fylo Landing Page',
    image: '/desktop-preview (5).jpg',
    stack: 'Frontend',
    description: 'A simple landing page',
    link: 'https://kenfylo.netlify.app/'
  },
  {
    name: 'Theme-Changing Calculator',
    image: '/desktop-preview (4).jpg',
    stack: 'Frontend',
    description: 'A simple calculator that changes up to 3 color themes',
    link: 'https://kencalculatorapp.netlify.app/'
  },
  {
    name: 'Tip Calculator',
    image: '/desktop-design-completed.jpg',
    stack: 'Frontend',
    description:
      'A simple app that calculates the amount each person in a group contributes to the total amount of a meal and tip too',
    link: 'https://kentipcalc.netlify.app/'
  },
  {
    name: 'Social Media Dashboard',
    image: '/desktop-preview (3).jpg',
    stack: 'Frontend',
    description: 'A simple social media dashboard analytics view',
    link: 'https://kensocialmediadb.netlify.app/'
  },
  {
    name: 'E-commerce API Documentation',
    image: '/postman.png',
    stack: 'Backend',
    description:
      'A team project that I led to build a set of apis for an e-commerce platform that has 3 users- admin, vendor and users',
    link: 'https://documenter.getpostman.com/view/37796078/2sAXjGbYsA'
  }
]
</script>
<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <Headers topic="Portfolio" />
    <p class="text-center text-gray-700 mb-8 text-lg">
      Some of what I have been able to work on...
    </p>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="item in portfolioLists"
        :key="item.name"
        class="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col"
      >
        <a :href="item.link" target="_blank" rel="noopener noreferrer" class="block relative group">
          <img
            class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            :src="item.image"
            :alt="item.name"
          />
          <div
            class="absolute top-0 right-0 mt-3 mr-3 px-3 py-1 text-xs font-semibold bg-darkBlue text-white rounded"
          >
            {{ item.stack }}
          </div>
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300"
          ></div>
        </a>
        <div class="p-4 flex-grow">
          <h3 class="text-lg font-semibold mb-2 hover:text-primaryDark transition">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
          </h3>
          <p class="text-sm text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
