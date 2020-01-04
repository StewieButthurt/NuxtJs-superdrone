<template>
	<div class="best-drones__card">
		<div class="best-drones__card-img-round" v-if="productNew === true">
			<span>new</span>
		</div>
		<div class="best-drones__card-img">
			<img :src="img" alt="png-drone">
		</div>
		<div class="best-drones__card-title">
			{{title}}
		</div>
		<div class="best-drones__card-price">
			{{price}}
		</div>
		<div class="best-drones__card-button" v-if="add === false"  @click="add = true, addProducts()">
			add to cart
		</div>
		<nuxt-link no-prefetch to="/cart/" class="best-drones__card-button added" v-if="add === true">
			go to basket
		</nuxt-link>
	</div>
</template>

<script>
	export default {
		props: [
		  'img',
		  'title',
		  'price',
		  'productNew',
		  'index',
		  'add'
		],
		methods: {
			async addProducts() {
				let data = {
					img: this.img,
					title: this.title,
					price: this.price,
					productNew: this.productNew,
					index: this.index,
					selectNumbers: 1
				}
				await this.$store.dispatch('localStorage/addProductsButton', this.index)
				await this.$store.dispatch('localStorage/addProducts', data)
				this.$router.push('/')
				
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			
		}
	}
</script>


<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"
	
	.best-drones__card
		width: 345px
		height: 525px
		background-color: #ffffff
		display: flex
		flex-direction: column
		align-items: center
		position: relative
		margin-left: 10px
		margin-right: 10px
		margin-top: 70px
		+lgXX-block
			width: 258px
			height: 393px
		+lg-block
			width: 230px
			height: 350px

	
	.best-drones__card img
		width: 100%
		height: 100%

	.best-drones__card-img
		width: 307px
		height: 234px
		user-select: none
		margin-top: 25px
		margin-bottom: 40px
		+lgXX-block
			width: 230px
			height: 175px
			margin-top: 18px
			margin-bottom: 30px
		+lg-block
			width: 204px
			height: 156px
			margin-bottom: 0px

	.best-drones__card-img-round
		display: flex
		justify-content: center
		align-content: center
		user-select: none
		flex-wrap: wrap
		position: absolute
		right: 21px
		top: 25px
		width: 90px
		height: 90px
		background-color: black
		color: white
		text-transform: uppercase
		border-radius: 65px
		font-size: 24px
		+lgXX-block
			width: 75px
			height: 75px
			font-size: 20px
			right: 15px
			top: 19px
		+lgX-block
			width: 67px
			height: 67px
			font-size: 18px
		+lg-block
			width: 60px
			height: 60px
			font-size: 16px

	.best-drones__card-title
		font-size: 21px
		color: #000000
		font-weight: 700
		letter-spacing: 0.6px
		text-align: center
		+lgXX-block
			font-size: 16px
			width: 250px

	.best-drones__card-price
		color: #000000
		font-size: 32px
		font-weight: 700
		letter-spacing: 0.9px
		margin-top: 26px
		+lgXX-block
			margin-top: 19px
			font-size: 24px

	.best-drones__card-button
		display: flex
		justify-content: center
		user-select: none
		align-content: center
		color: black
		border: 1px solid black
		text-transform: uppercase
		background-color: white
		font-size: 15px
		flex-wrap: wrap
		margin-top: 37px
		transition-duration: 0.3s
		width: 175px
		height: 47px
		cursor: pointer
		transform: skew(170deg)
		+lgXX-block
			width: 131px
			height: 35px
			font-size: 12px
		+lg-block
			width: 116px
			height: 31px
			font-size: 11px


	.best-drones__card-button:active
	  transition-duration: 0.3s
	  transform: scale(0.9)

	.best-drones__card-button:hover
		background-color: #f4f4f4
	
	.added
		border: 1px solid black
		background-color: black
		color: white
		text-decoration: none
	
	.added:hover
		background-color: #2b2a2a

</style>