<template>
  <div id="app">
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view />
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
  padding-bottom: 80px;

  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}

</style>
