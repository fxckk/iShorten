import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Short',
    component: () => import("../views/Short.vue")
  },
  {
    path: '/:qcode',
    name: 'Redirect',
    component: () => import('../views/Redirect.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router   