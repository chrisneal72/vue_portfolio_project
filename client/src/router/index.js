import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/data',
    name: 'data',
    // route level code-splitting
    // this generates a separate chunk (data.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "data" */ '../views/DataView.vue')
  },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (data.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "data" */ '../views/MapView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
