<template>
  <div class="page-result-create">
    <div class="section">
      <p class="title is-2">Create Result</p>

      <b-field label="Attempts" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Distance" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Name" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Order" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Rank" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Record" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Slug" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Team Slug" label-position="on-border">
        <b-input />
      </b-field>

      <b-button type="is-primary" size="is-large" expanded>Save Result</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Result } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'tom-gale'
  name = 'Tom Gale'
  teamSlug = 'great-britain'
  order = 5
  rank = 11
  record = 'HM'
  distance = '2.30'
  attempts = '2.19: o · 2.24: o · 2.27: o · 2.30: xxx'

  async save (): Promise<void> {
    const { slug, name, teamSlug, order, rank, distance, record, attempts } = this
    const result: Result = { slug, name, teamSlug, order, rank, distance, record, attempts }
    // TODO: Save & redirect
  }
}
</script>
