<template>
    <div class="cart-products__cart">
		<div class="cart-products__cart-img">
			<img :src="img" alt="png-drone">
		</div>
		<div class="cart-products__descr">
			<div class="cart-products__cart-title">
				{{title}}
			</div>
			<div class="cart__select-numbers">
				<span @click="showSelect = true">{{selectNumbers}} pc.</span>
				<ul v-if="showSelect === true" class="cart__number-of-products">
					<div class="cart__item-products" v-for="n in 10" :key="n">
						<a @click="selectNumberShow(n)"><span>{{n}} pc.</span></a>
					</div>
				</ul>
			</div>
			<div class="cart-products__cart-price">
				{{price}}
				<div v-if="selectNumbers > 1" class="cart-products__cart-price-more">
					<span>
						{{selectNumbers}} × {{price}}
					</span>
				</div>
				<div class="cart__delete" @click="$emit('deleteProductsButton', {indexCart, indexProducts})">
					Delete
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: [
		  'img',
		  'title',
		  'price',
		  'productNew',
		  'indexCart',
		  'indexProducts',
		  'selectNumbers'
		],
		data() {
			return {
				showSelect: false
			}
		},
		methods: {
			async selectNumberShow(n) {
				let index = this.indexCart
				this.$store.dispatch('localStorage/selectNumber', {index, n})
				this.showSelect = false
				this.$router.push('/cart/')
			}
		},
		computed: {
			
		}
    }
</script>

<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"
	
	.cart-products__cart
		background-color: #ffffff
		display: flex
		position: relative
		margin-left: 10px
		margin-right: 10px
		box-sizing: border-box
		margin-top: 50px
		+xs-block
			margin-left: 0px
			margin-right: 0px
			margin-top: 100px
			justify-content: center
			flex-direction: column

	.cart-products__descr
		width: 100%
		display: flex
		flex-wrap: wrap
		position: relative
		height: 25px
		align-items: center
		+md-block
			justify-content: space-between
		+xs-block
			min-height: 80px
			height: inherit
			box-sizing: border-box
			padding-left: 15px
			width: inherit

	.cart-products__cart img
		width: 100%
		height: 100%

	.cart-products__cart-img
		width: 145px
		height: 100px
		user-select: none

	.cart-products__cart-title
		font-size: 18px
		width: 180px
		color: #333
		margin-left: 15px
		font-weight: 400
		letter-spacing: 0.6px
		padding-right: 20px
		box-sizing: border-box
		+xs-block
			margin-left: 0px
			padding-right: 0px
			width: inherit
			margin-right: 15px

	.cart-products__cart-price
		color: #000000
		font-size: 22px
		font-weight: 700
		letter-spacing: 0.9px
		position: relative
		user-select: none 

	.cart__select-numbers
		border-bottom: 1px dashed silver
		display: flex
		cursor: pointer
		position: relative
		height: 20px
		margin-right: 90px
		user-select: none 
		+xs-block
			margin-right: 20px
			width: 40px
	
	.cart__select-numbers span
		z-index: 1
		
	.cart__number-of-products
		position: absolute
		top: 11px
		left: -50px
		max-height: 150px
		overflow: hidden
		overflow-y: scroll
		user-select: none 
		z-index: 10
	
	.cart__number-of-products a
		width: 100%
		height: 100%
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
	
	.cart__number-of-products::-webkit-scrollbar-track
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
		border-radius: 10px
		background-color: #F5F5F5

	.cart__number-of-products::-webkit-scrollbar
		width: 6px
		background-color: #F5F5F5

	.cart__number-of-products::-webkit-scrollbar-thumb
		border-radius: 10px
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)
		background-color: grey
	
	.cart__item-products
		width: 50px
		height: 30px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		cursor: pointer
		background-color: white

	.cart__item-products:hover
		background-color: #c5c5c5

	.cart-products__cart-price-more
		position: absolute
		left: -20px
		top: 33px
		font-size: 14px
		font-weight: 400
		color: #999
		width: 100px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
	
	.cart__delete
		position: absolute
		bottom: -70px
		right: 5px
		border-bottom: 1px dashed silver
		cursor: pointer
		color: #999
		font-size: 14px
		font-weight: 400
		user-select: none 
		+xs-block
			bottom: -63px
			right: 8px
		
	.cart__delete:hover
		color: #484848

	

</style>