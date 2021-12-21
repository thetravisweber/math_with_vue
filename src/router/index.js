import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrimeFactors from '../views/PrimeFactors.vue'
import GameTheoryJesus from '../views/GameTheoryJesus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prime-factors',
    name: 'PrimeFactors',
    component: PrimeFactors
  },
  {
    path: '/game-theory-jesus',
    name: 'GameTheoryJesus',
    component: GameTheoryJesus
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
