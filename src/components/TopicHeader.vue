<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  topic: {
    type: String
  }
})

const { topic } = toRefs(props)
</script>
<template>
  <div class="flex justify-center">
    <h1
      class="about text-center font-bold text-2xl my-5 border w-full md:w-1/5 p-2 border-2 border-green-500"
    >
      {{ props.topic }}
    </h1>
  </div>
</template>
