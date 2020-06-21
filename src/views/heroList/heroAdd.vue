<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control"  id="txtName" placeholder="姓名"  v-model="formDate.name">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control"  v-model="formDate.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
  
      
      
      <!-- prevent 阻止默认行为的执行 -->
      <button class="btn btn-success" @click.prevent="add">提交</button>
    </form>
  </div>
</template>

<script>


export default {
    data(){
        return{
            formDate:{
                name:'',
                gender:'男'
            }
        }
    },
    methods:{
        add(){
            this.axios.post('/users',this.formDate)
            .then(res=>{
                const {status} = res
                if(status==201){
                    // 添加成功
                    // 跳转到英雄列表页面/编程式导航
                    this.$router.push('/heroList')
                }else{
                    alert('添加错误')
                }
            })
            .catch(err=>{
                alert('服务器错误'+err)
            })
        }
    }
}
</script>

<style>

</style>
