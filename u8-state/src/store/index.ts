import { db } from '@/_services/firebase-initialized'
import { keyBy, sumBy } from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import { firestoreAction, vuexfireMutations } from 'vuexfire'
import { Book, Video } from './models'

Vue.use(Vuex)

export interface Store {
  videos: Video[]
  watchLater: string[]
  books: Book[]
  cartIsbn13s: string[]
}

const store = new Vuex.Store<Store>({
  state: {
    videos: [],
    watchLater: [],
    books: [],
    cartIsbn13s: []
  },
  getters: {
    videosById: state => keyBy(state.videos, 'id'),
    watchLaterCount: state => state.watchLater.length,
    watchLaterFull: (state, getters) => state.watchLater.map(
      id => getters.videosById[id]
    ),
    booksByIsbn13: state => keyBy(state.books, 'isbn13'),
    cart: (state, getters) => state.cartIsbn13s.map(isbn13 =>
      getters.booksByIsbn13[isbn13]),
    cartCount: state => state.cartIsbn13s.length,
    cartTotal: (_state, getters) => sumBy(getters.cart, 'price')
  },
  mutations: {
    ...vuexfireMutations,
    'watchLater/push': (state, id: string) => {
      if (state.watchLater.includes(id)) return
      state.watchLater.push(id)
    },
    'watchLater/splice': (state, id: string) => {
      const index = state.watchLater.indexOf(id)
      if (index === -1) return
      state.watchLater.splice(index, 1)
    },
    'cartIsbn13s/push': (state, isbn13: string) => {
      if (state.cartIsbn13s.includes(isbn13)) return
      state.cartIsbn13s.push(isbn13)
    }
  },
  actions: {
    init: firestoreAction(({ bindFirestoreRef }) => Promise.all([
      bindFirestoreRef('videos', db.collection('videos')),
      bindFirestoreRef('books', db.collection('books'))
    ])),
    addToWatchLater: ({ commit }, id: string) => commit('watchLater/push', id),
    addToCart: ({ commit }, isbn13: string) => commit('cartIsbn13s/push', isbn13),
    removeFromWatchLater: ({ commit }, id: string) => commit('watchLater/splice', id)
  },
  modules: {
  }
})

store.dispatch('init')
export default store
