<template lang="">
     <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
              
            <!-- <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li> -->
            <router-link :to="{name:'hero'}" tag="li" class='active'>
                <a>英雄列表</a>
            </router-link>
            <router-link :to="{name:'arms'}" tag="li">
                <a>武器列表</a>
            </router-link>
            <router-link :to="{name:'equipment'}" tag="li">
                <a>装备列表</a>
            </router-link>
          </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>