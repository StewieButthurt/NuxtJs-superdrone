<template>
	<div class="best-drones" id="best-drones">
		<div class="container flex">
			<div class="best-drones__title">
				We Rent The Best Drones
			</div>
			<div class="best-drones__descr">
				If you’re looking for a portable drone or a pro tool, we have a drone for you!
			</div>
			<div class="best-drones__cards">
				<app-product 
					v-for="(item, index) in products"
					:key="item.title"
					:img="item.img"
					:title="item.title"
					:price="item.price"
					:productNew="item.productNew"
					:index="index"
					:add="item.add"
				></app-product>					
			</div>
		</div>
	</div>
</template>

<script>
	
	const AppProduct = () => import('~/components/product')
	
	import * as nprogress from 'nprogress'

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

	export default {
		async asyncData({store, error}) {
			try {
				const products = await store.dispatch('localStorage/fetchProducts')
				return {products}
			} catch(e) {
				error(e)
			}
		},
		components: {
			AppProduct
		},
		computed: {
			products() {
				return this.$store.getters['localStorage/productsLocal']
			}
		}
	}
</script>


<style lang="sass">
	@import "~/assets/smart-grid.sass"

	.best-drones
		background-color: #f6f6f6
		padding-top: 60px
		padding-bottom: 105px
		width: 100%
		font-family: 'ProximaNova', sans-serif
		display: flex
		+lgXX-block
			padding-top: 45px
			padding-bottom: 78px
		+lg-block
			padding-top: 40px
			padding-bottom: 40px

	.best-drones__title
		color: #282828
		font-size: 36px
		font-weight: 700
		letter-spacing: 1.2px
		text-align: center
		margin-left: 30px
		margin-right: 30px
		+lgXX-block
			font-size: 27px
		+lg-block
			font-size: 24px

	.best-drones__descr
		color: #6e6e6e
		font-size: 16px
		font-weight: 400
		line-height: 36px
		text-align: center
		margin-left: 30px
		margin-right: 30px 
		margin-top: 15px
		+lg-block
			max-width: 400px

	.best-drones__cards
		max-width: 1450px
		width: 100%
		display: flex
		justify-content: center
		flex-wrap: wrap
		+lgXX-block
			max-width: 1180px

	
</style>