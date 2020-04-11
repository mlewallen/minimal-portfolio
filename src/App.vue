<template>
  <div id="app">
    <div class="loader" v-loading="loading">
      <app-logo v-show="loading" class="logo dark" />
    </div>
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
import AppLogo from './components/AppLogo'

export default {
  components: {
    AppHeader,
    AppNavigation,
    AppLogo
  },
  computed: {
    loading: function () {
      return this.$store.state.loading
    }
  }
}
</script>

<style lang="scss">
@import './theme/index.scss';

#app {
  padding-bottom: 80px;

  .fade-enter-active, .fade-leave-active {
    transition: all .35s ease;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(-4px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
  }

  .loader {

    .el-loading-mask {
      min-height: 100vh;
      position: fixed !important;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10000;
      background: rgba(255,255,255,1);
    }

    .el-loading-spinner {
      margin-top: 0;
      transform: translateY(-50%);

      .circular {
        height: 64px;
        width: 64px;
        display: none;
      }
    }

    .logo.dark {
      position: fixed;
      z-index: 10001;
      top: 50%;
      left: 50%;
      width: 200px;
      transform: translate(-50%,-50%);

      @keyframes lineMove {
        0% {
          stroke-dashoffset: 500;
        }
        100% {
          stroke-dashoffset: 100;
          fill: $--color-primary;
        }
      }

      .cls-1{
        fill: transparent;
        stroke-dasharray: 100px;
        stroke: $--color-primary;
        stroke-width: 3px;
        animation: lineMove 3s ease infinite;
      }
    }
  }
}

</style>
