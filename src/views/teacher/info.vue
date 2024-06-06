<template>
  <div>
    <el-card v-show="isShow">
      <el-button type="primary" @click='showView'>
					编辑</el-button>
      <el-descriptions class="margin-top" title="简介" :column="2" border v-if="info">
        <el-descriptions-item
          label="Username"
          label-align="right"
          align="center"
          label-class-name="my-label"
          class-name="my-content"
          width="50px"
        >
          {{info.username}}
        </el-descriptions-item>
        <el-descriptions-item
          label="Userid"
          label-align="right"
          align="center"
          label-class-name="my-label"
          class-name="my-content"
          width="50px"
        >
          {{info.role.user_id}}
        </el-descriptions-item>
        <el-descriptions-item
          label="faculty"
          label-align="right"
          align="center"
          label-class-name="my-label"
          class-name="my-content"
          width="50px"
        >
          {{info.role.faculty}}
        </el-descriptions-item>
        <el-descriptions-item
          label="School"
          label-align="right"
          align="center"
          label-class-name="my-label"
          class-name="my-content"
          width="50px"
        >
          {{info.role.school}}
        </el-descriptions-item>
       
      </el-descriptions>
      
    </el-card>
  </div>
  <el-dialog title="修改信息" v-model="ischange" width="80%"  v-if="info">
      <el-form ref="form" :model="info" label-width="80px">
        <el-form-item label="user_id:">
          <el-input v-model="info.role.user_id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Username	:">
          <el-input v-model="info.username" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="major:">
          <el-input v-model="info.role.faculty"></el-input>
        </el-form-item>
        <el-form-item label="school:">
          <el-input v-model="info.role.school" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="xiu()">修改信息</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

</template>

<script lang="ts" setup>
import { GetUserInfoResp } from '@/api/user/type';
import { onMounted, ref } from 'vue';
import { GetUserInfo, UpdateTeacherInfo } from '@/api/user';


let isShow = ref(false);
let ischange=ref(false);

let info = ref<GetUserInfoResp >();

const fetchUserInfo = async () => {

  info.value = await GetUserInfo();
  console.log(info);
  isShow.value = true;
};
async function xiu() {
  try {
  let res = await UpdateTeacherInfo({
    id: info.value?.role.id as number,
    name:info.value?.username as string,
    faculty: info.value?.role.faculty as string,
    school: info.value?.role.school as string
	});
  console.log(res);
   ischange.value=false;
    }catch (error) {
    console.error(error);
  }
}
async function showView() {
  try {
  
   ischange.value=true;
    }catch (error) {
    console.error(error);
  }
}

onMounted(fetchUserInfo);
</script>

<style scoped>
.margin-top {
  margin-top: 40px;
  height: 500px;
}
.img {
  width: 80px;
  height: 80px;
}
</style>
