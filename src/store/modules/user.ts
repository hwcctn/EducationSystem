import { defineStore } from "pinia";
import {  Login } from "@/api/user";
import { LoginReq} from '@/api/user/type'
import router from "@/router";
let useUserStore =defineStore('User',{
    state:()=>{
        return {
            token:localStorage.getItem("TOKEN"),
            userId:0,

        }
    },
    actions:{
        async userLogin(data:LoginReq){
            let result=await Login(data);
            
            console.log(result);
            
                this.token=result.accessToken;
                this.userId=result.student_id;
                localStorage.setItemA("USERID",this.userId);
                localStorage.setItem("TOKEN",result.accessToken);
                router.push('/');
                return 'ok'
               
            
        }
    },
    getters:{

    }
})
export default useUserStore;