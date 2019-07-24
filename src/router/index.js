import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/login'
import Index from '../view/index'

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  }
]

const router = new Router({
  routes
})

export default router
