<template>
  <router-link v-if="project" :to="`/work/${project.id}`" class="project">
      <div class="image" :style="{ 'background-image': 'url(' + project._embedded['wp:featuredmedia']['0'].source_url + ')' }"></div>
      <div class="text">
        <p class="title">{{ project.title.rendered }}</p>
      </div>
    </router-link>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AppCardWorkSnip',
  props: {
    project: Object
  },
  methods: {
    createDate (date) {
      return moment(date, "YYYYMMDD").fromNow();
    }
  }
}
</script>

