import Vue from 'vue' //导入vue

//导入vue-router模块
import VueRouter from 'vue-router'
//注册到Vue中
Vue.use(VueRouter)
// 创建路由对象

// 路由组件这里是
// 导入英雄列表组件
import HeroList from '../../views/heroList/heroList.vue'
// 导入武器列表组件
import ArmsList from  '../../views/armsList/armsList.vue'
// 导入装备列表组件
import EquipmentList from '../../views/equipmentList/equipmentList.vue'

const router = new VueRouter({
    linkActiveClass: 'active',
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
export default router