<template>
  <div v-if="post" class="post-single">
    <h4 class="section-title" v-html='post.title.rendered'></h4>
    <span class="overline"><i class="uil uil-schedule"></i> {{ createDate(post.date) }}</span>
    <div class="post-single--image" :style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="post-single--body" v-html="post.content.rendered"></div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BlogSingle',
  computed: {
    post: function () {
      return this.$store.getters.getPostById(this.$route.params.id)
    },
    user: function () {
      return this.$store.state.user
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
    margin-left: 16px;

    i {
      color: $--color-primary;
    }
  }

  .post-single--image {
    margin-top: 32px;
    height: 240px;
    background: $--color-text-placeholder no-repeat center / cover;
  }

  .post-single--body {
    padding: 16px;
  }
}
</style>