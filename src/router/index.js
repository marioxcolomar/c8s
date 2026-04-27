import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Converter from '../views/Converter.vue'
import LengthConverter from '../views/LengthConverter.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/converter/:id', name: 'Converter', component: Converter },
  { path: '/converter/length', name: 'LengthConverter', component: LengthConverter }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})