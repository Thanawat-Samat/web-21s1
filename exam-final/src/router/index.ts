import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import AthleteList from '@/views/AthleteList.vue'
import AthleteDetails from '@/views/AthleteDetails.vue'
import AthleteCreate from '@/views/AthleteCreate.vue'
import EntryList from '@/views/EntryList.vue'
import EntryDetails from '@/views/EntryDetails.vue'
import EntryCreate from '@/views/EntryCreate.vue'
import ResultList from '@/views/ResultList.vue'
import ResultDetails from '@/views/ResultDetails.vue'
import ResultCreate from '@/views/ResultCreate.vue'
import SportList from '@/views/SportList.vue'
import SportDetails from '@/views/SportDetails.vue'
import SportCreate from '@/views/SportCreate.vue'
import TeamList from '@/views/TeamList.vue'
import TeamDetails from '@/views/TeamDetails.vue'
import TeamCreate from '@/views/TeamCreate.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
