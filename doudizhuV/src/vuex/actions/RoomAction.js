import {axPost} from'../../common/HttpBean'

export function go(room,thisa){
	alert(room)
 axPost('/api/room/go',{room},function(res){
 	//alert(res.data.room);
	if(res.data==0){
				//跳进
				alert("人数已满");
	}else{
		thisa.$router.push({ path: '/room', query:res.data});
	}
		},function(err){
		alert(err);
		});
};