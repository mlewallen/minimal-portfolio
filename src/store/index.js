import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = {
  posts: 'https://www.mlewallen.co/wp-json/wp/v2/posts?_embed',
  projects: 'https://www.mlewallen.co/wp-json/wp/v2/projects?_embed'
}

const user = {
  about: {
    statement: 'I help businesses connect their products to their users through process and measurability.',
    name: {
      first: 'Mike',
      last: 'Lewallen'
    },
    location: 'Frederick, MD',
    title: 'Product Designer',
    yoe: '6',
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
    pic: 'https://media-exp1.licdn.com/dms/image/C4D03AQHT0pZSuBIs1w/profile-displayphoto-shrink_400_400/0/1594906562532?e=1666828800&v=beta&t=Ndf1clRP4Y9pOKE-GTx4NiH_auagPzKyRt7SY4A5Wb4',
    link: 'https://www.linkedin.com/in/michaelwlewallen/'
  },
  experience: [
    {
      company: 'Code42',
      link: 'https://www.code42.com',
      title: 'Senior Product Designer',
      timeframe: ['November 2020','Present'],
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGKdYMxtTzb7w/company-logo_100_100/0/1649259177852?e=1669248000&v=beta&t=nmJCfgR6aNGnHQ07pFcSq5gHbAAQzMeub8LUPFggNPo'
    },
    {
      company: 'IronNet Cybersecurity',
      link: 'https://www.ironnet.com',
      title: 'Lead UI/UX Designer',
      timeframe: ['August 2019','November 2020'],
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEMvv0tY6VWzA/company-logo_100_100/0/1519882476767?e=1669248000&v=beta&t=4VklFtbab8ZGTr776KUdgOpx7ZwhVhUnlBXMUyDFzQ8'
    },
    {
      company: 'DealerOn',
      link: 'https://www.dealeron.com',
      title: 'Lead UX Designer',
      timeframe: ['January 2018','August 2019'],
      logo: 'https://media-exp1.licdn.com/dms/image/C560BAQHSjFU_msMQaw/company-logo_100_100/0/1635969077762?e=1669248000&v=beta&t=ioufa8dXTeCN6l5AGtMijXnfWRMIi69Is4QqJximU94'
    },
    {
      company: '270net Technologies',
      link: 'https://270net.com',
      title: 'UI/UX Designer & Web Developer',
      timeframe: ['June 2016','January 2018'],
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH1YEMzMUketw/company-logo_100_100/0/1519929053291?e=1669248000&v=beta&t=AcyNjgzPuGW0-Ijq1JT8BIhA4cOMmZbfcX-H5jxFW8o'
    },
    {
      company: 'Dew Point Media',
      link: 'https://www.dewpointmedia.net',
      title: 'UI/UX Designer & Web Developer',
      timeframe: ['January 2016','June 2016'],
      logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGsm_cHV3LkMg/company-logo_100_100/0/1653678410708?e=1669248000&v=beta&t=bi_qpVcVcZrYhkBfhw4A9EqL_G-Kr5QjwryhJJMqLoo'
    }
  ]
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: user,
    posts: [],
    posts_home: [],
    projects: [],
    projects_home: [],
    loading: true
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_POSTS_HOME (state, posts_home) {
      state.posts_home = posts_home
    },
    SET_PROJECTS (state, projects) {
      state.projects = projects
    },
    SET_PROJECTS_HOME (state, projects_home) {
      state.projects_home = projects_home
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getPosts ({commit}) {
      commit('SET_LOADING', true)
      axios.get(`${api.posts}&per_page=100`)
      .then(response => {
        commit('SET_POSTS', response.data)
        commit('SET_LOADING', false)
      })
      .catch(e => {
        console.log(e)
      })
    },
    getPostsHome ({commit}) {
      commit('SET_LOADING', true)
      axios.get(`${api.posts}&per_page=5`)
      .then(response => {
        commit('SET_POSTS_HOME', response.data)
        commit('SET_LOADING', false)
      })
      .catch(e => {
        console.log(e)
      })
    },
    getProjects ({commit}) {
      commit('SET_LOADING', true)
      axios.get(`${api.projects}&per_page=100`)
      .then(response => {
        commit('SET_PROJECTS', response.data)
        commit('SET_LOADING', false)
      })
      .catch(e => {
        console.log(e)
      })
    },
    getProjectsHome ({commit}) {
      commit('SET_LOADING', true)
      axios.get(`${api.projects}&per_page=10`)
      .then(response => {
        commit('SET_PROJECTS_HOME', response.data)
        commit('SET_LOADING', false)
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  getters: {
    getPostById: (state) => (slug) => {
      // return state.posts.find(post => post.id == id)
      return state.posts.find(post => post.slug == slug)
    },
    getProjectById: (state) => (slug) => {
      return state.projects.find(project => project.slug == slug)
    }
  }
})
