import Vue from 'vue' //导入vue
import App from './App.vue' // 导入视图

Vue.config.productionTip = false // 不知道什么意思？？？

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
