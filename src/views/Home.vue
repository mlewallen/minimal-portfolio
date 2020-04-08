<template>
  <section class="projects" v-if="gotData"> 
    <h4 class="section-title">Recent Projects</h4>
    <a href="#" class="project" v-for="post in apiData" :key="post.title.rendered">
      <div class="image" :style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
      <div class="text">
        <p class="title">{{ post.title.rendered }}</p>
      </div>
    </a>
  </section>
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
      gotData: false,
      apiData: []
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
        this.apiData = response.data
        this.gotData = true
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style lang="scss">
@import '../theme/index.scss';

.projects {
  padding: 16px;

  .section-title {
    font-size: 24px;
    margin-top: 0;
  }

  .project {
    margin-bottom: 36px;
    display: block;
    position: relative;

    .image {
      height: 360px;
      border-radius: 8px;
      background: $--color-primary no-repeat center / cover;
      margin-bottom: 8px;
      // box-shadow: $--shadow-sm;
    }

    .text {
      font-weight: 600;
      color: $--color-white;
      line-height: 1.3em;
      padding: 8px 16px 16px;
      border-radius: 8px 8px 0px 0px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(180deg, rgba(0,0,0,.4), rgba(0,0,0,0));
    }
  }
}
</style>