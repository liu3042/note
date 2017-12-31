<template>
<div class="notel-ist">
	<section>
		<article class="container" v-for="n in 10">
		<router-link  :to="{name:'noteList',params:{id:123}}" class ="inner">
				<p class="content">{{noteList.content}}</p>
				<p class="date"><em>日期{{noteList.date}}</em></p>
			</router-link>
		</article>
		<router-view></router-view> 
	</section>
</div> 
</template>
<script>
export default {
	name:"noteList",
	data(){
		return {
			noteList:{}
		} 
	}
}
</script>

<style scoped>
section{
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.inner {
	display: flex;
	display: -webkit-flex;
    margin: 2rem;
	width: 20rem;
	height: 26rem;
	background-color: green;


}

</style>