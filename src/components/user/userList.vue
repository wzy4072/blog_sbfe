<template>
<div>
  <h1>USER LIST</h1>
  <el-button @click="showAddUser">ADD USER</el-button>
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="NAME"
        width="180">
      </el-table-column>
      <el-table-column
        prop="real_name"
        label="REAL_NAME"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="EMAIL">
      </el-table-column>
       <el-table-column
       fixed="right"
       label="EDIT"
       width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small"  @click="del(scope.row)" >DEL</el-button>
        <el-button type="text" size="small"  @click="edit(scope.row)" >EDIT</el-button>
      </template>
    </el-table-column>
    </el-table>

  <el-dialog
  title="ADD USER"
  :visible.sync="showAdd"
  width="30%">
 <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="name"><el-input v-model="form.name"></el-input></el-form-item>
    <el-form-item label="real_name"><el-input v-model="form.real_name"></el-input></el-form-item>
    <el-form-item label="email"><el-input v-model="form.email"></el-input></el-form-item>
    <el-form-item label="pet_id"><el-input v-model="form.pet_id"></el-input></el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="showAdd = false">CANCEL</el-button>
    <el-button type="primary" @click="saveUser">ENSURE</el-button>
  </span>
</el-dialog>
</div>
  </template>

  <script>
import api from "./api/user";
export default {
  name: "UserList",
  data() {
    return {
      userList: [],
      list: {
        id: 1,
        user: "superadmin",
        firstTime: "2017-07-11"
      },
      form: {
        id: null,
        name: null,
        real_name: null,
        email: null,
        pet_id: null
      },
      showAdd: false
    };
  },
  methods: {
    dbclick(row,e){
      console.log(row);
    },
    showAddUser() {
      this.showAdd = true;
      this.form = {
        id: null,
        name: null,
        real_name: null,
        email: null,
        pet_id: null
      };
    },
    saveUser() {
      const apiName = this.form.id ? "updateUser" : "saveUser";
      api[apiName](this.form)
        .then(resp => {
          if (resp.success) {
            this.getUserList();
            this.showAdd = false;
          }
        })
        .catch(error => console.log(error));
    },
    getUserList() {
      api
        .getUserList()
        .then(resp => {
          if (resp.success) {
            this.userList = resp.result;
          }
        })
        .catch(error => console.log(error));
    },
    edit(row) {
      api
        .getUser(row.id)
        .then(resp => {
          if (resp.success) {
            this.form = resp.result;
            this.showAdd = true;
          }
        })
        .catch(error => console.log(error));
    },
    del(row) {
      api
        .delUser(row.id)
        .then(resp => {
          this.$message(resp.message);
          if (resp.success) {
            this.getUserList();
          }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getUserList();
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
