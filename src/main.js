import Vue from 'vue' //导入vue
import App from './App.vue' // 导入视图

Vue.config.productionTip = false // 不知道什么意思？？？

// 设置全局的axios
import axios from 'axios'
// axios.create({
//   baseURL: 'http://localhost:3000'
// }); 不行
axios.defaults.baseURL = 'http://localhost:3000';
Vue.prototype.axios = axios
// 配置线上的默认地址

//导入路由模块
import router from './views/router/router.js'

// 导入 bootstrap.css 和index.css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  render: h => h(App),
  // 配置路由对象，挂载到vue实例中
  router
}).$mount('#app')
