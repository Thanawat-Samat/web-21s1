<template>
  <div v-if="screening"></div>
</template>

<script lang="ts">
import { Screening } from '@/store/models'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Book extends Vue {
  screening: Screening | null = null
  seats: string[] = []
}
</script>

<style lang="scss" scoped>
@import '../main.scss';

.booking-seats {
  $color-disabled-light: #ccc;
  $color-disabled-dark: #999;
  $color-selected-light: #fff;
  $color-selected-dark: #00c;

  display: grid;
  grid-template-columns: repeat(30, minmax(1.9rem, 2.2rem));
  grid-gap: 0.25rem;

  &.small {
    grid-template-columns: repeat(8, minmax(1.9rem, 2.2rem));
    grid-gap: 0.4rem;
  }

  &.medium {
    grid-template-columns: repeat(16, minmax(1.9rem, 2.2rem));
    grid-gap: 0.25rem;
  }

  input {
    display: none;
  }

  label {
    display: block;
    width: 1.75rem;
    height: 1.75rem;
    border: 1px solid $dark;
    text-align: center;
    line-height: 1.7rem;
    user-select: none;
  }

  input[disabled] + label {
    background-color: $color-disabled-light;
    color: $color-disabled-dark;
    border-color: $color-disabled-dark;
  }

  input:checked + label {
    background-color: $color-selected-dark;
    color: $color-selected-light;
    border-color: $color-selected-dark;
  }

  /*
If I split row & column as a separate attributes, we could simplify:

.booking-seats label {
  grid-row-start: attr(data-seat-row number, 100);
  grid-column-start: attr(data-seat-column number, 1);
}

...I didn't because I want to make the Firestore queries easy ;)
*/

  label[id^='label-seats-1'] {
    grid-row-start: 1;
  }

  label[id^='label-seats-2'] {
    grid-row-start: 2;
  }

  label[id^='label-seats-3'] {
    grid-row-start: 3;
  }

  label[id^='label-seats-4'] {
    grid-row-start: 4;
  }

  label[id^='label-seats-5'] {
    grid-row-start: 5;
  }

  label[id^='label-seats-6'] {
    grid-row-start: 6;
  }

  label[id$='A'] {
    grid-column-start: 1;
  }

  label[id$='B'] {
    grid-column-start: 2;
  }

  label[id$='C'] {
    grid-column-start: 3;
  }

  label[id$='D'] {
    grid-column-start: 4;
  }

  label[id$='E'] {
    grid-column-start: 5;
  }

  label[id$='F'] {
    grid-column-start: 6;
  }

  label[id$='G'] {
    grid-column-start: 7;
  }

  label[id$='H'] {
    grid-column-start: 8;
  }

  label[id$='I'] {
    grid-column-start: 9;
  }

  label[id$='J'] {
    grid-column-start: 10;
  }

  label[id$='K'] {
    grid-column-start: 11;
  }

  label[id$='L'] {
    grid-column-start: 12;
  }

  label[id$='M'] {
    grid-column-start: 13;
  }

  label[id$='N'] {
    grid-column-start: 14;
  }

  label[id$='O'] {
    grid-column-start: 15;
  }

  label[id$='P'] {
    grid-column-start: 16;
  }
}
</style>
