import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import regiest from '../views/regiest.vue'
// 个人中心组件
import user from '../views/user/user.vue'
import editdata from '../views/user/editdata.vue'
import follow from '../views/user/follow.vue'
import commit from '../views/user/commit.vue'
import collect from '../views/user/collect.vue'
// news index 组件
import firstpage from '../views/news/firstpage.vue'
import column from '../views/news/column.vue'
import newsdetail from '../views/news/newsdetail.vue'
import videosdetail from '../views/news/videosdetail.vue'
import goodcommit from '../views/news/goodcommit.vue'
import search from '../views/news/search.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // ------------------登录注册-------------
    { path: '/login', name: 'login', component: login },
    { path: '/regiest', name: 'regiest', component: regiest },
    // ------------------个人人中心----------------
    { path: '/user', name: 'user', component: user }, // 个人中心
    { path: '/editdata', name: 'editdata', component: editdata }, // 编辑质料
    { path: '/follow', name: 'follow', component: follow }, // 我的关注
    { path: '/commit', name: 'commit', component: commit }, // 跟帖
    { path: '/collect', name: 'collect', component: collect }, // 收藏
    // ------------------index news  主页--------------------
    { path: '/', redirect: '/firstpage' }, // 重定项到index 主页
    { path: '/firstpage', name: 'firstpage', component: firstpage }, // index 主页
    { path: '/column', name: 'column', component: column }, // index 栏目
    { path: '/newsdetail', name: 'newsdetail', component: newsdetail }, // index 新闻详情
    { path: '/videosdetail', name: 'videosdetail', component: videosdetail }, // index 视频详情
    { path: '/goodcommit', name: 'goodcommit', component: goodcommit }, // index 精彩跟帖
    { path: '/search', name: 'search', component: search } // index 搜索
  ]
})
const rout = ['/user']
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (rout.includes(to.fullPath)) {
    if (token) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})
export default router
