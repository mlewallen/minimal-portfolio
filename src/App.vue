<template>
  <div id="app">
    <div class="loader" v-loading="loading">
      <app-logo v-if="false" class="logo dark" />
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
    transition: all .25s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-2px);
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
        // display: none;
      }
    }

    .logo.dark {
      position: absolute;
      z-index: 2001;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);

      .cls-1 {
        fill:$--color-primary;
        animation: colorFlash 3s infinite ease;
        transition: $--transition-default;
      }

      @keyframes colorFlash {
        // 0% {
        //   fill: $--color-primary;
        // }
        // 25% {
        //   fill: $--color-success;
        // }
        // 50% {
        //   fill: $--color-info;
        // }
        // 75% {
        //   fill: $--color-black;
        // }
          0% {
            stroke-dashoffset: 5;
          }
          30% {
            stroke-dashoffset: 0;
            fill-opacity: 0;
            stroke-dasharray: 5;
          }
          50% {
            stroke-dashoffset: 0;
            fill-opacity: 1;
            filter: shadow(0 3px 10px #FF853F);
          }
          100% {
            stroke-dashoffset: 0;
            fill-opacity: 1;
          }
      }
    }
  }
}

</style>
