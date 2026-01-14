<script setup>
import Headers from './TopicHeader.vue'

//
const stacks = [
  // Core Web
  { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },

  // Frontend
  { name: 'ReactJS', iconClass: 'devicon-react-original colored' },
  { name: 'Next.js', iconClass: 'devicon-nextjs-original colored' },
  { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Nuxt.js', iconClass: 'devicon-nuxtjs-plain colored' },
  { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },

  // Backend
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', iconClass: 'devicon-express-original colored' },
  { name: 'NestJS', iconClass: 'devicon-nestjs-plain colored' },
  { name: 'Socket.IO', iconClass: 'devicon-socketio-original colored' },

  // Database
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },

  // Dev Tools
  { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
  { name: 'GitHub Actions', iconClass: 'devicon-github-original colored' }, // GitHub Actions doesn’t have official devicon, Git logo used
  { name: 'Git', iconClass: 'devicon-git-plain colored' },

  { name: 'Postman', iconClass: 'devicon-postman-plain colored' },
  { name: 'Prisma', iconClass: 'devicon-prisma-plain colored' }
]
</script>

<!-- <template>
  <div class="border p-3">
    <Headers topic="Stacks" />
    <h2 class="text-center my-3 text-xl">Stacks Used</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 items-center text-center md:mx-20 pl-20">
      <li v-for="stack in stacks" :key="stack.name">
        <p class="my-3 border w-2/3 p-3 bg-green-500 text-white rounded-md">{{ stack.name }}</p>
      </li>
    </ul>
  </div>
</template> -->

<template>
  <div class="border p-6 rounded-2xl shadow-md">
    <Headers topic="Stacks" />
    <h2 class="text-center text-2xl font-bold text-gray-700 mb-6">Stacks Used</h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
      <li v-for="stack in stacks" :key="stack.name">
        <div
          class="rounded-xl p-4 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
        >
          <i :class="`${stack.iconClass} text-4xl mb-2`"></i>
          <p class="font-semibold">{{ stack.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
