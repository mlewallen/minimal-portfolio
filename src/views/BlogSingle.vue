<template>
  <div v-if="post" class="post-single">
    <h4 class="section-title" v-html='post.title.rendered'></h4>
    <span class="overline"><i class="uil uil-schedule"></i> {{ createDate(post.date) }}</span>
    <div class="post-single--image" :style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="post-single--body" v-html="post.content.rendered"></div>
    <div class="pagination">
       <app-card-post-snip v-for="post in posts" :key="post.title.rendered" :post="post" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import AppCardPostSnip from '../components/AppCardPostSnip'

export default {
  name: 'BlogSingle',
  components: {
    AppCardPostSnip
  },
  computed: {
    post: function () {
      return this.$store.getters.getPostById(this.$route.params.slug)
    },
    user: function () {
      return this.$store.state.user
    },
    posts: function () {
      let pagers = [];
      for (let i = 0; i < this.$store.state.posts.length; i++) {
        if (this.$store.state.posts[i].slug == this.$route.params.slug) {
          if (i != 0) { pagers.push(this.$store.state.posts[i - 1]) }
          if (i != this.$store.state.posts.length - 1) { pagers.push(this.$store.state.posts[i + 1]) } 
        }
      }
      return pagers
    }
  },
  methods: {
    createDate (date) {
      return moment(date).format('MMMM Do YYYY');
    },
    setImageSize () {
      for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
        document.getElementsByTagName("img")[i].width = "0"
        document.getElementsByTagName("img")[i].height = "0"
        document.getElementsByTagName("img")[i].style.width = "100%"
        document.getElementsByTagName("img")[i].style.height = "auto"
      }
      for (let i = 0; i < document.getElementsByTagName("figure").length; i++) {
        document.getElementsByTagName("figure")[i].width = "0"
        document.getElementsByTagName("figure")[i].style.width = "100%"
        document.getElementsByTagName("figure")[i].style.margin = "0"
      }
    }
  },
  mounted () {
    this.setImageSize();
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

.post-single {

  .section-title {
    margin-bottom: 8px;
  }

  .overline {
    padding-left: 16px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 600px) {
      padding-left: 24px;
    }

    i {
      color: $--color-primary;
    }
  }

  .post-single--image {
    margin-top: 32px;
    height: 240px;
    background: $--color-text-placeholder no-repeat center / cover;

    @media screen and (min-width: 600px) {
      height: 50vh;
    }
  }

  .post-single--body {
    padding: 16px;

    @media screen and (min-width: 600px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }
  .pagination {
    padding: 16px;

    @media screen and (min-width: 600px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }
}
</style>