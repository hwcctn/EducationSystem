import { App, Component } from 'vue';
//引入项目的全部组件
import login from './login/index.vue'
import  register  from './register/index.vue';
type ComponentMap = { [key: string]: Component };
//全局对象
const allGloablComponent:ComponentMap = {login,register}
//对外暴露插件对象
export default {
  install(app:App) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key])
    })
  },
}
