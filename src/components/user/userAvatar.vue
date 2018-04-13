<template>
  <div>
      <el-upload
      class="avatar-uploader"
      action="http://localhost:3000/user/avatar"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  <div v-for="(item, idx) in listdata" :key="idx">
    <div v-for="(obNa, idxx) in item" :key="idxx">
      {{obNa}}--{{item[obNa]}}
    </div>
    <hr>
  </div>




  </div>
</template>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<script>
  export default {
    name: 'userAvatar',
    data() {
      return {
        listdata: [
          {
	"packingList": [{
		"name": "6",
		"quantity": "7"
	}, {
		"name": "11",
		"quantity": "12"
	}, {
		"name": "16",
		"quantity": "17"
	}]
},
{
	"dd": [{
		"name": "6",
		"quantity": "7"
	}, {
		"name": "11",
		"quantity": "12"
	}, {
		"name": "16",
		"quantity": "17"
	}]
}],
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      }
    }
  }
</script>