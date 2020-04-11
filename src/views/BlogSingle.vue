<template>
  <div class="content">
    <h4 v-if="post" class="section-title"><i class="uil uil-document-layout-left"></i> {{ post.title.rendered }}</h4>
    <section class="posts"> 
      <app-card-post-snip :post="post" />
    </section>
  </div>
</template>

<script>
import AppCardPostSnip from '../components/AppCardPostSnip'

export default {
  name: 'BlogSingle',
  components: {
    AppCardPostSnip
  },
  computed: {
    post: function () {
      return this.$store.getters.getPostById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

.posts {
  padding: 16px;
}
</style>