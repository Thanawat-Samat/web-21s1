<template>
  <div class="page-entry-create">
    <div class="section">
      <p class="title is-2">Create Entry</p>

      <b-field label="Lane" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Name" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="PB 100" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="PB 200" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="SB 100" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="SB 200" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Slug" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Team" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Team Slug" label-position="on-border">
        <b-input />
      </b-field>

      <b-button type="is-primary" size="is-large" expanded>Save Entry</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'ajila-del-ponte'
  name = 'Ajila del Ponte'
  teamSlug = 'other'
  team = 'Other'
  lane = 8
  sb100 = '10.91'
  sb200 = '-'
  pb100 = '10.91'
  pb200 = '23.02'

  async save (): Promise<void> {
    const { slug, name, teamSlug, team, lane, sb100, sb200, pb100, pb200 } = this
    const entry: Entry = { slug, name, teamSlug, team, lane, sb100, sb200, pb100, pb200 }
    // TODO: Save & redirect
  }
}
</script>
