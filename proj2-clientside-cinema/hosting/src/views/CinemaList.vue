<template>
  <div class="cinema-list content">
    <h1 class="title">Cinemas</h1>
    <ul>
      <li class="is-size-4" v-for="cinema in cinemas" :key="cinema.id">
        <router-link
          :to="{
            name: 'CinemaDetails',
            params: { slug: cinema.slug },
          }"
        >
          {{ cinema.name }}
        </router-link>
        <span class="is-size-5 is-uppercase has-text-weight-light">
          - {{ cinema.city }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'
@Component({
  computed: mapState(['cinemas'])
})
export default class CinemaList extends Vue { }
</script>
