<template>
  <div class="page-team-create">
    <div class="section">
      <p class="title is-2">Create Team</p>

      <b-field label="Introduction" label-position="on-border">
        <b-input type="textarea" />
      </b-field>

      <b-field label="Name" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="Rank" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Slug" label-position="on-border">
        <b-input />
      </b-field>

      <b-field label="1st-place medals" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="2nd-place medals" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="3rd-place medals" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Total medals" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-button type="is-primary" size="is-large" expanded>Save Team</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Team } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TeamCreate extends Vue {
  slug = 'thailand'
  name = 'Thailand'
  rank = 59
  countFirst = 1
  countSecond = 0
  countThird = 1
  countTotal = 2
  introduction = 'Thailand excels at combat sports and weightlifting'

  async save (): Promise<void> {
    const { slug, name, rank, countFirst, countSecond, countThird, countTotal, introduction } = this
    const team: Team = { slug, name, rank, countFirst, countSecond, countThird, countTotal, introduction }
    // TODO: Save & redirect
  }
}
</script>
