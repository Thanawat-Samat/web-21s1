<template>
  <div>
    <b-navbar type="is-primary" wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
          <img src="/images/sports/rhythmic.png" style="filter: invert(1)" class="mr-1" />
          <span class="is-size-4">BEC Olympics</span>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'SportDetails', params: { sportSlug: 'sprinting' } }">Sport: Sprinting</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'SportList' }">Sports</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'SportCreate' }">Create Sport</b-navbar-item>
      </template>
    </b-navbar>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>
