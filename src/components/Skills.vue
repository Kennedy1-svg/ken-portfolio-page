<script setup>
import Headers from './TopicHeader.vue'

const stacks = [
  {
    name: 'HTML/CSS',
    picture: 'C:/Users/dell/Documents/kennedy-portfolio-page/Ken-portfolio/public/dart.jpeg'
  },
  {
    name: 'Nestjs',
    picture: ''
  },
  {
    name: 'Javascript',
    picture: ''
  },
  {
    name: 'React',
    picture: ''
  },
  {
    name: 'Tailwind',
    picture: ''
  },
  {
    name: 'NodeJs',
    picture: ''
  },
  {
    name: 'MongoDB',
    picture: ''
  },
  {
    name: 'Postman',
    picture: ''
  },
  {
    name: 'ExpressJs',
    picture: ''
  },
  {
    name: 'Docker',
    picture: ''
  },
  {
    name: 'Dart',
    picture: ''
  },
  {
    name: 'Python',
    picture: ''
  },
  {
    name: 'Git',
    picture: ''
  },
  {
    name: 'Data Structures and Algorithm',
    picture: ''
  },
  {
    name: 'Typescript',
    picture: ''
  }
]
</script>

<template>
  <div class="border p-3">
    <Headers topic="Stacks" />
    <h2 class="text-center my-3 text-xl">Stacks Used</h2>
    <ul class="grid grid-cols-1 md:grid-cols-3 items-center text-center md:mx-20 pl-20">
      <li v-for="stack in stacks" :key="stack.name">
        <p class="my-3 border w-2/3 p-3 bg-green-500 text-white rounded-md">{{ stack.name }}</p>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
