<template>
  <div class="content">
    <h4 class="section-title"><i class="uil uil-user-circle"></i> <span>About</span></h4>
    <el-card class="about">
      <img :src="user.linkedin.pic" alt="Mike Lewallen" class="profile-pic">
      <h1 class="title">Hey, I'm {{ user.about.name.first }}.</h1>
      <p class="subtitle">{{ user.about.statement }}</p>
      <hr class="break">
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <span class="label"><i class="uil uil-user"></i> Title</span>
        </el-col>
        <el-col :span="12">
          <span class="value">{{ user.about.title }}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <span class="label"><i class="uil uil-location-point"></i> Location</span>
        </el-col>
        <el-col :span="12">
          <span class="value">{{ user.about.location }}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <span class="label"><i class="uil uil-briefcase-alt"></i> Experience</span>
        </el-col>
        <el-col :span="12">
          <span class="value">{{ user.about.yoe }} years</span>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="experience">
      <h5>Job Experience</h5>
      <el-timeline>
        <el-timeline-item v-for="job in user.experience" :key="job.company" :color="isActive(job)">
          <div class="info">
            <h4>{{ job.title }}</h4>
            <div class="company">
              <div class="logo"><img :src="job.logo" :alt="job.company"></div>
              <div class="name">
                {{ job.company }}
                <br>
                <span class="overline">{{ job.timeframe[0] }} - {{ job.timeframe[1] }}</span>
              </div>
              <a class="link" target="_blank" :href="job.link"><i class="uil uil-external-link-alt"></i></a>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
      <el-link class="button-block" :href="user.linkedin.link" target="_blank"><el-button type="primary">View My LinkedIn</el-button></el-link>
    </el-card>
    <el-card class="education">
      <h5>Education</h5>
      <el-row type="flex" justify="space-between">
        <el-col :span="8">
          <span class="label"><i class="uil uil-university"></i> School</span>
        </el-col>
        <el-col :span="16">
          <span class="value">{{ user.about.education.school }}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <span class="label"><i class="uil uil-calendar-alt"></i> Graduation</span>
        </el-col>
        <el-col :span="12">
          <span class="value">{{ user.about.education.graduation }}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <span class="label"><i class="uil uil-trophy"></i> Degree</span>
        </el-col>
        <el-col :span="12">
          <span class="value">{{ user.about.education.degree }}</span>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <span class="label"><i class="uil uil-star"></i> GPA</span>
        </el-col>
        <el-col :span="12">
          <span class="value">{{ user.about.education.gpa }}</span>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },
  methods: {
    isActive (i) {
      return this.user.experience[i] == 0 ? 'primary' : '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/index.scss';

.content {
  @media screen and (min-width: 600px) {
    max-width: 600px;
    margin: 0 auto;
  }
}

.el-card {
  margin: 16px;

  h5 {
    text-transform: uppercase;
    margin-top: 0;
    color: $--color-text-secondary;
  }

  .el-row {
    height: 64px;
    border-bottom: 1px solid $--color-text-placeholder;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }
  }

  .label {
    color: $--color-text-secondary;
    text-align: left;
    display: block;
    i {
      color: $--color-primary;
    }
  }

  .value {
    display: block;
    text-align: right;
  }
}

.about {
  padding: 16px;
  text-align: center;

  .el-card__body {
    padding: 20px 0px 10px;
  }

  .profile-pic {
    border-radius: 100%;
    height: 92px;
    width: 92px;
  }

  .subtitle {
    font-size: 18px;
    color: $--color-text-secondary;
  }

  .break {
    width: 72px;
    height: 2px;
    border: none;
    background-color: $--color-primary;
    margin: 20px auto;
  }
}

.experience {

  .el-timeline {
    padding-left: 0;

    .el-timeline-item {
      padding-bottom: 32px;
    }
  }

  .company {
    display: flex;
    align-items: center;
    position: relative;

    .logo {
      img {
        height: 24px;
        width: 24px;
        border-radius: 100%;
        box-shadow: $--shadow-xs;
        margin-right: 8px;
      }
    }

    .name {
      font-size: 16px;
      font-weight: 500;
    }

    .link {
      position: absolute;
      right: 0;
    }

  }

  .info {
    h4 {
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 8px;
    }
    .overline {
      display: block;
      font-size: 12px;
      color: $--color-text-secondary;
    }
  }
}

.education {
  h5 {
    margin-bottom: 0;
  }
}
</style>