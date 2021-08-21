import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Colors from '@/views/Colors.vue'
import Profile from '@/views/Profile.vue'
import Converter from '@/views/Converter.vue'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors
  },
  {
    path: '/profile/edit',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/converter',
    name: 'Converter',
    component: Converter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
