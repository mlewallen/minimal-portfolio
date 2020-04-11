<template>
  <div class="content">
    <h4 class="section-title"><i class="uil uil-document-layout-left"></i> Blog</h4>
    <section class="posts"> 
      <app-card-post-snip v-for="post in posts" :key="post.title.rendered" :post="post" />
    </section>
  </div>
</template>

<script>
import AppCardPostSnip from '../components/AppCardPostSnip'

export default {
  name: 'Blog',
  components: {
    AppCardPostSnip
  },
  computed: {
    posts: function () {
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

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