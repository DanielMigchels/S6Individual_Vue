import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Logout from './views/Logout.vue'
import Register from './views/Register.vue'
import NotFound from './views/NotFound.vue'
import Sites from './views/Sites.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/logout',
        name: 'logout',
        component: Logout
      },
      {
        path: '/sites',
        name: 'sites',
        component: Sites
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  });