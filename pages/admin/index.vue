<template>
	<div class="container flex">
		Welcome to admin panel!
	</div>
</template>

<script>
	export default {
		layout: 'admin-panel',
		middleware: ['admin-auth']
	}
</script>


<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"

	.container
		+wrapper()
		width: 100%
		padding-left: 230px
		+xs-block
			padding-left: 14px
			padding-right: 14px

	.flex
		display: flex
		justify-content: center
		+xs-block
			justify-content: center
			
</style>