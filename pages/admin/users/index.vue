<template>
	<div class="users-container users-flex">
		<div class="login-page">
			<transition
					enter-active-class="animated fadeInDown"
					appear
					key="transition-login-info"
		  		>
		  			<div class="login-page__info" v-if="message !== null">
		  				<div class="login-page__info-icon">
		  					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		  						 viewBox="0 0 496.158 496.158" style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve">
		  					<path style="fill:#25B7D3;" d="M496.158,248.085c0-137.022-111.069-248.082-248.075-248.082C111.07,0.003,0,111.063,0,248.085
		  						c0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.158,385.086,496.158,248.085z"/>
		  					<g>
		  						<path style="fill:#FFFFFF;" d="M315.249,359.555c-1.387-2.032-4.048-2.755-6.27-1.702c-24.582,11.637-52.482,23.94-57.958,25.015
		  							c-0.138-0.123-0.357-0.348-0.644-0.737c-0.742-1.005-1.103-2.318-1.103-4.015c0-13.905,10.495-56.205,31.192-125.719
		  							c17.451-58.406,19.469-70.499,19.469-74.514c0-6.198-2.373-11.435-6.865-15.146c-4.267-3.519-10.229-5.302-17.719-5.302
		  							c-12.459,0-26.899,4.73-44.146,14.461c-16.713,9.433-35.352,25.41-55.396,47.487c-1.569,1.729-1.733,4.314-0.395,6.228
		  							c1.34,1.915,3.825,2.644,5.986,1.764c7.037-2.872,42.402-17.359,47.557-20.597c4.221-2.646,7.875-3.989,10.861-3.989
		  							c0.107,0,0.199,0.004,0.276,0.01c0.036,0.198,0.07,0.5,0.07,0.933c0,3.047-0.627,6.654-1.856,10.703
		  							c-30.136,97.641-44.785,157.498-44.785,182.994c0,8.998,2.501,16.242,7.432,21.528c5.025,5.393,11.803,8.127,20.146,8.127
		  							c8.891,0,19.712-3.714,33.08-11.354c12.936-7.392,32.68-23.653,60.363-49.717C316.337,364.326,316.636,361.587,315.249,359.555z"/>
		  						<path style="fill:#FFFFFF;" d="M314.282,76.672c-4.925-5.041-11.227-7.597-18.729-7.597c-9.34,0-17.475,3.691-24.176,10.971
		  							c-6.594,7.16-9.938,15.946-9.938,26.113c0,8.033,2.463,14.69,7.32,19.785c4.922,5.172,11.139,7.794,18.476,7.794
		  							c8.958,0,17.049-3.898,24.047-11.586c6.876-7.553,10.363-16.433,10.363-26.393C321.646,88.105,319.169,81.684,314.282,76.672z"/>
		  					</g>
		  					</svg>
		  				</div>
		  				<div class="login-page__info-text">
		  					{{message}}				
		  				</div>
		  			</div>
		  	</transition>
		  	<transition
					enter-active-class="animated fadeInDown"
					appear
					key="transition-login-error"
		  		>
		  			<div class="login-page__info login-page__error" v-if="infoError !== null">
		  				<div class="login-page__info-icon">
		  					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		  						 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
		  					<circle style="fill:#ff452d;" cx="25" cy="25" r="25"/>
		  					<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16 
		  						"/>
		  					<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34 
		  						"/>
		  					</svg>
		  				</div>
		  				<div class="login-page__info-text login-page__error-text">
		  					{{infoError}}				
		  				</div>
		  			</div>
		  	</transition>
			<div class="logn__title">
				Create user
			</div>
			<div class="title-login-descr">
				<div class="prefix">
					*
				</div> 	
				<div class="title-login-descr__text">
					Login
				</div>
			</div>
			<input type="text" 
				   class="login__input"
				   :class="{'login__input-border-error': loginError, 'login__input-border-access' : loginError === false}"
				   v-model="login"
				   @input="inputLogin"
				   >
			<div class="login-input-error" v-if="loginError === true">
				{{loginErrorDescr}}
			</div>
			<div class="title-login-descr title-login-descr-margin">
				<div class="prefix">
					*
				</div> 	
				<div class="title-login-descr__text">
					Password
				</div>
			</div>
			<input type="password" 
				   class="login__input"
				   v-model="password"
				   @input="inputPassword"
				   :class="{'login__input-border-error': passwordError, 'login__input-border-access' : passwordError === false}"
				   >
			<div class="password-input-error" v-if="passwordError === true">
				{{passwordErrorDescr}}
			</div>
			<div class="login-page__button" :class="{'login-page__button-disabled' : (loginValidate === false || passwordValidate === false)}" @click="onSubmit()">
				<span>Create</span>
			</div>
		</div>
	</div>
</template>

<script>

	import isEmpty from 'validator/lib/isEmpty'
	import isAlphanumeric from 'validator/lib/isAlphanumeric'
	import isByteLength from 'validator/lib/isByteLength'
	import * as nprogress from 'nprogress'

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

	export default {
		layout: 'admin-panel',
		middleware: ['admin-auth'],
		data() {
			return {
				login: '',
				password: '',
				loginAccessValues: {min: 3, max: 16},
				passwordAccessValues: {min: 3, max: undefined},
				loginError: null,
				loginErrorDescr: '',
				loginValidate: false,
				passwordError: null,
				passwordErrorDescr: '',
				passwordValidate: false,
				message: null,
				infoError: null,
			}
		},
		methods: {
			inputLogin() {
				if(!isEmpty(this.login)) {
					this.loginError = null
					this.loginErrorDescr = ''
					if(isAlphanumeric(this.login)) {
						this.loginError = null
						this.loginErrorDescr = ''
						if(isByteLength(this.login, this.loginAccessValues)) {
							this.loginError = false
							this.loginErrorDescr = ''
							this.loginValidate = true
						} else {
							this.loginErrorDescr = '* Username must be at least 3 characters and no more than 16'
							this.loginError = true
							this.loginValidate = false
						}
					} else {
						this.loginErrorDescr = '* Login must contain only letters and digits in the Latin alphabet'
						this.loginError = true
						this.loginValidate = false
					}
				} else {
					this.loginErrorDescr = '* Enter the username'
					this.loginError = true
					this.loginValidate = false
				}
			},
			inputPassword() {
				if(!isEmpty(this.password)) {
					this.passwordError = null
					this.passwordErrorDescr = ''
					if(isAlphanumeric(this.password)) {
						this.passwordError = null
						this.passwordErrorDescr = ''
						if(isByteLength(this.password, this.passwordAccessValues)) {
							this.passwordError = false
							this.passwordErrorDescr = ''
							this.passwordValidate = true
						} else {
							this.passwordErrorDescr = '* The password must be at least 3 characters and no more than 16'
							this.passwordError = true
							this.passwordValidate = false
						}
					} else {
						this.passwordErrorDescr = '* The password must contain only letters and digits in the Latin alphabet'
						this.passwordError = true
						this.passwordValidate = false
					}
				} else {
					this.passwordErrorDescr = '* Enter the password'
					this.passwordError = true
					this.passwordValidate = false
				}
			},
			async onSubmit() {
				if(this.passwordValidate === true && this.loginValidate === true) {
					nprogress.start()
					try {
						const formData = {
							login: this.login,
							password: this.password
						}

						await this.$store.dispatch('auth/createUser', formData)
						this.message = 'The user successfully added!'
						this.login = ''
						this.password = ''
						nprogress.done()
					} catch (e) {
					nprogress.done()
					}
				}
			}
		},
		computed: {
			error() {
				return this.$store.getters.error
			}
		},
		watch: {
			error(value) {
				console.log(1)
				this.infoError = value.response.data.message
			}
		}
	}
</script>


<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"

	.login-page
		width: 100%
		max-width: 750px
		height: 600px
		margin-top: 50px
		display: flex
		flex-direction: column
		border-radius: 10px
		padding-left: 20px
		padding-right: 20px
		justify-content: center
		font-family: 'Roboto-Regular', sans-serif
		font-size: 18px
		box-sizing: border-box
		position: relative
		+lgX-block
			max-width: 500px
			height: 400px
		+xs-block
			width: 317px

	.users-container
	  +wrapper()
	  width: 100%
	  padding-left: 230px
	  +xs-block
	  	padding-left: 14px
	  	padding-right: 14px

	.users-flex
		display: flex
		align-items: center
		+xs-block
			justify-content: center

	.login-page__info
		position: absolute
		top: 8.5px
		left: 18.5px
		width: 480px
		height: 60px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		background-color: #dedede
		+lgX-block
			top: -19px
			left: 21px
			width: 320px
			height: 40px
		+xs-block
			left: 1px
			width: 275px

	.login-page__error
		background-color: #fcd1d1

	.login-page__info-text
		font-size: 24px
		color: #828282
		margin-left: 15px
		+lgX-block
			margin-left: 10px
			font-size: 16px

	.login-page__error-text
		color: #ff0000

	.login-page__info-icon
		width: 22.5px
		height: 22.5px
		+lgX-block
			width: 15px
			height: 15px

	.login-page__info-icon svg
		width: 100%
		height: 100%

	input
		color: #424242
		padding-left: 21px
		font-size: 27px
		+lgX-block
			padding-left: 14px
			font-size: 18px

	.logn__title
		font-size: 40.5px
		font-weight: 700
		margin-bottom: 22.5px
		color: #2c2c2c
		+lgX-block
			font-size: 27px
			font-weight: 700
			margin-bottom: 15px
		+xs-block
			font-size: 24px
			margin-bottom: 30px
			text-align: center

	.title-login-descr
		display: flex
		font-size: 27px
		+lgX-block
			font-size: 18px

	.prefix
		color: red

	.title-login-descr__text
		color: #424242
		margin-left: 7px
	
	.login__input
		width: 97%
		height: 60px
		margin: 10px 0px 10px 0px
		border-radius: 5px
		outline: none
		border: 1px solid silver
		+lgX-block
			height: 40px
		+xs-block
			width: 92%

	.title-login-descr-margin
		margin-top: 45px
		+lgX-block
			margin-top: 30px


	.login-input-error
		font-size: 24px
		color: #ff0000
		margin-left: 15px
		position: absolute
		left: 6px
		top: 251px
		+lgX-block
			left: 20px
			top: 163px
			margin-left: 10px
			font-size: 16px
		+xs-block
			top: 185px
			font-size: 13px

	.password-input-error
		font-size: 24px
		color: #ff0000
		margin-left: 15px
		position: absolute
		left: 6px
		top: 410px
		+lgX-block
			font-size: 16px
			margin-left: 10px
			left: 20px
			top: 284px
		+xs-block
			top: 302px
			font-size: 13px

	.login-page__button
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		width: 171px
		height: 60px
		background-color: #43a0ff
		margin-top: 60px
		border-radius: 30px
		cursor: pointer
		transition-duration: 0.2s
		user-select: none
		+lgX-block
			width: 114px
			height: 40px
			margin-top: 40px
			border-radius: 20px

	.login-page__button:hover
		background-color: #006ede
		transition-duration: 0.2s

	.login-page__button:active
	  transition-duration: 0.3s
	  transform: scale(0.9)

	.login-page__button span
		color: white
		font-size: 27px
		+lgX-block
			font-size: 18px

	.login-page__button-disabled
		background-color: grey
		cursor: inherit

	.login-page__button-disabled:hover
		background-color: grey

	.login-page__button-disabled:active
		transform: none

	.login-page__input-border-error
		border: 1px solid #ff0000

	.login-page__input-border-access
		border: 1px solid green
</style>