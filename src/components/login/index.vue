<template>
  <section style=" background-color: #00ff; width: 50%;height: 40%;
     
      background-color: #00000060;
      margin: auto;
      margin-top: 10%;
      text-align: center;
      border-radius: 10px;
      padding: 50px 50px;
">
    <el-container>
      <el-form :model="User" style="width: 100% ;height:100%; padding-left: 10%; padding-top: 5%;">
       
            <el-form-item prop="account">
              <el-input  v-model="User.account" placeholder="请输入账号" style="width: 80% ;padding: 0;" size="large"></el-input>
            </el-form-item>
    
       
            <el-form-item prop=" password">
              <el-input type="password"  v-model="User.password" style="width: 80%" placeholder="请输入密码"></el-input>
            </el-form-item>
       
          
        <span class="pwwd">
          <a href="">忘记密码？</a>
          <a href="">还没账号,注册一个</a>
        </span>
      </el-form>

    </el-container>
    <div slot="footer" class="dialog-footer" style="margin-top: 5%;">

      <el-button type="primary" @click="login" style="margin-right: 40px;">登 录</el-button>
      <RouterLink to="/register">注册</RouterLink>
      <div style="margin-top:5% ; text-align: center;">
        <span style="color:#bbb9b9; ">登录视为您已同意第三方账号绑定协议、服务条款、隐私政策</span>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// import useUserStore from '@/store/modules/user';
import { ElNotification } from 'element-plus';
import { Login } from '@/api/user';
import { useRouter } from 'vue-router';

// let useStore=useUserStore();
let User = reactive({ account: 'zzz',  password: '123456'});
//登录按钮回调
const router = useRouter();
const login = async ()=>{
  try {
  // await useStore.userLogin(User);
   let result=await Login(User);
    localStorage.setItem("TOKEN",result.accessToken);

  ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `登录成功`
    });
    router.push('/personal')
  }catch(error){
    ElNotification({
      type: 'error',
      message: 'Error',
      title: `登录失败`
    });
  }
}

</script>

<style scoped>
.el-input__wrapper {
  height: 40px;
  color: #bbb9b9;
}
</style>