<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control"  id="txtName" placeholder="姓名"  v-model="formDate.name">
      </div>
        
     <div class="form-group">
            <label for="txtAge">年龄</label>
            <input type="text" class="form-control"  id="txtAge" placeholder="年龄"  v-model="formDate.age">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control"  v-model="formDate.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- prevent 阻止默认行为的执行 -->
      <button class="btn btn-success" @click.prevent="edit()">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            formDate:{
                name:'',
                gender:'男',
                age:'',

            }
        }
    },
    methods:{
        edit(){
            axios.put('http://localhost:3000/users/'+this.$route.params.id,this.formDate)
            .then(res=>{
               
                    console.log(res)
                    this.$router.push({name:'hero'})
               
            })
            // console.log(this.$route.params.id)
        }
    }
}
</script>

<style>

</style>
