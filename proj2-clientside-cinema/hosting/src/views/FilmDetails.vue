<template>
  <div class="film-details">
    <h1 class="title">{{ film.title }}</h1>
    <div class="film-details-layout">
      <div class="film-details-list">
        <router-link
          class="box has-text-primary"
          v-for="screening in screenings"
          :key="screening.slug"
          :to="{
            name: 'Book',
            params: { slug: screening.slug },
          }"
        >
          <p class="is-size-3">{{ screening.timeString }}</p>
          <p class="is-size-6 has-text-weight-light">
            {{ screening.cinemaName }} - Screen {{ screening.screen }}
          </p>
        </router-link>
      </div>
      <div>
        <img :src="`/images/films/${film.slug}.jpg`" :alt="`${film.title}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Film, Screening } from '@/store/models'
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class FilmDetails extends Vue {
  get film (): Film | undefined {
    return this.$store.getters.filmForSlug(this.$route.params.slug)
  }

  get screenings (): Screening[] {
    return this.$store.getters.screeningsForFilm(this.$route.params.slug)
  }
}
</script>

<style scoped>
.film-details-layout {
  display: grid;
  grid-template-columns: 1fr minmax(12rem, 24rem);
  grid-gap: 2rem;
  align-items: start;
}
.film-details-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 0.5rem 2rem;
}
.film-details-layout img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
}
</style>
