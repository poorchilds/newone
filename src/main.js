import Vue from 'vue'
// import Vant from 'vant'
import App from './App.vue'
import 'amfe-flexible'
import router from './router'
import axios from 'axios'
// import 'vant/lib/index.css'
// Vue.use(Vant)
import { Form, Field, Button, Toast } from 'vant'
import 'vant/lib/index.css'
import './access/iconfont.css'
// Vue.prototype.$axios = axios
// // 配置axios的默认基准地址
// axios.defaults.baseURL = 'http://localhost:3000'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(Form)
Vue.use(Toast)
Vue.use(Field)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
