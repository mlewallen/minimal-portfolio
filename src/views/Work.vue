<template>
  <div class="content">
    <!-- <div class="loader" v-loading="!gotProjects"></div> -->
    <h4 class="section-title"><i class="uil uil-cube"></i> Work</h4>
    <section class="projects" v-if="gotProjects"> 
      <a href="#" class="project" v-for="project in projects" :key="project.title.rendered">
        <div class="image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
        <div class="text">
          <p class="title">{{ project.title.rendered }}</p>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Work',
  components: {
    
  },
  data: () => {
    return {
      api: {
        projects: 'https://www.mlewallen.com/wp-json/wp/v2/projects?_embed'
      },
      gotProjects: false,
      projects: []
    }
  },
  methods: {

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
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

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

  i {
    font-size: 32px;
    color: $--color-primary;
  }
}

.projects {
  // padding: 16px;
  // display: flex;
  // flex-direction: row;
  // overflow-x: auto;
  // flex-wrap: nowrap;
  // -webkit-overflow-scrolling: touch;

  .project {
    display: block;
    position: relative;
    // min-width: 300px;
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
</style>