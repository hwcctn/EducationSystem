//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  
  GetUserInfoReq,
  GetUserInfoResp,
  UpdateStudentInfoReq,
  UpdateStudentInfoResp,
  UpdateTeacherInfoReq,
  UpdateTeacherInfoResp,
  DeleteUserInfoReq,
  DeleteUserInfoResp,
  LoginReq,
  LoginResp,
  RegisterReq,
  RegisterResp
} from './type'
// import { da } from 'element-plus/es/locales.mjs'
//项目用户相关的请求地址
enum API {
  api='/api1',
  Resgister_url=api+'/moker/v1/user/register',
  Login_url = api+'/moker/v1/user/login',
  GetUserInfo_url=api+'/moker/v1/user/info',
  UpdateStudent_url=api+'/moker/v1/user/student',
  UpdateTeacher_url=api+'/moker/v1/user/teacher',
  DeleteUser_url=api+'/moker/v1/user'


}

//注册接口
export const Register = (data: RegisterReq) =>
  request.post<any,RegisterResp>(API.Resgister_url, data)
//登录接口
export const Login = (data: LoginReq) =>
  request.post<any, LoginResp >(API.Login_url, data)
//获取用户信息
export const GetUserInfo = () =>
  request.get<any,  GetUserInfoResp>(API.GetUserInfo_url,
  {
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
    // 可以添加更多的自定义头部
  }
});
//更新学生的
export const  UpdateStudentInfo=  async ( data:UpdateStudentInfoReq) : Promise<UpdateStudentInfoResp>=> {
  try {
    const response = await request.put(API.UpdateStudent_url, data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
        // 可以添加更多的自定义头部
      }
   });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
//更新老师的
export const  UpdateTeacherInfo=  async ( data:UpdateTeacherInfoReq) : Promise<UpdateTeacherInfoResp>=> {
  try {
    const response = await request.put(API.UpdateTeacher_url,data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
        // 可以添加更多的自定义头部
      }
    , });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//删除
export const  DeleteUserInfo= async( ) : Promise<DeleteUserInfoResp> =>{
  try {
    const response = await request.delete(API.DeleteUser_url,  {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
        // 可以添加更多的自定义头部
      }
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// //退出登录
// export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
