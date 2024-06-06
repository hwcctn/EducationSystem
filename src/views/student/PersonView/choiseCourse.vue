<template>
  <div>选择课程</div>

  <el-row style="padding: 20px;">
		
			<el-row style="padding: 20px;">

			<el-col :span="10">
				<el-input v-model="input" placeholder="课程名"></el-input>
			</el-col>
			<el-col :span="1"></el-col>
			<el-col :span="6">
				<el-button type="primary" @click='searchUser'><el-icon>
						<Search />
					</el-icon>搜索</el-button>
			</el-col>
			<el-button type="primary" @click='reques'>
						展示全部</el-button>
		</el-row>
		</el-row>
        <el-table stripe border :data="tableData" style="width: 100%">
			<el-table-column prop="c_id" label="id" width="80">
			</el-table-column>
			<el-table-column prop="c_name" label="课程" width="80">
			</el-table-column>
			<el-table-column prop="info" label="介绍">
			</el-table-column>
			<el-table-column prop="tea_name" label="老师">
			</el-table-column>
			<el-table-column label="操作">
				<template #default="scope">
					<el-button type="primary" @click="addC(parseInt(scope.row.c_id))">添加课程</el-button>
		
				</template>
			</el-table-column>
		</el-table>

</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { GetCours,SearchAC,SputC } from '@/api/TCourse';
import { Course} from '@/api/TCourse/type';
import {GetUserInfo} from'@/api/user/index'
let tableData = ref<Course[]>([]);
let input = ref('');
let userid: number;


const getCours=async () => {
  userid = (await GetUserInfo()).role.id;
  await reques(); // 调用正确的函数
}
async function reques() { // 正确的函数名
  try {
    let res = await GetCours(); // 注意这里的调用
   
    tableData.value=res.course;
	console.log(res.course);
  } catch (error) {
    console.error(error);
  }
}

async function addC(data: number) {
  try {
    let res = await SputC({
		c_id:data,
		stu_id:userid
	});
   console.log(res);
    }catch (error) {
    console.error(error);
  }
}
async function searchUser() {
  try {
    let res = await SearchAC({c_name:input.value});
	tableData.value=res.course;
   console.log(res);
    }catch (error) {
    console.error(error);
  }
}
onMounted(getCours);
</script>

<style lang='stylus' scoped>

</style>
