import axios from 'axios';
import { ElMessage } from 'element-plus';
const service =axios.create({
  
  timeout:5000

});

//第二步:request实例添加请求与响应拦截器
service.interceptors.request.use((config) => {
    return config
  },error=>{
    Promise.reject(error);
  }
  )
//第三步:响应拦截器
service.interceptors.response.use(
    (response) => {
      //成功回调
      //简化数据
      return response.data
    },
    // (error) => {
    //   //失败回调:处理http网络错误的
    //   //定义一个变量:存储网络错误信息
    //   let message = ''
    //   //http状态码
    //   const status = error.response.status
    //   switch (status) {
    //     case 401:
    //       message = 'TOKEN过期'
    //       break
    //     case 403:
    //       message = '无权访问'
    //       break
    //     case 404:
    //       message = '请求地址错误'
    //       break
    //     case 500:
    //       message = '服务器出现问题'
    //       break
    //     default:
    //       message = '网络出现问题'
    //       break
    //   }
    //   //提示错误信息
    //   ElMessage({
    //     type: 'error',
    //     message,
    //   })
    //   return Promise.reject(error)
    // },
  )
  //对外暴露
  export default service
  