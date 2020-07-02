import Vue from 'vue'
// import Vant from 'vant'
import App from './App.vue'
// 配置响应式布局
import 'amfe-flexible'
// 引入路由
import router from './router'
// 引入axios
import axios from 'axios'

// 引入vant组件
import { Form, Field, Button, Toast } from 'vant'
// 引入vant.css
import 'vant/lib/index.css'
// 引入字体图标
import './access/iconfont.css'

// 引入全局组件------------------------
import pagetitle from './components/pagetitle.vue'
import tables from './components/tables.vue'
// 注册全局组件-------------------------
Vue.component('pagetitle', pagetitle)
Vue.component('tables', tables)
// 在vue原型中配置axios+++++
Vue.prototype.$axios = axios
// 设置axios的根地址++++++++
axios.defaults.baseURL = 'http://localhost:3000'
// 使用vant组件---------
Vue.use(Form)
Vue.use(Toast)
Vue.use(Field)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
