import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);			//vuex初始化

let userStore = new Vuex.Store({
  state:{			//存储空间
    loginbean:null
  },
  mutations:{			//事件响应，修改存储的方法集
    zhuce:function(state,data){
      state.loginbean = data.loginbean;
      alert('store:'+data)
    },
    login:function(state,data){
    	state.loginbean = data.loginbean;
      
    },
    // changeItem:function(state,data){
    //   state.items = data;
    // }
  }
});

export default userStore;