import userStore from '../stores/userStore'

export function getZhuce(vuea){
	alert("loginbean值发生改变="+userStore.state.loginbean);
	return userStore.state.loginbean;
}
export function login(vuea){
	alert("loginbean值发生改变="+userStore.state.loginbean);
	return userStore.state.loginbean;//监听state里的loginbean
}