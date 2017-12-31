<template>
	<div id= "particles-js">
		<div class= "container">
			<h5>我的云端同步笔记</h5>
			<label for="login_field" class="inner">
			用户名或邮件地址</label>
			<input v-model="userName" type="text" class="inner">
			<label for="password" class="inner">密码</label>
			<input v-model="password" type="password" class="inner">
			<button type="primary" class="inner" @click="login">登录</button>
		</div>
	</div>

</template>

<script> 
	import axios from 'axios'
	export default {
		name:'Login',
		data(){
			return{
				userName:'',
				password:''
			}
		}, 
		mounted(){
			particlesJS.load('particles-js', '../../static/particles.data');

		},
		methods:{
			login(){
				let that = this;
				axios.post('/noteList',{
					userName:that.userName,      
					password:that.password
				}).then(function(response){
					if(response.data.sucess ===true){
						that.$router.push('/noteList');
						console.log(that.userName)
					}
				}).catch(function(response){
					alert('登录出现异常')
				})
			}

		}

	}
</script>

<style scoped>
	#particles-js{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding-top: 20rem;

	}
	
	.container{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		width: 24rem;
		height: 20rem;
		margin-left: auto;
		margin-right: auto;
	}
	.inner {
		display: flex;
		display: -webkit-flex;
	}
	label {
		flex-grow: 1;
		margin-top: 1rem;
	}
	input {
		flex-grow: 1.5;
	}
	button{
		flex-grow: 1;
		margin-top: 1rem;
	}
	
</style>