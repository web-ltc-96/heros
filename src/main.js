import Vue from 'vue' //导入vue
import App from './App.vue' // 导入视图

Vue.config.productionTip = false // 不知道什么意思？？？
//导入vue-router模块
import VueRouter from 'vue-router'
//注册到Vue中
Vue.use(VueRouter)
// 创建路由对象

// 路由组件这里是
// 导入英雄列表组件
import HeroList from './views/heroList/heroList.vue'
// 导入武器列表组件
import ArmsList from  './views/armsList/armsList.vue'
// 导入装备列表组件
import EquipmentList from './views/equipmentList/equipmentList.vue'

const router = new VueRouter({
  routes: [
    {
      path:'',redirect:'/heroList'
      // 刚进去的时候跳转到英雄列表页
    },
    { 
      name: 'hero',
      path: '/heroList',
      component:HeroList
    },
    {
      name:'arms',
      path:'/armsList',
      component:ArmsList
    },
    {
      name:'equipment',
      path:'/equipmentList',
      component:EquipmentList
    }
  ]
})
// 导入 bootstrap.css 和index.css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  render: h => h(App),
  // 配置路由对象，挂载到vue实例中
  router
}).$mount('#app')
