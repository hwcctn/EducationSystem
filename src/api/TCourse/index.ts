//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  GetCoursReq,
  GetCoursReply,
 SearchACRequest ,
 SearchACReply ,
 GetECourseRequest,
 GetECourseReply,
 SputCRequest,
 SputCReply ,
 SdelCRequest,
 SdelCReply,
 TputCRequest,
 TputCReply,
TupdateCRequest,
TupdateCReply,
 TdeleteCRequest,
 TdeleteCReply  ,
 TgetCRequest ,
 TgetCReply
  
} from './type'
import { Login } from '../user';
//项目用户相关的请求地址
enum API {

  api='/api2',
  GetCours_url=api+'/moker/v1/courses',
  SearchAC_url=api+'/moker/v1/course/search',
  GetECourse_url=api+'/moker/v1/course/stu/ecourse',
  SputC_url=api+'/moker/v1/course/stu/addsc',
  SdelC_url=api+'/moker/v1/course/course/stu/ecourse',
  TputC_url=api+'/moker/v1/course/tea/tc',
  TupdateC_url=api+'/moker/v1/course/tea/tc',
  Tdelete_url=api+'/moker/v1/course/tea/tc',
  TgetC_url=api+'/moker/v1/course/tea'

}
// 展示所有的
export const GetCours = () =>
  request.get<any,GetCoursReply>(API.GetCours_url,{ headers: {
    "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`  
  
  }});

//查询
export const  SearchAC=  async ( data: SearchACRequest) : Promise<any>=> {
  try {
     // 从data中获取id
     const c_name = data.c_name;
    
     // 构造完整的URL，包括基础URL和id
     const fullUrl = `${API.SearchAC_url}/${c_name}`; 
    const response = await request.get(fullUrl, { headers: {
      "Authorization": `Bearer ${localStorage.getItem("TOKEN")}` 
    }});
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//学生

//展示已选的课程

export const GetECourse = async (data: GetECourseRequest): Promise<any> => {
  try {
    // 从data中获取id
    const id = data.stu_id;
    
    // 构造完整的URL，包括基础URL和id
    const fullUrl = `${API.GetECourse_url}/${id}`; 
    
    const response = await request.get(fullUrl, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, 
       
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//增加课程
export const  SputC=  async ( data: SputCRequest) : Promise<SputCReply>=> {
  try {
    const response = await request.post(API.SputC_url, data,{
      headers:{
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//删除课程
export const  SdelC=  async ( data: SdelCRequest) : Promise< SdelCReply>=> {
  try {
    const response = await request.delete(API.SdelC_url, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
        // 可以添加更多的自定义头部
      }
    , data});
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
//老师


//展示已有课程

export const  TgetC=  async ( data: TgetCRequest) : Promise< any>=> {
  try {
  const id = data.t_id;
//    
  const fullUrl = `${API.TgetC_url}/${id}`; 
    const response = await request.get(fullUrl,{
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`,
      }});
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

//增加课程
export const TputC = async (data: TputCRequest) : Promise<any>=>{
  try {
  const response=await request.post(API.TputC_url,data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, 
      },

    })
   
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
  }
//修改课程
export const TupdateC = (data: TupdateCRequest): Promise<any> =>{
    const response= request.put<any, TupdateCReply>(API.TupdateC_url, data,{
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
        // 可以添加更多的自定义头部
      }
    })
    console.log( response)
    return response;
  }
//删除课程
export const  Tdelete=  async ( data: TdeleteCRequest) : Promise< TdeleteCReply>=> {
  try {
    const response = await request.delete(API.Tdelete_url,  {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`, // 示例：添加一个带有token的Authorization头
        // 可以添加更多的自定义头部
      }
    ,data});
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


