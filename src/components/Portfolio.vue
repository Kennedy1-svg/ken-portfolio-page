<script setup>
import Headers from './TopicHeader.vue'

const portfolioLists = [
  {
    name: 'Symphonii Studios',
    stack: 'Full Stack',
    description: 'Creative Media E-commerce Platform',
    impact:
      'Integrated secure payment flows and automated notifications, handling real transactions.',
    link: 'https://symphonii-studios.netlify.app/',
    image: '/symphonii.png'
  },
  {
    name: 'Chat Application',
    stack: 'Full Stack',
    description: 'Real-time chat platform',
    impact:
      'Built messaging features with instant updates and smooth UI for real-time communication.',
    link: 'https://ken-chat-app.netlify.app/',
    image: '/chat-app.png'
  },
  {
    name: 'Backoffice',
    stack: 'Frontend',
    description: 'Admin CRM & Dashboard',
    impact:
      'Enabled administrators to manage content and data efficiently, improving site operations.',
    link: 'https://walurecapital.com/',
    image: '/Screenshot 2025-04-29 180027.png'
  },
  {
    name: 'iPOS Web Application',
    stack: 'Frontend',
    description: 'Enterprise POS & Inventory Platform',
    impact: 'Designed responsive interfaces and improved user workflows for inventory management.',
    link: 'https://ipos.walurecapital.com/',
    image: '/ipos-pic.png'
  },
  {
    name: 'Alumunium Calculator App',
    stack: 'Frontend',
    description: 'Quantity calculator for aluminium',
    impact: 'Automates calculation based on user input, saving time and reducing errors.',
    link: 'https://gratefulkennedyalumcalc.netlify.app/',
    image: '/qscalculator.png'
  },
  {
    name: 'E-commerce App',
    stack: 'Frontend',
    description: 'Simple online store',
    impact: 'Users can view products and make orders seamlessly.',
    link: 'https://kennyshops.netlify.app/',
    image: '/Screenshot 2025-01-12 190607.png'
  },
  {
    name: 'Remote Work Landing Page',
    stack: 'Frontend',
    description: 'Landing page for remote work service',
    impact: 'Showcases service offerings clearly with responsive design.',
    link: 'https://ken-remote-work.netlify.app/',
    image: '/desktop-design (3).jpg'
  },
  {
    name: 'Fylo Landing Page',
    stack: 'Frontend',
    description: 'Simple landing page',
    impact: 'Clean design for marketing purposes and improved user engagement.',
    link: 'https://kenfylo.netlify.app/',
    image: '/desktop-preview (5).jpg'
  },
  {
    name: 'Theme-Changing Calculator',
    stack: 'Frontend',
    description: 'Calculator with multiple color themes',
    impact: 'Enhances user experience by allowing theme customization.',
    link: 'https://kencalculatorapp.netlify.app/',
    image: '/desktop-preview (4).jpg'
  },
  {
    name: 'Tip Calculator',
    stack: 'Frontend',
    description: 'Meal tip splitter',
    impact: 'Calculates individual contributions for groups accurately and quickly.',
    link: 'https://kentipcalc.netlify.app/',
    image: '/desktop-design-completed.jpg'
  },
  {
    name: 'E-commerce API Documentation',
    stack: 'Backend',
    description: 'API for multi-user e-commerce platform',
    impact:
      'Led team to create APIs for admin, vendor, and user roles with clear Postman documentation.',
    link: 'https://documenter.getpostman.com/view/37796078/2sAXjGbYsA',
    image: '/postman.png'
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
          <p class="mt-2 text-sm text-gray-500 italic">{{ item.impact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
