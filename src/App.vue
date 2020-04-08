<template>
  <div id="app">
    <app-header />
    <router-view/>
    <app-navigation />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNavigation from './components/AppNavigation'

export default {
  components: {
    AppHeader,
    AppNavigation
  },
  data: () => {

  }
}
</script>

<style>
#app {
  padding-bottom: 48px;
}
</style>
