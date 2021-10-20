<template>
  <div class="page-sport-create">
    <div class="section">
      <p class="title is-2">Create Sport</p>
      <table style="width:100%">
      <tr>
        <td>
          <b-field label="Event Count" label-position="on-border">
            <b-input type="number" />
          </b-field>
        </td>

        <td>
          <b-field label="Name" label-position="on-border" class="ML15">
            <b-input />
          </b-field>
        </td>

        <td>
          <b-field label="Slug" label-position="on-border" class="ML15">
            <b-input />
          </b-field>
        </td>
      </tr>
      </table>
      <b-field label="Description" label-position="on-border" class="topM15">
        <b-input type="textarea" />
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

<style scoped>
.topM15 {
  margin-top: 15px;
}
.ML15 {
  margin-left: 15px;
}
</style>
