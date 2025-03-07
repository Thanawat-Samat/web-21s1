import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import VideoPlayer from '@/views/VideoPlayer.vue'
import BookSearch from '@/views/BookSearch.vue'
import BookDetails from '@/views/BookDetails.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos/:videoId',
    name: 'VideoPlayer',
    component: VideoPlayer
  },
  {
    path: '/books',
    name: 'BookSearch',
    component: BookSearch
  },
  {
    path: '/books/:isbn13',
    name: 'BookDetails',
    component: BookDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
