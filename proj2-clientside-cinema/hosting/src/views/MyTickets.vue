<template>
  <div class="tickets">
    <h1 class="title">My Tickets</h1>
    <div class="ticket-list">
      <div class="ticket" v-for="ticket in tickets" :key="ticket.id">
        <div>
          <h1 class="title is-size-2 has-text-weight-bold">
            {{ ticket.filmName }} - {{ ticket.timeString }}
          </h1>
          <p>
            {{ ticket.cinemaName }}<br />Screen {{ ticket.screen }}<br />Booking
            date: {{ ticket.createdAt.toDate().toLocaleString() }}
          </p>
        </div>
        <div class="ticket-seats is-size-3">
          <span v-if="ticket.seats.length > 6">
            {{ ticket.seats.slice(0, 4).join(' ') }}
            +{{ ticket.seats.length - 4 }}</span
          ><span v-else>{{ ticket.seats.join(' ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'
@Component({
  computed: mapState(['tickets'])
})
export default class Tickets extends Vue { }
</script>

<style scoped>
.ticket-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 1rem;
}
.ticket {
  border: 1px solid #363636;
  display: grid;
  grid-template-columns: 1fr 8rem;
}
.ticket-seats {
  font-family: monospace;
  font-size: 1.75rem;
  text-align: right;
  word-wrap: break-word;
}
.ticket div {
  padding: 1rem;
}
</style>
