<template>
 <router-link
   :to="{ name: 'VideoPlayer', params: { videoId: video.id } }"
   class="home-card"
 >
   <div>
     <img :src="`/images/${video.id}.webp`" :alt="video.title" />
     <p>{{ video.duration }}</p>
   </div>
   <p>{{ video.title }}</p>
   <p class="stats">
     {{ video.viewsShort }} views · {{ video.dateRelative }}
   </p>
 </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({ props: ['video'] })
export default class VideoCard extends Vue { }
</script>

<style scoped>
.home-card {
  display: block;
  margin: 8px;
  background-color: #f5f5f5;
  color: #444444;
  border: 1px solid #efefef;
  text-decoration: none;
}
</style>
