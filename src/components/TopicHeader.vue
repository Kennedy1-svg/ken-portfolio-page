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
      class="about text-white bg-primaryDark rounded-md text-center font-bold text-2xl my-5 w-full md:w-1/5 p-2"
    >
      {{ props.topic }}
    </h1>
  </div>
</template>
