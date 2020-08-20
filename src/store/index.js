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
    pic: 'https://media-exp1.licdn.com/dms/image/C4D03AQHT0pZSuBIs1w/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=3PD63ONo1DXCRB3V-pymLFcZ0HJwfYmhVY19MLW2miE',
    link: 'https://www.linkedin.com/in/michaelwlewallen/'
  },
  experience: [
    {
      company: 'IronNet Cybersecurity',
      link: 'https://www.ironnet.com',
      title: 'Lead UI/UX Designer',
      timeframe: ['August 2019','Present'],
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEMvv0tY6VWzA/company-logo_100_100/0?e=1605744000&v=beta&t=D_zfA7STYAWY3bylLG-Q4GvOqXnrbG1nfL6zkLQD6s8'
    },
    {
      company: 'DealerOn',
      link: 'https://www.dealeron.com',
      title: 'Lead UX Designer',
      timeframe: ['January 2018','August 2019'],
      logo: 'https://media-exp1.licdn.com/dms/image/C510BAQFmywm4l58hFw/company-logo_100_100/0?e=1605744000&v=beta&t=Da5l0ei2iXDGHdioTokklmzjpoU-7FSogAqjj774asM'
    },
    {
      company: '270net Technologies',
      link: 'https://270net.com',
      title: 'UI/UX Designer & Web Developer',
      timeframe: ['June 2016','January 2018'],
      logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH1YEMzMUketw/company-logo_100_100/0?e=1605744000&v=beta&t=4wVyndXrwdxGeRkf8w74YCo0V7TGMhElJoDJkl0qWdA'
    },
    {
      company: 'Dew Point Media',
      link: 'https://www.dewpointmedia.net',
      title: 'UI/UX Designer & Web Developer',
      timeframe: ['January 2016','June 2016'],
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkfPjkHvYS5g/company-logo_100_100/0?e=1605744000&v=beta&t=cyKmK1h_0IkH3ZIOKLrZkcsocazKIocecLCx2_StuaU'
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
      axios.get(`${api.posts}&per_page=3`)
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
      axios.get(`${api.projects}&per_page=5`)
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
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id == id)
    },
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id == id)
    }
  }
})
