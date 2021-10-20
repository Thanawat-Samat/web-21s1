<template>
  <div class="page-sport-create">
    <div class="section">
      <p class="title is-2">Create Sport</p>

      <b-field label="Description" label-position="on-border">
        <b-input type="textarea" />
      </b-field>

      <b-field label="Event Count" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Name" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Slug" label-position="on-border">
        <b-input />
      </b-field>

      <b-button type="is-primary" size="is-large" expanded>Save Sport</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'taekwondo'
  name = 'Taekwondo'
  description = 'Originally from Korea, Taekwondo is a martial art that focuses on kicking.'
  eventCount = 8

  async save (): Promise<void> {
    const { slug, name, description, eventCount } = this
    const sport: Sport = { slug, name, description, eventCount }
    // TODO: Save & redirect
  }
}
</script>
