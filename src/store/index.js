import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = {
  posts: 'https://www.mlewallen.com/wp-json/wp/v2/posts?_embed',
  projects: 'https://www.mlewallen.com/wp-json/wp/v2/projects?_embed'
}

const user = {
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
  socialLinks: [
    { path: 'https://dribbble.com/mlewallen', label: 'Dribbble', icon: 'uil uil-dribbble' },
    { path: 'https://github.com/mlewallen/minimal-portfolio', label: 'Github', icon: 'uil uil-github-alt' },
    { path: 'https://www.linkedin.com/in/michaelwlewallen/', label: 'Linkedin', icon: 'uil uil-linkedin-alt' }
  ],
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

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: user,
    posts: [],
    projects: [],
    loading: true
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_PROJECTS (state, projects) {
      state.projects = projects
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getPosts ({commit}) {
      commit('SET_LOADING', true)
      axios.get(api.posts)
      .then(response => {
        commit('SET_POSTS', response.data)
        commit('SET_LOADING', false)
      })
      .catch(e => {
        console.log(e)
      })
    },
    getProjects ({commit}) {
      commit('SET_LOADING', true)
      axios.get(api.projects)
      .then(response => {
        commit('SET_PROJECTS', response.data)
        commit('SET_LOADING', false)
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  modules: {
  }
})
