<template>
  <article class="work-single" v-if="project">
    <h4 class="section-title">{{ project.title.rendered }}</h4>
    <div class="work-single--image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="work-single--body" v-html="project.content.rendered"></div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  name: 'WorkSingle',
  computed: {
    project: function () {
      return this.$store.getters.getProjectById(this.$route.params.id)
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

.work-single {
  .overline {
    margin-left: 16px;
  }
  .work-single--image {
    height: calc(64vh - 156px);
    background: $--color-text-placeholder no-repeat center / cover;
  }
  .work-single--body {
    padding: 16px;
    @media screen and (min-width: 600px) {
      max-width: 600px;
      margin: 0 auto;
    }
    figure.wp-caption {
      width: 100% !important;
      margin: 0;
    }
  }
}
</style>