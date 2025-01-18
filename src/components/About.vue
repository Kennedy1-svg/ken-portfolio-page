<script setup>
import SvgIcons from './SvgIcons.vue'
import Headers from './TopicHeader.vue'

const data = [
  {
    title: 'Development',
    description:
      'I use a variety of development tools, tech stacks, and skills to create tech products, while ensuring adherence to good coding practices throughout the process'
  },
  {
    title: 'Maintenance',
    description:
      'Alongside building and contributing to tech projects, I can maintain codebases, implement new features, and perform relevant testing to ensure smooth deployment of these projects.'
  },
  {
    title: 'Teaching',
    description:
      'I also share my tech knowledge by teaching others, currently focusing on frontend development.'
  }
]
</script>

<template>
  <div class="border p-10">
    <Headers topic="About" />
    <p class="text-center text-md">
      My name is Chimdinma Kennedy Ohia. I am a software developer, as well as a tech instructor. I
      build and contribute to web projects.
    </p>
    <p class="text-center text-xl my-6">| Explore |</p>
    <div class="flex justify-center my-10">
      <SvgIcons name="seperator" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 justify-between">
      <div class="mx-3 p-2" v-for="item in data" :key="item.title">
        <h1 class="text-2xl my-3 font-bold text-center md:text-left">{{ item.title }}</h1>
        <p class="text-md text-justify md:text-left">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
