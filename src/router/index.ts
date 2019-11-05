import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demoRouter from './demo'
import loginRouter from './login'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...demoRouter,
  ...loginRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
