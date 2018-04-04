<template>
<div>
  <h1>petList列表</h1>
  <br>
  {{petList}}
</div>
  </template>

  <script>
import api from "./api/pet";
export default {
  name: "PetList",
  data() {
    return {
      petList:null
    };
  },
  created() {
    api.getPetList().then(resp => {
      this.petList = resp;
    });
  }
};
</script>
