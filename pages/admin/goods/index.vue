<template>
	<transition-group class="container-panel flex-panel" name="list-goods" tag="div">
		<app-products-admin-panel 
			v-for="(item, index) in products"
			:key="item.title"
			:img="item.img"
			:title="item.title"
			:price="item.price"
			:productNew="item.productNew"
			:id="item.id"
			@deleteProduct="deleteProduct"
		></app-products-admin-panel>
		<div key="best-drones-admin__warning-delete" class="best-drones-admin__warning-delete" v-if="popupStatus === true">
			<div class="best-drones-admin__warning-delete-container">
				<div class="best-drones-admin__warning-delete-text-button">
					<div class="best-drones-admin__warning-delete-text">
						Внимание!
					</div>
					<div class="best-drones-admin__warning-delete-button">
						<svg @click="popupStatus = false" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
						<g>
							<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
								c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
								C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
								s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
						</g>
						</svg>
					</div>
				</div>
				<div class="best-drones-admin__warning-delete-question">
					<div class="best-drones-admin__warning-delete-question-svg">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
						<circle style="fill:#EFCE4A;" cx="25" cy="25" r="25"/>
						<line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="10" x2="25" y2="32"/>
						<line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="37" x2="25" y2="39"/>
						</svg>
					</div>
					<div class="best-drones-admin__warning-delete-question-text">
						Удалить товар?
					</div>
				</div>
				<div class="best-drones-admin__warning-delete-two-buttons">
					<div class="best-drones-admin__warning-delete-button-cancel" @click="popupStatus = false">
						<span>Отмена</span>
					</div>
					<div class="best-drones-admin__warning-delete-button-true"
					@click="removeProduct()">
						<span>Да</span>
					</div>
				</div>
			</div>
		</div>
	</transition-group>
</template>

<script>
	const AppProductsAdminPanel = () => import('~/components/products-admin-panel')
	

	import * as nprogress from 'nprogress'

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

	export default {
		layout: 'admin-panel',
		middleware: ['admin-auth'],
		components: {
			AppProductsAdminPanel
		},
		async mounted() {
			nprogress.start()
			try {
				await this.$store.dispatch('products/adminProducts')
				nprogress.done()
			} catch (e) {
				nprogress.done()
				throw e
			}
		},
		computed: {
			products() {
				return this.$store.getters['products/products']
			}
		},
		data() {
			return {
				popupStatus: false,
				title: null,
				infoRemoveProducts: false,
				addProduct: false,
				productTitle: '',
				productPrice: '',
				productImg: '',
				productNew: null,
				myFiles: [],
				uploadedFiles: []
			}
		},
		methods: {
			deleteProduct(data) {
				this.title = data.title
				this.productImg = data.img
				this.popupStatus = true

			},
			async removeProduct() {
				nprogress.start()
				let title = this.title
				let img = this.productImg
				await this.$store.dispatch('products/removeProduct', title)
				this.popupStatus = false
				nprogress.done()
			},
			clickClose() {
				this.addProduct = false
				this.productTitle = ''
				this.productPrice = ''
				this.productNew = null
			}
		}
	}
</script>


<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"

	.container-panel
	  +wrapper()
	  width: 100%
	  position: relative
	  font-family: 'ProximaNova', sans-serif
	  margin-left: 300px
	  padding-left: 0px
	  padding-right: 0px
	  +lgX-block
	  	margin-left: 200px
	  +xs-block
	  	margin-left: 0px
	  	margin-right: 0px

	.flex-panel
		display: flex
		flex-wrap: wrap
		+xs-block
			justify-content: center

	.container-panel.flex-panel ul
		display: flex
		flex-wrap: wrap
		padding-left: 0px
		padding-right: 0px
	
	.best-drones-admin__warning-delete
		width: 100%
		height: 100%
		background-color: rgba(0, 0, 0, 0.3)
		font-family: 'ProximaNova', sans-serif
		display: flex
		align-content: center
		justify-content: center
		flex-wrap: wrap
		position: fixed
		z-index: 9
		left: 103px
		top: 0px
		+xs-block
			left: 0px
			top: 0px
		
	.best-drones-admin__warning-delete-container
		width: 300px
		height: 113px
		background-color: white
		padding-left: 15px
		padding-right: 15px
		padding-top: 10px
		display: flex
		flex-direction: column
		box-sizing: border-box
		border-radius: 5px
		z-index: 9

	.best-drones-admin__warning-delete-text-button
		display: flex
		justify-content: space-between
		width: 100%

	.best-drones-admin__warning-delete-text
		font-size: 18px

	.best-drones-admin__warning-delete-button
		width: 10px
		height: 10px

	.best-drones-admin__warning-delete-button svg
		width: 100%
		hyphens: 100%
		fill: grey
		cursor: pointer

	.best-drones-admin__warning-delete-question
		display: flex
		margin-top: 10px
		align-items: center

	.best-drones-admin__warning-delete-question-svg
		width: 25px
		height: 25px

	.best-drones-admin__warning-delete-question-svg svg
		width: 100%
		height: 100%
		cursor: pointer

	.best-drones-admin__warning-delete-question-text
		font-size: 14px
		margin-left: 15px

	.best-drones-admin__warning-delete-two-buttons
		width: 100%
		display: flex
		justify-content: flex-end
		margin-top: 10px
		align-items: center

	.best-drones-admin__warning-delete-button-cancel
		width: 70px
		height: 27px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		border: 1px solid grey
		background-color: white
		border-radius: 5px
		font-size: 14px
		cursor: pointer
		color: #323232
		transition-duration: 0.2s

	.best-drones-admin__warning-delete-button-cancel:hover
		background-color: #f3f3f3
		transition-duration: 0.2s

	.best-drones-admin__warning-delete-button-true
		width: 50px
		height: 27px
		display: flex
		justify-content: center
		align-content: center
		border: 1px solid #63affd
		flex-wrap: wrap
		background-color: #63affd
		border-radius: 5px
		font-size: 14px
		cursor: pointer
		color: white
		margin-left: 10px
		transition-duration: 0.2s

	.best-drones-admin__warning-delete-button-true:hover
		border: 1px solid #2e95ff
		background-color: #2e95ff
		transition-duration: 0.2s

	.list-goods-move
		transition: transform 1s


</style>