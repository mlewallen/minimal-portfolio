<template>
  <div class="content">
    <!-- <div class="loader" v-loading="!gotPosts"></div> -->
    <h4 class="section-title"><i class="uil uil-document-layout-left"></i> Recent Blogs</h4>
    <section class="posts" v-if="gotPosts"> 
      <a href="#" class="post" v-for="post in posts" :key="post.title.rendered">
        <div class="image" :style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
        <div class="text">
          <p class="title">{{ post.title.rendered }}</p>
          <div class="excerpt" v-html="post.excerpt.rendered"></div>
        </div>
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
        posts: 'https://www.mlewallen.com/wp-json/wp/v2/posts?_embed'
      },
      gotPosts: false,
      posts: []
    }
  },
  methods: {

  },
  computed: {

  },
  mounted() {
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

.posts {
  padding: 16px;

  .post {
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    // justify-content: space-between;

    .image {
      height: 64px;
      width: 64px;
      border-radius: 8px;
      background: $--color-text-placeholder no-repeat center / cover;
      margin-right: 16px;
    }
    .text {
      width: calc(100% - 72px);

      .title {
        font-size: 18px;
        font-weight: 600;
        margin-top: 0;
        line-height: 1.5;
        margin-bottom: 16px;
      }
      .excerpt {
        font-size: 14px;
        color: $--color-text-regular;
      }
    }
  }
}
</style>