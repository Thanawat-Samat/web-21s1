<template>
  <div class="page-team-list">
    <p class="is-size-3 has-text-weight-bold topM15">Sport</p>
    <div class="topM15">
      <img src="\images\sports\gymnastics.png" class="imgaa" />
      <a href="/sports/gymnastics ">Gymnastics</a>
      <br />
      <img src="\images\sports\sprinting.png" class="imgaa" />
      <a href="/sports/sprinting">Sprinting</a>
      <br />
      <img src="\images\sports\swimming.png" class="imgaa" />
      <a href="/sports/swimming">Swimming</a>
      <br />
      <img src="\images\sports\weight-lifting.png" class="imgaa" />
      <a href="/sports/weight-lifting">Weight Lifting</a>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportList extends Vue {
  get Sport (): Sport[] {
    return this.$store.state.sports.sort((a: Sport, b: Sport) => a.name.localeCompare(b.name))
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
</style>
