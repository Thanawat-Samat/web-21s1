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
        <!-- ATHLETES -->
        <!-- <b-navbar-item tag="router-link" :to="{ name: 'AthleteDetails', params: { athleteSlug: 'ahmed-hafnaoui' } }">Athlete: Ahmed</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'AthleteList' }">Athletes</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'AthleteCreate' }">Create Athlete</b-navbar-item> -->

        <!-- ENTRIES -->
        <!-- <b-navbar-item tag="router-link" :to="{ name: 'EntryDetails', params: { entrySlug: 'elaine-thompson-herah' } }">Entry: Elaine</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'EntryList' }">Entries</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'EntryCreate' }">Create Entry</b-navbar-item> -->

        <!-- RESULTS -->
        <!-- <b-navbar-item tag="router-link" :to="{ name: 'ResultDetails', params: { resultSlug: 'brandon-starc' } }">Result: Brandon</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'ResultList' }">Results</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'ResultCreate' }">Create Result</b-navbar-item> -->

        <!-- SPORTS -->
        <!-- <b-navbar-item tag="router-link" :to="{ name: 'SportDetails', params: { sportSlug: 'sprinting' } }">Sport: Sprinting</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'SportList' }">Sports</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'SportCreate' }">Create Sport</b-navbar-item> -->

        <!-- TEAMS -->
        <!-- <b-navbar-item tag="router-link" :to="{ name: 'TeamDetails', params: { teamSlug: 'usa' } }">Team: USA</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'TeamList' }">Teams</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'TeamCreate' }">Create Team</b-navbar-item> -->
      </template>
    </b-navbar>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>
