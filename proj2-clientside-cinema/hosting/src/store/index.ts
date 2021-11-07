import Vue from 'vue'
import Vuex from 'vuex'
import { firestoreAction, vuexfireMutations } from 'vuexfire'
import { db } from '@/_services/firebase-initialized'
import { Cinema, Film, Screening, Ticket } from './models'
import { keyBy } from 'lodash'

Vue.use(Vuex)

export interface Store {
  locations: string[]
  activeLocation: string
  cinemas: Cinema[]
  films: Film[]
  screenings: Screening[]
  tickets: Ticket[]
}

const store = new Vuex.Store<Store>({
  state: {
    locations: ['Bangkok', 'Chiang Mai', 'Phitsanulok'],
    activeLocation: 'Phitsanulok',
    cinemas: [],
    films: [],
    screenings: [],
    tickets: []
  },
  getters: {
    cinemasBySlug: (state) => keyBy(state.cinemas, 'slug'),
    filmsBySlug: (state) => keyBy(state.films, 'slug'),
    screeningsBySlug: (state) => keyBy(state.screenings, 'slug'),
    cinemaForSlug: (_state, getters) => (cinemaSlug: string) => getters.cinemasBySlug[cinemaSlug],
    filmForSlug: (_state, getters) => (filmSlug: string) => getters.filmsBySlug[filmSlug],
    screeningForSlug: (_state, getters) => (screeningSlug: string) => getters.screeningsBySlug[screeningSlug],
    screeningsForCinema: (state) => (cinemaSlug: string) => state.screenings
      .filter(s => s.cinemaSlug === cinemaSlug)
      .sort((s1, s2) => s1.timeString.localeCompare(s2.timeString)),
    screeningsForFilm: (state, getters) => (filmSlug: string) => state.screenings
      .filter(s => s.filmSlug === filmSlug && getters.cinemasBySlug[s.cinemaSlug].city === state.activeLocation)
      .sort((s1, s2) => s1.timeString.localeCompare(s2.timeString))
  },
  mutations: {
    ...vuexfireMutations,
    'location/set': (state, location) => { state.activeLocation = location }
  },
  actions: {
    init: firestoreAction(async ({ bindFirestoreRef }) => await Promise.all([
      bindFirestoreRef('cinemas', db.collection('cinemas')),
      bindFirestoreRef('films', db.collection('films')),
      bindFirestoreRef('screenings', db.collection('screenings')),
      bindFirestoreRef('tickets', db.collection('users').doc('chaz').collection('tickets'))
    ])),
    changeLocation: ({ commit }, location) => {
      commit('location/set', location)
    }
  }
})

void store.dispatch('init')

export default store
