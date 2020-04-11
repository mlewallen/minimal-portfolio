<template>
  <div class="content">
    <h4 v-if="project" class="section-title"><i class="uil uil-cube"></i> {{ project.title.rendered }}</h4>
    <section class="projects"> 
      <app-card-work-snip :project="project" />
    </section>
  </div>
</template>

<script>
import AppCardWorkSnip from '../components/AppCardWorkSnip'

export default {
  name: 'WorkSingle',
  components: {
    AppCardWorkSnip
  },
  computed: {
    project: function () {
      return this.$store.getters.getProjectById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

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

.projects {
  display: block;

  .project {
    display: block;
    position: relative;
    // min-width: 300px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    flex: 0 0 auto;

    &.cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      position: relative;
      z-index: 1;

      .cta-block {
        padding: 24px;
        background: lighten($--color-primary,37%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        height: 148px;
        width: 148px;

        .cta-text {
          font-size: 18px;
          text-transform: uppercase;
          margin: 0;
        }
      }

    }

    .image {
      height: 300px;
      border-radius: 8px;
      background: $--color-text-placeholder no-repeat center / cover;
      margin-bottom: 8px;
      position: relative;
      overflow: hidden;
      // box-shadow: $--shadow-sm;

      &::before {
        content: '';
        position: absolute;
        z-index: 1;
        background: linear-gradient(120deg, rgba($--color-black,.2), rgba($--color-info, .1));
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
</style>