<template>
  <div id="app">
    <app-header />
    <transition name="fade">
      <router-view/>
    </transition>
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
  // data: () => {

  // }
}
</script>

<style lang="scss">
#app {
  padding-bottom: 48px;

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}

</style>
