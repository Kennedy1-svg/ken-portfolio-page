<script setup>
import Headers from './TopicHeader.vue'

//
const stacks = [
  { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
  { name: 'Nestjs', iconClass: 'devicon-nestjs-plain colored' },
  { name: 'Javascript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'ReactJs', iconClass: 'devicon-react-original colored' },
  { name: 'NextJs', iconClass: 'devicon-nextjs-original colored' },
  { name: 'VueJs', iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Tailwind', iconClass: 'devicon-tailwindcss-plain colored' },
  { name: 'NodeJs', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'Postman', iconClass: 'devicon-postman-plain colored' },
  { name: 'ExpressJs', iconClass: 'devicon-express-original colored' },
  { name: 'Git', iconClass: 'devicon-git-plain colored' },
  { name: 'Typescript', iconClass: 'devicon-typescript-plain colored' }
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
