<template>
  <div class="book-details" v-if="book">
    <img :src="`/images/books/${book.isbn13}.jpg`" :alt="book.title" />
    <button @click="addToCart(book.isbn13)">Add to Cart</button>
    <p>{{ book.description }}</p>

    <h2>You might also like...</h2>
    <div class="related">
      <BookCard
        v-for="book in relatedBooks"
        :key="`book-related-${book.isbn13}`"
        :book="book"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BookCard from './BookCard.vue'
import { Book } from '@/store/models'

@Component({ components: { BookCard } })
export default class BookDetails extends Vue {
  get book(): Book | null { return null }
  get relatedBooks(): Book[] { return [] }
}
</script>

<style scoped>
.book-details {
  padding: 0.5rem 1rem;
}

button {
  display: block;
  font-size: 2rem;
  margin-top: 1rem;
  padding: 1rem;
  color: white;
  background-color: #333333;
}

.related {
  padding-top: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 10rem;
  grid-gap: 1rem;
  max-width: 100%;
  overflow-x: scroll;
}
</style>
