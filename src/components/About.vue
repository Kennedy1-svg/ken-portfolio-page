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
  <div class="border rounded-2xl p-10 shadow-md">
    <Headers topic="About" />
    <p class="text-center text-lg max-w-3xl mx-auto leading-relaxed text-gray-700">
      My name is Chimdinma Kennedy Ohia. I am a software developer and tech instructor. I build and
      contribute to web projects.
    </p>
    <p class="text-center text-xl font-semibold my-8 text-gray-700">| Explore |</p>
    <div class="flex justify-center my-6">
      <SvgIcons name="seperator" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <div
        v-for="item in data"
        :key="item.title"
        class="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all"
      >
        <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ item.title }}</h1>
        <p class="text-gray-600 text-justify">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
