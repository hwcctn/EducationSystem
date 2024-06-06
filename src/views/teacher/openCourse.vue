<template>

  <div id="app">
    
    <div>课程管理</div>

    <el-row style="padding: 20px;">

      <el-col :span="6">
        <el-button type="primary" @click='onaddUserVisible'>增加课程</el-button>
      </el-col>
    </el-row>
    <el-table stripe border :data="tableData" style="width: 100%">
      <el-table-column prop="course.c_id" width="180">
      </el-table-column>
      <el-table-column prop="course.c_name" label="课程名" width="180">
      </el-table-column>
      <el-table-column prop="course.info" label="课程信息">
      </el-table-column>
      <el-table-column prop="course.tea_name" label="老师名">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope" >
          <el-button type="primary" @click="ucourse(scope.row)">修改课程</el-button>
          <el-button type="danger" @click="deletecourse(scope.row.course.c_id)">删除课程</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
    <el-dialog title="添加课程" v-model="addUserVisible" width="80%">
      <el-form ref="form" :model="addform" label-width="80px">
        <el-form-item label="老师">
          <el-input v-model="addform.tea_name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="课程:">
          <el-input v-model="addform.c_name"></el-input>
        </el-form-item>
        <el-form-item label="简介:">
          <el-input v-model="addform.info"></el-input>
        </el-form-item>
        
        <el-form-item >
          <el-button type="primary" @click="onaddCourse()">添加课程</el-button>
          <el-button @click="onaddCoursecancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="修改课程" v-model="updataUserVisible" width="80%">
      <el-form ref="form" :model="updateUserForm" label-width="80px">
        <el-form-item label="老师" >
          <el-input v-model="updateUserForm.tea_name"  :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="课程名">
          <el-input v-model="updateUserForm.c_name" ></el-input>
        </el-form-item>
        <el-form-item label="info:">
          <el-input v-model="updateUserForm.info"></el-input>
        </el-form-item>
        
        
        <el-form-item >
          <el-button type="primary" @click="onUpdateCommit()">修改课程</el-button>
          <el-button @click="onupdatecancel">取消</el-button>
        </el-form-item>
      </el-form> 
    </el-dialog>
</template>

<script lang="ts" setup>

import { ref, reactive, onMounted } from 'vue';
import { TgetC, Tdelete, TputC, TupdateC, } from '@/api/TCourse/index'

import { Course } from '@/api/TCourse/type'
import { GetUserInfo } from '@/api/user';

let username: string;
let userid: number 
// 定义响应式数据

let tableData = ref<Course[]>([]);
// const input = ref('');
const addUserVisible = ref(false);
const updataUserVisible = ref(false);
let addform = reactive({
  c_id:0,
  c_name: "",
  info: "",
  tea_id:0,
  tea_name: ''
});

let updateUserForm = reactive({
  c_id:0,
  c_name: "",
  info: "",
  tea_name: ''
});

// 替代mounted的生命周期钩子
onMounted(async () => {
  let res=await GetUserInfo();
  console.log(res)
  username =res.username;
  addform.tea_name=username;
  userid=res.role.user_id;
  await requesCourse();
});
async function requesCourse() {
  try {
    
    const res = await TgetC({ t_id: userid });
    console.log(res)
    if (res) {
      tableData.value = res.tcourse;

    }
  } catch (error) {
    console.error(error);
  }
}
// 方法定义
async function onaddCourse() {
  try {
    let res = await TputC({
      course: {
        c_id:addform.c_id,
        c_name: addform.c_name,
        info: addform.info,
        tea_id: userid,
        tea_name: addform.tea_name
      }
    });
    tableData.value = res.tcourse;
    addUserVisible.value = false;
  } catch (error) {
    console.error(error);
  }
}

function onaddCoursecancel() {
  addUserVisible.value = false;
}

function onupdatecancel() {
  updataUserVisible.value = false;
}

function onaddUserVisible() {
  addUserVisible.value = true;
}

function ucourse(oridata: any) {
  updateUserForm = oridata.course;
  console.log(updateUserForm)
  updataUserVisible.value = true;
}

async function onUpdateCommit() {
  try {
    const res = await TupdateC({ course: {
      c_id:updateUserForm.c_id,
      c_name:updateUserForm.c_name,
      info:updateUserForm.info,
      tea_id:userid,
       tea_name: updateUserForm.tea_name,
    }
    });
    updataUserVisible.value = false;
    console.log(res)
    await requesCourse();
  } catch (error) {
    console.error(error);
  }
}

async function deletecourse(id: any) {
  try {
    await Tdelete({
      tea_id:userid,
      c_id:id
    });
    await requesCourse();
  } catch (error) {
    console.error(error);

  }
}



</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-button{
  margin: 0;
}
</style>
''