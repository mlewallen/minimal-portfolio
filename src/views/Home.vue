<template>
  <div class="content">
    <div class="intro">
      <h1>{{ intro.statement }}</h1>
      <app-logo class="logo" />
    </div>
    <h4 class="section-title"><i class="uil uil-cube"></i> <span class="text-white">Recent Work</span></h4>
    <section class="projects"> 
      <app-card-work-snip v-for="project in projects" :key="project.title.rendered" :project="project" />
      <router-link to="/work" class="project cta">
        <div class="cta-block">
          <div class="icon"><i class="uil uil-eye"></i></div>
          <h5 class="cta-text">View more</h5>
        </div>
      </router-link>
    </section>
    <h4 class="section-title"><i class="uil uil-document-layout-left"></i> Recent Blogs</h4>
    <section class="posts"> 
      <app-card-post-snip v-for="post in posts" :key="post.title.rendered" :post="post" />
    </section>
  </div>
</template>

<script>
import AppLogo from '../components/AppLogo'
import AppCardPostSnip from '../components/AppCardPostSnip'
import AppCardWorkSnip from '../components/AppCardWorkSnip'

export default {
  name: 'Home',
  components: {
    AppLogo,
    AppCardPostSnip,
    AppCardWorkSnip
  },
  data: () => {
    return {
      intro: {
        statement: 'I create experiences that users & businesses love.'
      },
    }
  },
  computed: {
    posts: function () {
      return this.$store.state.posts_home
    },
    projects: function () {
      return this.$store.state.projects_home
    }
  }
}
</script>

<style lang="scss">
@import '../theme/index.scss';

.intro {  
  background-color: $--color-black;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='2.7' stroke-opacity='0.38' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23e84762' href='%23a' transform='rotate(-60 0 0) scale(0.4)'/%3E%3Cuse stroke='%23e9476d' href='%23a' transform='rotate(-50 0 0) scale(0.5)'/%3E%3Cuse stroke='%23e94978' href='%23a' transform='rotate(-40 0 0) scale(0.6)'/%3E%3Cuse stroke='%23e94b83' href='%23a' transform='rotate(-30 0 0) scale(0.7)'/%3E%3Cuse stroke='%23e74e8e' href='%23a' transform='rotate(-20 0 0) scale(0.8)'/%3E%3Cuse stroke='%23e45299' href='%23a' transform='rotate(-10 0 0) scale(0.9)'/%3E%3Cuse stroke='%23e157a4' href='%23a' transform=''/%3E%3Cuse stroke='%23dd5cae' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23d761b8' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23d167c1' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23ca6cca' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23c172d2' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23b877da' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23af7de1' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23a482e7' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%239887ed' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%238c8cf1' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%237e91f5' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%237096f8' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%235f9afa' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%234d9efc' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%2336a2fc' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%230ca6fc' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  margin-top: -80px;
  margin-bottom: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 96px 16px 64px;
  overflow: hidden;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 700;
    color: $--color-white;
    position: relative;
    z-index: 1;
    padding-bottom: 110px;

    &::before {
      content: 'I create experiences that users & businesses love.';
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 700;
      color: transparent;
      -webkit-text-stroke: 1px rgba($--color-primary, .5);
      position: absolute;
      z-index: -1;
      transform: translate(4px, 5px);
    }
  }

  .logo {
    position: fixed;
    height: 300px;
    right: -150px;

    @keyframes lineMove {
      0% {
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dashoffset: 500;
      }
    }

    .cls-1{
      fill:rgba(255,255,255,0);
      stroke-dasharray: 400px;
      stroke: rgba($--color-primary,.2);
      animation: lineMove 10s ease infinite;
    }
  }
}

.projects {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;

  .project {
    display: block;
    position: relative;
    min-width: 300px;
    margin-left: 16px;
    margin-bottom: 16px;
    flex: 0 0 auto;
    border-radius: 8px;
    overflow: hidden;
    height: 300px;

    @media screen and (min-width: 600px) {
      height: 360px;
    }

    &.cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      background: $--color-primary;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;

      .cta-block {
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;

        i {
          font-size: 48px;
        }

        .cta-text {
          font-size: 18px;
          text-transform: uppercase;
          margin: 0;
        }
      }

    }

    .image {
      background: $--color-text-placeholder no-repeat center / cover;
      margin-bottom: 8px;
      position: relative;
      height: 100%;

      &::before {
        content: '';
        position: absolute;
        z-index: 1;
        background: linear-gradient(120deg, rgba($--color-black,.2), rgba($--color-info, .1));
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
    }

    .text {
      font-weight: 600;
      color: $--color-white;
      line-height: 1.3em;
      padding: 8px 16px 16px;
      border-radius: 8px 8px 0px 0px;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(180deg, rgba($--color-black,.2), rgba(0,0,0,0));
    }
  }
}

.posts {
  padding: 16px;

  .post {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    justify-content: space-between;
    align-items: center;

    .image {
      height: 124px;
      width: 124px;
      border-radius: 8px;
      background: $--color-text-placeholder no-repeat center / cover;
      margin-right: 16px;
    }
    .text {
      flex: 1;

      .overline {
        font-size: 12px;
        color: $--color-text-secondary;
        display: block;
        margin-bottom: 8px;
        text-transform: capitalize;
      }

      .title {
        font-size: 18px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0px;
        line-height: 1.3;
        color: $--color-black;
      }
    }
  }
}
</style>