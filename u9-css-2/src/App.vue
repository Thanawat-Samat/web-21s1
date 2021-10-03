<template>
  <div id="app">

 <b-navbar type="is-primary" >
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" class="is-size-4 pl-5">
          <b-icon
          icon="book-open-page-variant mr-5 "
          size="is-medium"
          >
          </b-icon>
          BEC Books
        </b-navbar-item>
      </template>

        <template #end>
          <b-navbar-item tag="router-link" :to="{ path: '/Search' } ">
                Search
            </b-navbar-item>

             <b-navbar-item tag="router-link" :to="{ path: '/Promo' }">
                Promo
            </b-navbar-item>

          <b-navbar-dropdown boxed collapsible hoverable >
            <template #label>
              <b-icon
                icon="cart-outline "
                >
            </b-icon>
            <p class="is-size-4">5</p>
            </template>

              <b-navbar-item tag="router-link" :to="{ path: '/978-1680502992' }">
              <div v-for="book in cart" :key="book.isbn13">
                <img
                  :src="`/images/books/${book.isbn13}.jpg`"
                  :alt="book.title"
                >
                <p>
                  {{ book.title }}<br>
                  {{ book.price.toLocaleString() }} THB
                </p>
              </div>
              </b-navbar-item>

            <b-button
              class="is-primary m-3 centered"
              expanded
            >
                Checkout
            </b-button>
          </b-navbar-dropdown>

        </template>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters } from 'vuex'
@Component({
  computed: {
    ...mapGetters(['cart'])
  }
})
export default class BookCart extends Vue { }
</script>

<style scoped>
.navbar-item img {
  max-height: 3rem;
  vertical-align: top;
}

.navbar-item p {
  display: inline-block;
}
</style>
