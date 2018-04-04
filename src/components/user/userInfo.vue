<template>
  <div> 
   <h1>UserInfo</h1>
   <p>{{UserIfno}}</p>

  </div>
</template>
<script>
import api from './api/user'
export default {
  name: 'UserInfo',
  data() {
    return {
      userInfo: null
    }
  },
  created(){
    api.getUserInfo(1).then(resp => {
      this.userInfo = resp;
    })

  }
}
</script>

