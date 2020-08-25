import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './theme/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(
  ElementUI, 
  VueAxios, 
  axios, 
  VueAnalytics, {
    id: 'UA-135960437-2',
    router,
    autoTracking: {
      pageviewTemplate (route) {
        return {
          page: route.path,
          title: document.title,
          location: window.location.href
        }
      }
    }
  }
);

new Vue({
  router,
  store,
  created () {
    this.$store.dispatch('getProjectsHome')
    this.$store.dispatch('getPostsHome')
    this.$store.dispatch('getProjects')
    this.$store.dispatch('getPosts')
  },
  render: function (h) { return h(App) }
}).$mount('#app')
