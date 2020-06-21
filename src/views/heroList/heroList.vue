<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">Hero List</h2>
          <a class="btn btn-success" href="add.html">Add</a>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                
                <tr v-for="(value,index) in list" :key=index>
                   <td>{{value.id}}</td>
                 
                  <td>{{value.name}}</td>
                  <td>{{value.age}}</td>
                  <td>{{value.gender}}</td>
                  <td>
                    <a href="edit.html">编辑</a>
                    &nbsp;&nbsp;
                    <a href="javascript:window.confirm('Are you sure?')" @click=del(value.id)>删除</a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
</template>
<script>

// 导入axios
import axios from 'axios'
export default {
   data(){
     return{
       list:[]
     }
   },
   methods:{
     loadData: function(){
       axios.get('http://localhost:3000/users')
       .then((res)=>{
        
        const {data, status}= res
        if(status==200){
         
          this.list = data
          console.log(this.list)
        }else{
          alert('获取数据失败')
        }
       })
       .catch((err)=>{
         alert(err+'服务器异常')
       })
     },
     del(id){
       axios.delete('http://localhost:3000/users/'+ id)
       .then(res=>{
         alert(res+'删除成功')
         //更新视图
        //  this.loadData()
       })
       .catch(err=>{
         alert('服务器错误'+err)
       })
     }
   },
   created(){
     this.loadData()
   },
 
 
}
</script>
<style lang="">
    
</style>