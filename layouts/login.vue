<template>
	<div class="login-layouts">
	  <nuxt />
	</div>
</template>

<script>
	export default {
	}
</script>


<style lang="sass">
	body
		margin: 0 auto

	body::-webkit-scrollbar-track
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
		border-radius: 10px
		background-color: #F5F5F5

	body::-webkit-scrollbar
		width: 6px
		background-color: #F5F5F5

	body::-webkit-scrollbar-thumb
		border-radius: 10px
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)
		background-color: grey
	
	.login-layouts
		width: 100%
		height: 100vh
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
</style>