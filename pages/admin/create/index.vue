<template>
	<div class="create-container create-flex">
		<div class="goods__added-form">
			<transition
				enter-active-class="animated fadeInDown"
				leave-active-class="animated fadeOut"
				appear
				key="transition-create-info"
				v-if="message !== null"
	  		>
	  			<div class="login-page__info-create">
	  				<div class="login-page__info-icon">
	  					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
							<circle style="fill:#25AE88;" cx="25" cy="25" r="25"/>
							<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
								38,15 22,33 12,25 "/>
						</svg>
	  				</div>
	  				<div class="login-page__info-text-create">
	  					{{message}}				
	  				</div>
	  			</div>
	  		</transition>
			<div class="goods__added-form-title-wrapper">
				<div class="goods__added-form-title">
					To create a new product
				</div>
			</div>
			<div class="goods__input-title-text-container">
				<div class="goods__star">*</div>
				<div class="goods__input-text">
					Enter the name of the product
				</div>
			</div>
			<input class="goods__input-title" :class="{'create__error-input' : errorInputTitle}" type="text" v-model="productTitle">
			<div class="error-title-input" v-if="errorInputTitle === true">
				Enter the name of the product
			</div>
			<div class="goods__input-title-text-container">
				<div class="goods__star">*</div>
				<div class="goods__input-text">
					Enter the price of the goods
				</div>
			</div>
			<input class="goods__input-title" :class="{'create__error-input' : errorInputPrice}" type="text" v-model="productPrice">
			<div class="error-price-input" v-if="errorInputPrice === true">
				Enter the price of the goods
			</div>
			<div class="goods__input-title-text-container">
				<div class="goods__star">*</div>
				<div class="goods__input-text">
					To add an icon that is a new product?
				</div>
			</div>
			<div class="goods__checkbox">
				<p><input class="goods__checkbox-input" :value="true" id="yes" type="radio" name="check" v-model="productNew">Yes</p>
				<p><input class="goods__checkbox-input" :value="false" id="no" type="radio" name="check" v-model="productNew">No</p>
			</div>
			<div class="goods__input-title-text-container goods__margin-for-image">
				<div class="goods__star">*</div>
				<div class="goods__input-text">
					Add a product image, with a resolution of 408x267
				</div>
			</div>
			<client-only>
				<file-pond
						name="file"
						ref="pond"
						label-idle="Drop files here..."
						:instantUpload="false"
						v-bind:allow-multiple="false"
						accepted-file-types="image/jpeg, image/png"
						server="/api/product/admin/upload-image"
						v-bind:files="myFiles"
						@processfile="handleFilePondProcessfile" 
						@addfilestart="handleFilePondFilestart"
						@removefile="handleFilePondRemoveFile"
						/>

			</client-only>
			<div class="goods__buttons-container">
				<div class="goods__button-cancel" @click="clearDataSend()">
					<span>Clear form</span>
				</div>
				<div class="goods__button-save" :class="{'create__button-disabled' : buttonDisabled}" @click="createdGood()">
					<span>Create</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import vueFilePond from 'vue-filepond';
	import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);
	import shortid from 'shortid';

	import * as nprogress from 'nprogress'

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);

		import('filepond/dist/filepond.min.css')
		import('filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css')
		
	}

	export default {
		layout: 'admin-panel',
		middleware: ['admin-auth'],
		components: {
			FilePond,
			shortid
		},
		computed: {
			buttonDisabled() {
				if(this.productTitle !== '' && this.productPrice !== '' && this.uploadedFiles.length !== 0) {
					return false
				} else {
					return true
				}
			}
		},
		data() {
			return {
				popupStatus: false,
				fileUpload: false,
				productTitle: '',
				productPrice: '',
				productNew: null,
				myFiles: [],
				uploadedFiles: [],
				errorInputTitle: false,
				errorInputPrice: false,
				message: null
			}
		},
		methods: {
			handleFilePondProcessfile: function (error, file) {
				nprogress.start();
				console.log("FilePond succesfully processed file " + file);
				this.fileUpload = true;
	            this.$nextTick();
	            nprogress.done();
			},
			handleFilePondFilestart: async function(file) {
				nprogress.start();
				console.log(this.$refs.pond)
				await this.uploadedFiles.push(file.filename);
				nprogress.done();
			},
			handleFilePondRemoveFile: function() {
				this.uploadedFiles = []
			},
			clearDataSend() {
				this.fileUpload = false;
				this.productTitle = '',
				this.productPrice = '',
				this.productNew = null,
				this.myFiles = [],
				this.uploadedFiles = []
			},
			async createdGood() {
				if(this.productTitle !== '') {
					this.errorInputTitle = false
					if(this.productPrice !== '') {
						this.errorInputPrice = false
						if(this.uploadedFiles.length !== 0) {
							nprogress.start();
							if(this.uploadedFiles.length === 1) {
								if(this.fileUpload === false) {
									await this.$refs.pond.processFile().then(file => {
									});
								}
								let context = this
								await this.$axios.$post('/api/product/admin/create-product', {
									img: this.uploadedFiles[0],
									title: this.productTitle,
									price: this.productPrice,
									productNew: this.productNew,
									id: shortid.generate(),
									add: false
								}).then(function(response) {
									context.message = response.message
									context.clearDataSend()
									setTimeout(() => context.message = null, 2000);
								})
							}
							nprogress.done();
						}
					} else {
						this.errorInputPrice = true
					}
				} else {
					this.errorInputTitle = true
				}
			}
		}
	}
</script>


<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"

	.create-container
		+wrapper()
		width: 100%
		padding-left: 300px
		position: relative
		+lgX-block
			padding-left: 203px
		+xs-block
			padding-left: 14px
			padding-right: 14px

	.create-flex
		display: flex
		+xs-block
			justify-content: center
	
	
	.goods__added-form
		width: 680px
		display: flex
		justify-content: center
		flex-direction: column
		background-color: white
		box-sizing: border-box
		margin-top: 20px
		margin-bottom: 100px
		border-radius: 10px
		+lgXX-block
			width: 566px
		+lg-block
			width: 330px
			padding-left: 25px
		+xs-block
			padding-right: 25px
			width: 280px
	
	.goods__added-form-title-wrapper
		display: flex 
		justify-content: space-between
		margin-left: 47px
		margin-top: 30px
		align-items: center
		+lg-block
			margin-left: inherit

	.goods__added-form-title
		font-size: 40px
		font-weight: 700
		+lgXX-block
			font-size: 33px
		+lg-block
			font-size: 21px

	.goods__input-title-text-container
		display: flex
		font-size: 24px
		margin-left: 47px
		margin-top: 60px
		+lgXX-block
			font-size: 18px
		+lg-block
			font-size: 16px
			margin-left: inherit
			margin-top: 35px

	.goods__star
		color: red

	.goods__input-text
		margin-left: 10px
		+lg-block
	
	.goods__input-title
		border: 1px solid silver
		border-radius: 5px
		width: 585px
		margin: 0 auto
		margin-top: 20px
		height: 60px
		font-size: 24px
		padding-left: 18px
		box-sizing: border-box
		outline: none
		+lgXX-block
			width: 487px
			font-size: 18px
			height: 50px
		+lg-block
			width: 305px
			font-size: 16px
			height: 37px
			margin: inherit
			margin-top: 20px
			margin-bottom: 0px
		+xs-block
			width: 235px
	
	.goods__checkbox
		display: flex
		align-items: center
		outline: none
		user-select: none

	.goods__checkbox p
		align-items: center
		display: flex
		font-size: 24px
		margin-left: 47px
		+lgXX-block
			font-size: 16px
		+lg-block
			margin-left: 25px

	.goods__checkbox input
		margin-right: 20px
		cursor: pointer

	.goods__checkbox-input
		width: 40px
		height: 40px
		+lgXX-block
			width: 32px
			height: 32px
	
	.goods__margin-for-image
		margin-bottom: 15px
	
	.goods__buttons-container
		display: flex
		margin-bottom: 30px
		margin-top: 10px
		margin-right: inherit
		margin-left: 47px
		+lg-block
			margin-left: inherit

	.goods__button-cancel
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		text-align: center
		width: 195px
		height: 50px
		border: 1px solid grey
		border-radius: 10px
		background-color: #909399
		color: white
		margin-right: 20px
		cursor: pointer
		font-size: 21px
		+lg-block
			width: 130px
			height: 35px
			border-radius: 10px
			margin-right: 10px
			font-size: 14px

	.goods__button-cancel:hover
		background-color: #a6a9ad
		border-color: #a6a9ad

	.goods__button-save
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		width: 120px
		height: 50px
		border: 1px solid #409eff
		border-radius: 10px
		background-color: #409eff
		color: white
		margin-right: 10px
		cursor: pointer
		font-size: 21px
		+lg-block
			width: 95px
			height: 35px
			border-radius: 10px
			margin-right: 10px
			font-size: 14px
		+xs-block
			margin-right: inherit


	.goods__button-save:hover
		background-color: #66b1ff
		border-color: #66b1ff

	.filepond--wrapper
		width: 460px
		margin-left: 47px
		+lg-block
			width: 250px
			margin-left: inherit
		+xs-block
			width: 235px
	
	.create__error-input
		border: 1px solid red
	
	.error-title-input
		position: absolute
		color: #ff3131
		top: 191px
		font-size: 14px
		left: 247px

	.error-price-input
		position: absolute
		color: #ff3131
		top: 301px
		font-size: 14px
		left: 247px
	
	.create__button-disabled
		background-color: #608bb7
		border: #608bb7
		cursor: not-allowed

	.create__button-disabled:hover
		background-color: #608bb7
		border: #608bb7	
	
	.login-page__info-create
		position: fixed
		top: 41px
		left: 434px
		width: 400px
		min-height: 50px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		background-color: #dedede
		padding-top: 5px
		padding-bottom: 5px
		+lgXX-block
			left: 316px
			width: 320px
		+lg-block
			left: inherit
			min-height: 40px
		+xs-block
			width: 236px
	
	.login-page__info-text-create
		font-size: 24px
		color: #000000
		margin-left: 10px
		text-align: center
		margin-top: 5px
		+lgXX-block
			font-size: 20px

	.login-page__info-icon
		width: 23px
		height: 23px
		margin-top: 5px

	.login-page__info-icon svg
		width: 100%
		height: 100%
		
</style>