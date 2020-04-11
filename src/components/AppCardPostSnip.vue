<template>
  <router-link v-if="post" :to="`/blog/${post.id}`" class="post">
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

