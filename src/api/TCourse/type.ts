export interface Course {
  c_id: number;
  c_name: string;
  info: string;
  tea_id: number;
  tea_name: string;
}
export interface C {
  c_name: string;
  info: string;
  tea_id: number;
  tea_name: string;
}
export interface GetCoursReq {
}
export interface GetCoursReply {
  course:Course[];
}

export interface SearchACRequest {
  c_name: string;
}
export interface SearchACReply {
  course:Course;
}
export interface GetECourseRequest {
  stu_id: number;
}
export interface  GetECourseReply {
  course:Course[];
}
export interface SputCRequest {
  stu_id: number;
  c_id:number;
  
}
export interface SputCReply
 {
  course:Course;
}

export interface SdelCRequest {
  stu_id: number;
  c_id: number;
}
export interface SdelCReply {
  info:string;
}


export interface TputCRequest {
  course: Course;
}
export interface TputCReply {
  course:Course[];
}
export interface  TupdateCRequest {
  course:Course;
}
export interface  TupdateCReply {
  course:Course[];
}
export interface TdeleteCRequest {
 tea_id:number;
 c_id:number;
}
export interface TdeleteCReply  {
  course:Course[];
}
export interface  TgetCRequest {
  t_id:number
}
export interface TgetCReply{
  course: Course[];
}



