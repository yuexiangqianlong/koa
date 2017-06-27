import {axPost} from'../../common/HttpBean'
import userStore from '../stores/userStore'

export function zhuce(form,thisa){
 axPost('/api/users/zhuce',$(form).serialize(),function(res){
        alert(res.data);
        if(res.data==1){
          thisa.$router.push('/gamehill');
          return;
        }else if(res.data==2){
          alert("email重复");
        }else if(res.data=3){
          alert("昵称重复");
        }else if(res.data==0){
          alert("数据库错误");
        }else{

        }
        //userStore.commit('zhuce',res.data);
      },function(err){
        alert(err);
    });
};

export function login(form,thisa){
 axPost('/api/users/login',$(form).serialize(),function(res){
             // userStore.commit('login',res.data);
             if(res.data==1){
          thisa.$router.push('/gamehill');
          return;
        }else{
          alert('账号/密码错误');
        }
        //alert(res.data);
        //userStore.commit('login',res.data);
      },function(err){
        alert(err);
    });
};