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
                    <el-input v-model="User.account" placeholder="请输入账号" style="width: 80% ;padding: 0;"
                        size="large"></el-input>
                </el-form-item>


                <el-form-item prop="pass">
                    <el-input type="password" v-model="User.password" style="width: 80%" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item >
                <div class="mb-2 flex items-center text-sm">
                    <el-radio-group v-model="User.role" class="ml-4" >
                        <el-radio value="student" size="large">学生</el-radio>
                        <el-radio value="teacher" size="large">老师</el-radio>
                    </el-radio-group>
                </div>
            </el-form-item>
            <el-form-item >
                <span class="pwwd">
                    <a href="">忘记密码？</a>
                    <a href="">还没账号,注册一个</a>
                </span>
            </el-form-item >
            </el-form>

        </el-container>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="register" style="width: 100px;">注册</el-button>
        </div>
        
    </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage, ElNotification } from 'element-plus';
import { Register } from '@/api/user';

let User = reactive({ account: '', password: '',role:'' ,ver_code: "62",
ver_key:" sunt minim ullamco adipisicing"});

//注册
const register = async () => {
    try {
    let res=await Register(User);
    if(res){
    ElMessage({
    message: '注册成功',
    type: 'success',
  })
}
    } catch (error) {
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }
}

</script>

<style scoped>
.el-input__wrapper {
    height: 40px;
    color: #bbb9b9;
}
</style>