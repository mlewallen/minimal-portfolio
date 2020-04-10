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
          <span class="label"><i class="uil uil-calendar-alt"></i> Graduction</span>
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
  data: () => {
    return {
      user: {
        about: {
          statement: 'I help businesses connect their products to their users through process and measurability.',
          name: {
            first: 'Mike',
            last: 'Lewallen'
          },
          location: 'Rockville, MD',
          title: 'Product Designer',
          yoe: '4',
          education: {
            degree: 'B.A.',
            school: 'Salisbury University',
            graduation: 'May 2016',
            gpa: '3.75'
          }
        },
        linkedin: {
          pic: 'https://media-exp1.licdn.com/dms/image/C4E03AQHM7M-A3Zt9zQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=9tX8jdmyQLVIqnop4NxU1euLZRvYgLfyHSJx_r7WQOc',
          link: 'https://www.linkedin.com/in/michaelwlewallen/'
        },
        experience: [
          {
            company: 'IronNet Cybersecurity',
            link: 'https://www.ironnet.com',
            title: 'Senior UI/UX Designer',
            timeframe: ['August 2019','Present'],
            logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEMvv0tY6VWzA/company-logo_100_100/0?e=1594857600&v=beta&t=Q8LvTGRcjF9sa5z0xlRsHJr8oxmaABENNc684CYqGAY'
          },
          {
            company: 'DealerOn',
            link: 'https://www.dealeron.com',
            title: 'Lead UX Designer',
            timeframe: ['January 2018','August 2019'],
            logo: 'https://media-exp1.licdn.com/dms/image/C510BAQFmywm4l58hFw/company-logo_100_100/0?e=1594857600&v=beta&t=kEniqzANaj9EGwm8RZ4IVTJxcJExN3sY0774e9qMIOI'
          },
          {
            company: '270net Technologies',
            link: 'https://270net.com',
            title: 'UI/UX Designer & Web Developer',
            timeframe: ['June 2016','January 2018'],
            logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH1YEMzMUketw/company-logo_100_100/0?e=1594857600&v=beta&t=70hDfkg8b_5frYq3ItKjbUhhPfI7D_AK_YaqB__nR7Y'
          },
          {
            company: 'Dew Point Media',
            link: 'https://www.dewpointmedia.net',
            title: 'UI/UX Designer & Web Developer',
            timeframe: ['January 2016','June 2016'],
            logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkfPjkHvYS5g/company-logo_100_100/0?e=1594857600&v=beta&t=Ea75aCiPbsZnDDX8JzGnSdKCyMA4Uwsc985wz-Oyh8w'
          }
        ]
      }
    }
  },
  methods: {
    isActive (i) {
      return this.user.experience[i] == 0 ? 'primary' : '';
    }
  }
}
</script>

<style lang="scss">
@import '../theme/index.scss';

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
</style>