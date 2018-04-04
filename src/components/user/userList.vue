<template>
<div>
  <h1>用户列表</h1>
  {{userList}}
  <br>
  <hr>

    <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新增用户信息</span>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="name"><el-input v-model="form.name"></el-input></el-form-item>
          <el-form-item label="real_name"><el-input v-model="form.realName"></el-input></el-form-item>
          <el-form-item label="email"><el-input v-model="form.email"></el-input></el-form-item>
          <el-form-item label="pet_id"><el-input v-model="form.petId"></el-input></el-form-item>
          <el-form-item> <el-button @click="saveUser">提交</el-button> </el-form-item>
        </el-form>
    </el-card>
</div>
  </template>

  <script>
import api from "./api/user";
export default {
  name: "UserList",
  data() {
    return {
      userList:null,
      form: {
        name: null,
        realName: null,
        email: this.name + '@gmail.com',
        petId: null
      }
    };
  },
  methods: {
    saveUser() {
      api.saveUser(this.form).then(resp => {console.log(resp); }).catch(error => console.log(error))
    },
    getUserList(){
      api.getUserList().then(resp => { this.userList = resp; }).catch(error => console.log(error));
    }
  },
  created() {
    this.getUserList();
  }
};
</script>