import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component:()=>import("../views/Home.vue")
// },
// {
//   path: '/userinfo',
//   name: 'UserInfo',
//   component:()=>import("../views/UserInfo.vue")
// }
{
  path: '/',
  redirect: '/login'
},
  {
    path: '/login',
    
    component: () => import('@/views/loginView/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
    },
},
{
  path: '/register',
  component: () => import('@/views/RegisterVIew/index.vue'),
  name: 'register',
  meta: {
    title: '注册',
  },
},
{
  path: '/personal',
  component: () =>import('@/views/student/Person/index.vue'),
  children: [
    {
      path: '/personal/info',
      component:()=>import('@/views/student/PersonView/info.vue'),
    },
    {
      path: '/personal/choiseCourse',
      component:()=>import('@/views/student/PersonView/choiseCourse.vue'),
    },
    {
      path: '/personal/showCourse',
      component:()=>import('@/views/student/PersonView/showCourse.vue'),
    },

  ],
},
{
  path: '/teacher',
  component: () =>import('@/views/teacher/index.vue'),
  children: [
    {
      path: '/teacher/info',
      component:()=>import('@/views/teacher/info.vue'),
    },
    {
      path: '/teacher/openCourse',
      component:()=>import('@/views/teacher/openCourse.vue'),
      
    },
    
  ]
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  let token=localStorage.getItem("TOKEN")
  if(token||to.path==="/login"||to.path==="/register"){
      next()
  }
  else{
  next("/login")
  }

}) 

export default router