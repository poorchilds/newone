import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import regiest from '../views/regiest.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/regiest', name: 'regiest', component: regiest }
  ]
})
export default router
