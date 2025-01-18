import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
