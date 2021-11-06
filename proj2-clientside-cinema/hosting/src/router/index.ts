import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CinemaList from '../views/CinemaList.vue'
import CinemaDetails from '../views/CinemaDetails.vue'
import FilmList from '../views/FilmList.vue'
import FilmDetails from '../views/FilmDetails.vue'
import Book from '../views/Book.vue'
import Tickets from '../views/MyTickets.vue'

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
  },
  {
    path: '/films',
    name: 'FilmList',
    component: FilmList
  },
  {
    path: '/films/:slug',
    name: 'FilmDetails',
    component: FilmDetails
  },
  {
    path: '/book/:slug',
    name: 'Book',
    component: Book
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
