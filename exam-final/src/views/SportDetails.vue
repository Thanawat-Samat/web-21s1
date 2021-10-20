<template>
  <div class="page-sport-details">
      <p class="is-size-3 has-text-weight-bold topM15 LM15">Sprinting</p>
      <p class="topM15">Run as fast as you can! Run as fast as anyone can! Sprinting includes 100m, 200m, 400m, and relays. These events are the flag-bearers of athletics.</p>
      <p class="topM15 has-text-weight-bold">EventCount: 11</p>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportDetails extends Vue {
  get Sport (): Sport | undefined {
    return this.$store.getters.sportsBySlug[this.$route.params.slug]
  }
}
</script>

<style scoped>
.imgaa {
  width: 2%;
  height: 2%;
  margin-right: 1rem;
}
.topM15 {
  margin-top: 15px;
}
.LM15 {
  margin-left: 15px;
}
</style>
