<template>
  <div class="cinema-details">
     <h1 class="title">{{ cinema.name }}</h1>
    <div class="screening-grid">
      <router-link
        v-for="screening in screenings"
        :key="screening.slug"
        :to="{
          name: 'Book',
          params: { slug: screening.slug },
        }"
        ><img
          :src="`/images/films/${screening.filmSlug}.jpg`"
          :alt="`${screening.filmName}`"
        />
        <p class="is-size-6">Screen {{ screening.screen }}</p>
        <p class="is-size-3 has-text-weight-medium">
          {{ screening.timeString }}
        </p>
        <p class="is-size-5 has-text-weight-light">{{ screening.filmName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Cinema, Screening } from '@/store/models'

@Component
export default class CinemaDetails extends Vue {
  get cinema (): Cinema | undefined {
    return this.$store.getters.cinemaForSlug(this.$route.params.slug)
  }

  get screenings (): Screening[] {
    return this.$store.getters.screeningsForCinema(this.$route.params.slug)
  }
}
</script>
<style scoped>
.screening-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
}
.screening-grid img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: 50% 45%;
}
.screening-grid p {
  margin-bottom: -5px ;
}
</style>
