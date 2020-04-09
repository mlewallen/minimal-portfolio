<template>
  <div class="content">
    <div class="intro">
      <h1>{{ intro.statement }}</h1>
      <!-- <el-row justify="space-between">
        <el-col :span="12">
          <el-button type="primary">My Process</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="text">About me</el-button>
        </el-col>
      </el-row> -->
    </div>
    <!-- <div class="loader" v-loading="!gotProjects"></div> -->
    <h4 class="section-title"><i class="uil uil-cube"></i> <span class="text-white">Recent Work</span></h4>
    <section class="projects" v-if="gotProjects"> 
      <a href="#" class="project" v-for="project in projects" :key="project.title.rendered">
        <div class="image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
        <div class="text">
          <p class="title">{{ project.title.rendered }}</p>
        </div>
      </a>
      <router-link to="/work" href="#" class="project cta">
        <!-- <div class="cta-block">
          <div class="icon"><i class="uil uil-eye"></i></div>
          <h5 class="cta-text">View more</h5>
        </div> -->
        <el-button type="primary" icon="el-icon-view">View More</el-button>
      </router-link>
    </section>
    <!-- <div class="loader" v-loading="!gotPosts"></div> -->
    <h4 class="section-title"><i class="uil uil-document-layout-left"></i> Recent Blogs</h4>
    <section class="posts" v-if="gotPosts"> 
      <a href="#" class="post" v-for="post in posts" :key="post.title.rendered">
        <div class="text">
          <span class="overline">2 days ago</span>
          <p class="title">{{ post.title.rendered }}</p>
          <!-- <div class="excerpt" v-html="post.excerpt.rendered"></div> -->
        </div>
        <div class="image" :style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
      </a>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    
  },
  data: () => {
    return {
      api: {
        posts: 'https://www.mlewallen.com/wp-json/wp/v2/posts?_embed',
        projects: 'https://www.mlewallen.com/wp-json/wp/v2/projects?_embed'
      },
      gotProjects: false,
      gotPosts: false,
      posts: [],
      projects: [],
      intro: {
        // bgURL: 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        // bgURL: 'https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        // bgURL: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        statement: 'I create experiences that users & businesses love.'
      },
    }
  },
  methods: {
    fixedHeader(y) {
      if (y > 81) {
        document.querySelector(".appbar").classList.add("fixed")
      } else {
        document.querySelector('.appbar').classList.remove("fixed")
      }
    }
  },
  computed: {

  },
  mounted() {
    axios.get(this.api.projects)
    .then(response => {
      this.projects = response.data
      this.gotProjects = true
    })
    .catch(e => {
      console.log(e)
    }),
    axios.get(this.api.posts)
    .then(response => {
      this.posts = response.data
      this.gotPosts = true
      console.log(this.posts)
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

.intro {
  // background: darken($--color-black, 10%) no-repeat center / cover;
  background-color: darken($--color-black, 10%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='2.7' stroke-opacity='0.38' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23e84762' href='%23a' transform='rotate(-60 0 0) scale(0.4)'/%3E%3Cuse stroke='%23e9476d' href='%23a' transform='rotate(-50 0 0) scale(0.5)'/%3E%3Cuse stroke='%23e94978' href='%23a' transform='rotate(-40 0 0) scale(0.6)'/%3E%3Cuse stroke='%23e94b83' href='%23a' transform='rotate(-30 0 0) scale(0.7)'/%3E%3Cuse stroke='%23e74e8e' href='%23a' transform='rotate(-20 0 0) scale(0.8)'/%3E%3Cuse stroke='%23e45299' href='%23a' transform='rotate(-10 0 0) scale(0.9)'/%3E%3Cuse stroke='%23e157a4' href='%23a' transform=''/%3E%3Cuse stroke='%23dd5cae' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23d761b8' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23d167c1' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23ca6cca' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23c172d2' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23b877da' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23af7de1' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23a482e7' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%239887ed' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%238c8cf1' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%237e91f5' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%237096f8' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%235f9afa' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%234d9efc' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%2336a2fc' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%230ca6fc' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  margin-bottom: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 136px 16px 64px;

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
      -webkit-text-stroke: 1px rgba(255,255,255,.75);
      position: absolute;
      z-index: -1;
      transform: translate(3px, 4px);
    }
  }

  .el-button {

    &.el-button--text  {
      text-transform: uppercase;
      color: $--color-white;
    }
  }
}

.loader {
  min-height: 100vh;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  // background-color: $--background-color-base;
  z-index: 1;
}

.section-title {
  font-size: 24px;
  margin-top: 16px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .text-white {
    color: $--color-white !important;
  }

  i {
    font-size: 32px;
    color: $--color-primary;
  }
}

.projects {
  // padding: 16px;
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
    margin-right: 16px;
    margin-bottom: 16px;
    flex: 0 0 auto;

    &.cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      position: relative;
      z-index: 1;

      .el-button {
        margin-left: -32px;
      }

      .cta-block {
        padding: 24px;
        background: lighten($--color-primary,37%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        height: 148px;
        width: 148px;

        .cta-text {
          font-size: 18px;
          text-transform: uppercase;
          margin: 0;
        }
      }

    }

    .image {
      height: 300px;
      border-radius: 8px;
      background: $--color-text-placeholder no-repeat center / cover;
      margin-bottom: 8px;
      position: relative;
      overflow: hidden;
      // box-shadow: $--shadow-sm;

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
      margin-left: 16px;
    }
    .text {
      flex: 1;

      .overline {
        font-size: 12px;
        color: $--color-text-secondary;
        display: block;
        margin-bottom: 8px;
      }

      .title {
        font-size: 20px;
        font-weight: 700;
        margin-top: 0;
        line-height: 1.5;
        margin-bottom: 16px;
        color: $--color-black;
      }
      .excerpt {
        font-size: 14px;
        color: $--color-text-regular;
      }
    }
  }
}
</style>