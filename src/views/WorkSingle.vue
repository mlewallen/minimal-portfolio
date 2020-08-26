<template>
  <article class="work-single" v-if="project">
    <h4 class="section-title">{{ project.title.rendered }}</h4>
    <div class="work-single--image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="work-single--body" v-html="project.content.rendered"></div>
    <div class="pagination">
       <app-card-work-snip v-for="project in projects" :key="project.title.rendered" :project="project" />
    </div>
  </article>
</template>

<script>
import moment from 'moment'
import AppCardWorkSnip from '../components/AppCardWorkSnip'

export default {
  name: 'WorkSingle',
  components: {
    AppCardWorkSnip
  },
  computed: {
    project: function () {
      return this.$store.getters.getProjectById(this.$route.params.slug)
    },
    user: function () {
      return this.$store.state.user
    },
    projects: function () {
      let pagers = [];
      for (let i = 0; i < this.$store.state.projects.length; i++) {
        if (this.$store.state.projects[i].slug == this.$route.params.slug) {
          if (i != 0) { pagers.push(this.$store.state.projects[i - 1]) }
          if (i != this.$store.state.projects.length - 1) { pagers.push(this.$store.state.projects[i + 1]) } 
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

<style lang="scss">
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

  .pagination {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;

    @media screen and (min-width: 600px) {
      max-width: 600px;
      // max-width: 100%;
      margin: 0 auto;
    }

    .project {
      display: block;
      position: relative;
      min-width: 292px;
      margin-left: 16px;
      margin-bottom: 16px;
      flex: 0 0 auto;
      border-radius: 8px;
      overflow: hidden;
      height: 300px;

      @media screen and (min-width: 600px) {
        height: 360px;
        &:first-child {
          margin-left: 0;
        }
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
          background: linear-gradient(120deg, rgba($--color-black,.65), rgba($--color-info, .1));
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
}
</style>