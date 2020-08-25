import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import WorkSingle from '../views/WorkSingle.vue'
import Blog from '../views/Blog.vue'
import BlogSingle from '../views/BlogSingle.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/work/:slug',
    component: WorkSingle
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:slug',
    component: BlogSingle
  }
]

const scrollBehavior = () => {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve({
        x: 0,
        y: 0
      })
    }, 350)
  })
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior
})

Vue.config.productionTip = false

Vue.use(
  VueAnalytics, {
    id: 'UA-135960437-2',
    router
  }
);

export default router
