<template>
  <router-link v-if="post" :to="`/blog/${post.slug}`" class="post">
    <div class="image" :style="{ 'background-image': 'url(' + post._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
    <div class="text">
      <span class="overline">{{ createDate(post.date) }}</span>
      <p class="title" v-html="post.title.rendered"></p>
    </div>
  </router-link>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AppCardPostSnip',
  props: {
    post: Object
  },
  methods: {
    createDate (date) {
      return moment(date, "YYYYMMDD").fromNow();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

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
</style>