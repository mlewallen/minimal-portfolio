import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './theme/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(
  ElementUI, 
  VueAxios, 
  axios
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
