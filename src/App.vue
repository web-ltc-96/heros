<template>
  <div id="app">
    <!-- 导航头部 -->
    <app-header></app-header>
   
    <div class="container-fluid">
      <div class="row">
          <!-- 侧边栏 -->
          <app-sidebar></app-sidebar>
        
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 导入APPHeader组件
import AppHeader from './components/APPHeader.vue'
// 导入AppSidebar组件
import AppSidebar from './components/AppSidebar.vue'
// TEST


export default {
  name: 'App',
  //注册组件
  components: {
   AppHeader,
   AppSidebar,
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
