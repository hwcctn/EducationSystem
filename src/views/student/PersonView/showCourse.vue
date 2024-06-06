<template>
  <div>展示已选课程</div>
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
					<el-button type="danger" @click="deleteC(parseInt(scope.row.c_id))">移除课程</el-button> 
				</template>
			</el-table-column>
		</el-table>
</template>

<script lang="ts" setup>
import { GetECourse,SdelC } from '@/api/TCourse';
import { onMounted, ref } from 'vue';
import{ Course,SdelCRequest} from '@/api/TCourse/type'
import { GetUserInfo } from '@/api/user';
let tableData=ref<Course[]>([]);
let userid: number;
  onMounted(async () => {
  userid = (await GetUserInfo()).role.user_id;
  console.log(userid)
  await reqchoed();
});

async function reqchoed() {
  try {

    let res = await GetECourse({stu_id:userid} );
    console.log( res)
    if ( res) {
      tableData.value= res.course
    }
  } catch (error) {
    console.error(error);
  }
}
async function deleteC(data: any) {
  try {
    console.log(data)
  const uandC: SdelCRequest = {
    c_id: data, 
    stu_id: userid,
    
};

    let res = await SdelC(uandC);
   console.log(res);
    }catch (error) {
    console.error(error);
  }
}
</script>

<style lang='stylus' scoped>

</style>
