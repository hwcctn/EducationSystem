export interface Role {
  id: number;
  user_id: number;
  name: string;
  major: string;
  faculty: string;
  school: string;
}
export interface userinfo{
    title: "角色服务"
    desc: "角色服务"
    author: "delyr1c"
    email: "linyugang7295@gmail.com"
    version: "v1"
}
export interface GetUserInfoReq {}

export interface GetUserInfoResp {
    username: string;
    role: Role;
}

export interface UpdateStudentInfoReq {
    id: number;
    name: string;
    major: string;
    faculty: string;
    school: string;
}

export interface UpdateStudentInfoResp {
    role: Role;
}

export interface UpdateTeacherInfoReq {
    id: number;
    name: string;
    faculty: string;
    school: string;
}

export interface UpdateTeacherInfoResp {
    role: Role;
}

export interface DeleteUserInfoReq {}

export interface DeleteUserInfoResp {}
export interface User {
  id: number;
  account: string;
  username: string;
}
export interface VerCodeResp {
  b64s: string;
  key: string;
}
//登录
export interface LoginReq {
  account: string;
  password: string;
}

export interface LoginResp {
  accessToken: string;
  accessExpire: number;
  refreshAfter: number;
  student_id:number
}
//注册
export interface RegisterReq {
  ver_code: string;
  ver_key: string;
  account: string;
  password: string;
  role: string;
}
export interface RegisterResp
 {
  accessToken: string;
  accessExpire: number;
  refreshAfter: number;
  role: string;
}

// //登录
// export interface loginFormData {
//   account: string,
//   password: string
    
//   }
  
//   export interface ResponseData {
//     id:number
//     user_id:number
//     name:string
//     major:string
//     faculty:string
//     school:string
//   }

//   export interface loginResponseData extends ResponseData {
//     data: string
//     userId:number
    
//   }
 
//   export interface loginFormData {
//     username:string
//     role:
      
//     }
    
  // //定义获取用户信息返回数据类型
  // export interface userInfoReponseData extends ResponseData {
  //   data: {
  //     routes: string[]
  //     buttons: string[]
  //     roles: string[]
  //     name: string
  //     avatar: string
      
  //   }
  // }
  // //注册
