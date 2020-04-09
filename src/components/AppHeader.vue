<template>
  <header class="app-header" :class="{ 'transparent': $route.path == '/' }">
    <el-row type="flex" justify="space-between">
      <el-col class="logo">
        <img src="https://cdn.dribbble.com/users/2274105/avatars/normal/4b096f602b73fa281991a454ff739d6d.png?1569453556" alt="Mike Lewallen Senior UI/UX Designer" class="image">
        <span class="text">Mike Lewallen<span class="subtext">Senior UI/UX Designer</span></span>
      </el-col>
      <el-col class="links">
        <a v-for="link in socialLinks" :key="link.label" :href="link.path" target="_blank" class="link"><i :class="link.icon"></i></a>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => {
    return {
      socialLinks: [
        { path: 'https://dribbble.com/mlewallen', label: 'Dribbble', icon: 'uil uil-dribbble' },
        { path: 'https://github.com/mlewallen', label: 'Github', icon: 'uil uil-github-alt' },
        { path: 'https://www.linkedin.com/in/michaelwlewallen/', label: 'Linkedin', icon: 'uil uil-linkedin-alt' }
      ]
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
  &.transparent {
    position: absolute;
    width: 100%;
    .logo {
      .text {
        color: white;
        .subtext {
          color: white;
        }
      }
    }
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    .image {
      height: 48px;
      border-radius: 4px;
      margin-right: 8px;
      @media screen and (max-width: 600px) {
        height: 36px;
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