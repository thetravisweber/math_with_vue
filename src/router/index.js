import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrimeFactors from '../views/PrimeFactors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prime-factors',
    name: 'Home',
    component: PrimeFactors
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
