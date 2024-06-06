<template>
  <div style="width: 100wh;height: 100vh;">
  <div class="PersonTop">
    <div>
    <img src="https://th.bing.com/th/id/OIP.Tap7BMzkb9-0-gz9Q0bijQAAAA?rs=1&pid=ImgDetMain"  style="width: 150px;height: 150px;">
    
  </div>
  <el-button round @click="del()">注销</el-button>
  </div>
  <div class="person_body">
    <div class="person_body_left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"

        :router='true'
      >
      <div slot="header" class="clearfix">
            <span class="person_body_list" style="border-bottom: none"
              >个人中心</span
            >
          </div>
          <el-menu-item index='/personal/info'>
          <el-icon><icon-menu /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-menu-item index='/personal/choiseCourse'>
          <el-icon><icon-menu /></el-icon>
          <span>选课</span>
        </el-menu-item>
        <el-menu-item index='/personal/showCourse'>
          <el-icon><icon-menu /></el-icon>
          <span>已选课程</span>
        </el-menu-item>
      
      </el-menu>
    </div>
    <div class="person_body_right">
        <router-view></router-view>
      </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import {DeleteUserInfo} from'@/api/user/index'
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';
const router = useRouter();
async function del() {
  let res=await DeleteUserInfo();
  console.log(res.isOk);
  if(res.isOk){
    ElNotification({
      type: 'success',
      message: '完成',
      title: `注销成功`
    });
  router.push('/login');
  }

  
}

</script>

<style  scoped>

.PersonTop {
  width: 1000px;
  height: 140px;
  padding-top: 20px;
  border:1px solid rgb(100, 99, 99);
  margin-top: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border-radius: 5px;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
 

}
.person_body {
  width: 1000px;
  margin-top: 210px;
  display: flex;
  position: absolute;
  left: 50%;
  border:1px solid rgb(100, 99, 99);
  margin-top: 200px;
  transform: translateX(-50%);
  border-radius: 5px;
}

.person_body_left {
  width: 27%;
  height: 600px;
  border-radius: 5px;
  margin-right: 3%;
  border:1px solid rgb(100, 99, 99);
}

.person_body_right {
  width: 70%;

  border-radius: 5px;

}
</style>
