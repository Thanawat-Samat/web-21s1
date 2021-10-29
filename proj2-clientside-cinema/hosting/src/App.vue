<template>
  <div id="app" class="has-background-light">
    <b-navbar class="is-dark" wrapper-class="container">
      <template #brand>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'Home' }"
          class="is-size-3 has-text-weight-bold navbar-brand"
        >
          BECinema
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="/cinemas">Cinemas</b-navbar-item>
        <b-navbar-item href="/films">Films</b-navbar-item>
      </template>

      <template #end>
        <b-navbar-dropdown class="has-dropdown navbar-item has-dropdown">
          <template #label>
            <b-icon icon="map-marker-radius-outline" class="mr-2"></b-icon>
            Bangkok
          </template>
          <b-navbar-item href="#">Bangkok</b-navbar-item>
          <b-navbar-item href="#">Chiang Mai</b-navbar-item>
          <b-navbar-item href="#">Phitsanulok</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown class="has-dropdown navbar-item has-dropdown">
          <template #label>
            <img
              src="images\accounts\chaz.jpg"
              alt="Chaz"
              style="border-radius: 50%"
              class="mr-2"
            />
            Chaz
          </template>
          <b-navbar-item href="/tickets">My Tickets</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>

    <div class="container py-5">
      <router-view />
      <div class="m-6 p-6" />
    </div>

    <div class="layout-footer has-text-light has-background-dark py-5">
      <div class="container">
        <ol>
          <li>
            <router-link :to="{ name: 'CinemaList' }">Cinema List</router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'CinemaDetails',
                params: { slug: 'phitsanulok-bec-auditorium' },
              }"
            >
              Cinema Details
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'FilmList' }">Film List</router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'FilmDetails',
                params: { slug: 'black-pink-movie' },
              }"
            >
              Film Details
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'Book',
                params: {
                  slug: 'phitsanulok-bec-auditorium,1,1628863200',
                },
              }"
            >
              Booking Form
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Tickets' }">My Tickets</router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
@import './main.scss';

.image {
  display: inline-block;
  vertical-align: bottom;
}

.layout-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.layout-footer ol {
  margin: 0;
  padding: 0 0 0 1rem;
  column-count: 3;
  column-gap: 2rem;
}

.layout-footer li {
  padding-left: 0.5rem;
  padding-top: 0.25rem;
}

.layout-footer ol a,
.layout-footer ol a:hover {
  background: inherit;
  color: $light;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
