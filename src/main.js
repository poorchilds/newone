import Vue from 'vue'
// import Vant from 'vant'
import App from './App.vue'
// 配置响应式布局
import 'amfe-flexible'
// 引入路由
import router from './router'
// 引入axios
import axios from 'axios'
// 引入时间处理插件moment
import moment from 'moment'

// 引入vant组件
import {
  Form,
  Field,
  Button,
  Toast,
  Dialog,
  RadioGroup,
  Radio,
  Cell,
  CellGroup
} from 'vant'

// 引入vant.css
import 'vant/lib/index.css'
// 引入字体图标
import './access/iconfont.css'

// 引入全局组件------------------------
import pagetitle from './components/pagetitle.vue'
import tables from './components/tables.vue'
import new1 from './components/new1.vue'
import new2 from './components/new2.vue'
import new3 from './components/new3.vue'

// 使用vant组件---------
Vue.use(Form)
Vue.use(Toast)
Vue.use(Field)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Cell)
Vue.use(CellGroup)

// 注册全局组件-------------------------
Vue.component('pagetitle', pagetitle)
Vue.component('tables', tables)
Vue.component('new1', new1)
Vue.component('new2', new2)
Vue.component('new3', new3)
// 在vue原型中配置axios+++++
Vue.prototype.$axios = axios
// 设置axios的根地址++++++++
axios.defaults.baseURL = 'http://localhost:3000'
// axios拦截器设置
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function(res) {
    // 对响应数据做点什么

    if (res.data.statusCode === 400) {
      if (res.data.message === '用户信息验证失败') {
        this.$router.push('/login')
      }
    }
    return res
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 定义全局的事件过滤器-----
Vue.filter('time', (value, t1) => {
  return moment(value).format(t1)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
