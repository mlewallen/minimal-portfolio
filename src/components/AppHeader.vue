<template>
  <header class="app-header" :class="{ 'transparent': $route.path == '/' }">
    <el-row type="flex" justify="space-between">
      <el-col class="logo">
        <app-logo class="image" :class="{ 'dark': $route.path !== '/' }"/>
        <span class="text">Mike Lewallen<span class="subtext">Senior UI/UX Designer</span></span>
      </el-col>
      <el-col class="links">
        <a v-for="link in socialLinks" :key="link.label" :href="link.path" target="_blank" class="link"><i :class="link.icon"></i></a>
      </el-col>
    </el-row>
    <div v-if="$route.path !== '/'" class="pad"></div>
  </header>
</template>

<script>
import AppLogo from './AppLogo';

export default {
  name: 'AppHeader',
  components: {
    AppLogo
  },
  computed: {
    socialLinks: function () {
      return this.$store.state.user.socialLinks
    }
  }
}
</script>

<style lang="scss">
@import '../theme/index.scss';

.app-header {
  padding: 16px;
  position: relative;
  z-index: 1000;
  box-sizing: border-box;
  transition: $--transition-default;

  &.transparent {
    background-color: transparent;
    transition-delay: .25s;

    .logo {
      transition: $--transition-default;
      
      .text {
        color: white;
        transition: $--transition-default;

        .subtext {
          color: white;
          transition: $--transition-default;
        }
      }
    }

    .links {
      .link {
        &:hover {
          background: rgba(255,255,255,.075);
        }
      }
    }
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: $--transition-default;

    .image {
      width: 48px;
      border-radius: 4px;
      margin-right: 8px;
      transition: $--transition-default;

      &.dark {
        .cls-1 {
          fill:$--color-black;
          transition: $--transition-default;
        }
      }

      .cls-1 {
        transition: $--transition-default;
      }

      @media screen and (max-width: 600px) {
        width: 36px;
      }
    }

    .text {
      font-weight: 600;
      color: $--color-text-primary;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }

      .subtext {
        color: $--color-text-regular;
        font-weight: 600;
        font-size: 13px;
        margin-top: 2px;
        opacity: .6;

        @media screen and (max-width: 600px) {
          font-size: 11px;
        }
      }
    }
  }
  .links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .link {
      font-size: 24px;
      width: 48px;
      height: 48px;
      display: flex;
      flex-direction: column ;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: transparent;
      border-radius: 27px;

      &:hover {
        background: lighten($--color-text-secondary,35%);
      }
    }
  }
}
</style>