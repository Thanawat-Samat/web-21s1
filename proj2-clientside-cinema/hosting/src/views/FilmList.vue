<template>
  <div class="film-list">
    <h1 class="title">Films</h1>
    <div class="film-grid">
      <router-link
        v-for="film in films"
        :key="film.slug"
        :to="{
          name: 'FilmDetails',
          params: { slug: film.slug },
        }"
        ><img :src="`/images/films/${film.slug}.jpg`" :alt="`${film.title}`" />
        <p class="is-size-4 has-text-dark has-text-weight-bold">
          {{ film.title }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'
@Component({
  computed: mapState(['films'])
})
export default class FilmList extends Vue { }
</script>

<style scoped>
.film-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1rem;
}
</style>
