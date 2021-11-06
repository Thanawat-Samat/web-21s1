import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CinemaList from '../views/CinemaList.vue'
import CinemaDetails from '../views/CinemaDetails.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cinemas',
    name: 'CinemaList',
    component: CinemaList
  },
  {
    path: '/cinemas/:slug',
    name: 'CinemaDetails',
    component: CinemaDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
