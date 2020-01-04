<template>
	<div class="main" id="main">
	  <div class="container">
	    <div class="menu">
	        <div class="hamburger" @click="rotate = !rotate">
	          <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-1': rotate}"></div>
	          <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-2': rotate}"></div>
	          <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-3': rotate}"></div>
	        </div>
	          <app-menu 
	          v-show="rotate === true"
	          @clickMobileLink="clickMobileLink()"
	        >   
	        </app-menu>
	      <div class="menu__logo">
	        superdrone.
	      </div>
	      <div class="menu__links">
	        <div class="menu__link" v-scroll-to="'#main'">
	           Home 
	        </div>
	        <div class="menu__link" v-scroll-to="'#super-services'">
	           Services
	        </div>
	        <div class="menu__link" v-scroll-to="'#best-drones'">
	           Products
	        </div>
	        <div class="menu__link" v-scroll-to="'#footer'">
	            Contacts
	        </div>
	      </div>
	      <div class="cart-and-login">
	        <nuxt-link no-prefetch to="/cart/" class="cart-button">
			  <div class="cart-button__counter">
				  <span>{{countProductsCart}}</span>
			  </div>
	          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	             viewBox="0 0 612.322 612.322" style="enable-background:new 0 0 612.322 612.322;" xml:space="preserve">
	            <g>
	              <path d="M187.57,359.458h360.895l63.856-227.934h-93.973l-33.74-104.22L343.9,72.916l19.244,58.608h-6.623l-34.74-104.22
	                L181.072,72.916l19.244,58.608h-75.228l-15.62-62.482c-7.873-31.241-35.115-53.359-66.481-53.359H0V41.8h42.987
	                c19.494,0,36.489,12.996,41.738,32.616l69.105,270.421c-14.246,10.247-23.618,26.992-23.618,46.112
	                c0,31.241,26.117,57.358,57.358,57.358h351.773V422.19H187.57c-16.995,0-31.241-14.371-31.241-31.241
	                C156.33,373.829,170.7,359.458,187.57,359.458L187.57,359.458z M467.739,59.795l23.493,70.355H389.637l-14.371-40.363
	                L467.739,59.795z M304.911,59.795l23.493,70.355H226.809l-14.371-40.363L304.911,59.795z M578.457,156.267l-49.486,177.199
	                H177.198l-45.612-177.198L578.457,156.267L578.457,156.267z"/>
	              <path d="M424.751,487.171c-29.991,0-54.734,24.743-54.734,54.734c0,29.991,24.743,54.734,54.734,54.734
	                c31.241,0,54.734-24.743,54.734-54.734C479.486,511.914,454.743,487.171,424.751,487.171z M424.751,571.896
	                c-16.995,0-29.991-14.371-29.991-29.991c0-16.995,14.371-29.991,29.991-29.991c16.995,0,29.991,12.996,29.991,29.991
	                C454.743,558.9,440.372,571.896,424.751,571.896z"/>
	              <path d="M224.06,487.171c-29.991,0-54.734,24.743-54.734,54.734c0,29.991,24.743,54.734,54.734,54.734
	                s54.734-24.743,54.734-54.734C278.794,511.914,254.051,487.171,224.06,487.171z M224.06,571.896
	                c-16.995,0-29.991-14.371-29.991-29.991c0-16.995,14.371-29.991,29.991-29.991s29.991,12.996,29.991,29.991
	                C254.051,558.9,239.68,571.896,224.06,571.896z"/>
	            </g>
	          </svg>
	        </nuxt-link>
	        <nuxt-link no-prefetch to="/admin/" class="login">
	          <span>Login</span>
	        </nuxt-link>
	      </div>
	    </div>
		<div v-scroll="handleScroll">
			<transition
				enter-active-class="animated fadeInDown"
				leave-active-class="animated fadeOutUp"
				appear
				key="transition-menu-top"
			>
				<div class="menu menu-top"  v-if="menuTopStatus">
					<div class="menu__logo menu-top-logo">
					<div class="menu-top__logo">
						<img src="~/static/quadcopter.png" alt="logo">
					</div>
					superdrone.
					</div>
					<div class="menu__links">
						<div class="menu__link menu-top-link" v-scroll-to="'#main'">
							Home 
						</div>
						<div class="menu__link menu-top-link" v-scroll-to="'#super-services'">
							Services
						</div>
						<div class="menu__link menu-top-link" v-scroll-to="'#best-drones'">
							Products
						</div>
						<div class="menu__link menu-top-link" v-scroll-to="'#footer'">
							Contacts
						</div>
					</div>
					<div class="cart-and-login menu-top-cart-and-login">
						<nuxt-link no-prefetch to="/cart/" class="cart-button menu-top-cart-button">
						<div class="cart-button__counter menu-top-button-counter">
							<span>{{countProductsCart}}</span>
						</div>
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 612.322 612.322" style="enable-background:new 0 0 612.322 612.322;" xml:space="preserve">
							<g>
							<path d="M187.57,359.458h360.895l63.856-227.934h-93.973l-33.74-104.22L343.9,72.916l19.244,58.608h-6.623l-34.74-104.22
								L181.072,72.916l19.244,58.608h-75.228l-15.62-62.482c-7.873-31.241-35.115-53.359-66.481-53.359H0V41.8h42.987
								c19.494,0,36.489,12.996,41.738,32.616l69.105,270.421c-14.246,10.247-23.618,26.992-23.618,46.112
								c0,31.241,26.117,57.358,57.358,57.358h351.773V422.19H187.57c-16.995,0-31.241-14.371-31.241-31.241
								C156.33,373.829,170.7,359.458,187.57,359.458L187.57,359.458z M467.739,59.795l23.493,70.355H389.637l-14.371-40.363
								L467.739,59.795z M304.911,59.795l23.493,70.355H226.809l-14.371-40.363L304.911,59.795z M578.457,156.267l-49.486,177.199
								H177.198l-45.612-177.198L578.457,156.267L578.457,156.267z"/>
							<path d="M424.751,487.171c-29.991,0-54.734,24.743-54.734,54.734c0,29.991,24.743,54.734,54.734,54.734
								c31.241,0,54.734-24.743,54.734-54.734C479.486,511.914,454.743,487.171,424.751,487.171z M424.751,571.896
								c-16.995,0-29.991-14.371-29.991-29.991c0-16.995,14.371-29.991,29.991-29.991c16.995,0,29.991,12.996,29.991,29.991
								C454.743,558.9,440.372,571.896,424.751,571.896z"/>
							<path d="M224.06,487.171c-29.991,0-54.734,24.743-54.734,54.734c0,29.991,24.743,54.734,54.734,54.734
								s54.734-24.743,54.734-54.734C278.794,511.914,254.051,487.171,224.06,487.171z M224.06,571.896
								c-16.995,0-29.991-14.371-29.991-29.991c0-16.995,14.371-29.991,29.991-29.991s29.991,12.996,29.991,29.991
								C254.051,558.9,239.68,571.896,224.06,571.896z"/>
							</g>
						</svg>
						</nuxt-link>
						<nuxt-link no-prefetch to="/admin/" class="login menu-top-login">
						<span>Login</span>
						</nuxt-link>
					</div>
				</div>
			</transition>
		</div>
	    <div class="main__title">
	      Your Receptionist<br>
	      Anywhere
	    </div>
	    <div class="main__button" v-scroll-to="'#best-drones'">
	      <span>buy now</span>
	    </div>
	    <div class="scroll-down" v-scroll-to="'#super-light-drone'">
	      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	         width="436.717px" height="436.717px" viewBox="0 0 436.717 436.717" style="enable-background:new 0 0 436.717 436.717;"
	         xml:space="preserve">
	      <g>
	        <path d="M427.758,194.331c11.945,11.94,11.945,31.298,0,43.243L239.979,425.359c-5.97,5.958-13.796,8.949-21.622,8.949
	          s-15.651-2.979-21.619-8.949L8.959,237.574c-11.946-11.945-11.946-31.303,0-43.243c11.943-11.942,31.306-11.942,43.246,0
	          l166.151,166.152l166.152-166.152C396.448,182.395,415.818,182.395,427.758,194.331z M196.738,242.397
	          c5.967,5.958,13.793,8.949,21.619,8.949s15.652-2.991,21.622-8.949L427.758,54.618c11.945-11.948,11.945-31.312,0-43.255
	          c-11.945-11.939-31.31-11.939-43.249,0L218.357,177.515L52.206,11.363c-11.94-11.939-31.303-11.939-43.246,0
	          c-11.946,11.943-11.946,31.307,0,43.255L196.738,242.397z"/>
	      </g>
	      </svg>
	    </div>
	  </div>
	</div>
</template>

<script>
	const AppMenu = () => import('~/components/mobile-menu')

	export default {
		components: {
			AppMenu
		},
		data() {
		    return {
			  rotate: false,
			  menuTopStatus: false,
			  scrollInfo: 0
		    }
		},
		methods: {
		  clickMobileLink() {
		    this.rotate = false;
		  },
		  handleScroll: function (evt, el) {
			if(this.scrollInfo < window.scrollY) {
				this.scrollInfo = window.scrollY
			} 
			if (window.scrollY < 1000 || this.scrollInfo <= window.scrollY) {
				this.menuTopStatus = false
			} else {
				this.menuTopStatus = true
				this.scrollInfo = window.scrollY
			}
    	   }
		},
		directives: {
			scroll: {
				inserted: function (el, binding) {
					let f = function (evt) {
					if (binding.value(evt, el)) {
						window.removeEventListener('scroll', f)
					}
					}
					window.addEventListener('scroll', f)
				}
			}
		},
		computed: {
			productsCart() {
				return this.$store.getters['localStorage/productsCart']
			},
			countProductsCart() {
				if(this.productsCart !== 0) {
					let n = 0
					this.productsCart.forEach(function callback(item, index) {
						n = n + item.selectNumbers
					})
					return n
				} else {
					return 0
				}
                
			}
		}
	}
</script>


<style lang="sass">

	@import "~/assets/smart-grid.sass"

	.main
	  display: flex
	  width: 100%
	  background: url('../assets/bgc-main.png') no-repeat no-repeat center top
	  background-size: cover
	  margin: 0 auto 

	.container
	  +wrapper()
	  width: 100%
	  +xs-block
	  	padding-left: 14px
	  	padding-right: 14px

	
	.menu
	  width: 100%
	  user-select: none
	  display: flex
	  align-items: center
	  justify-content: space-between 
	  margin-top: 65px
	  +md(margin-top, 30px)
	  margin-bottom: 200px
	  +lgXX(margin-bottom, 130px)
	  +lgX(margin-bottom, 110px)
	  +lg(margin-bottom, 78px)
	  +md(margin-bottom, 90px)
	  +ms(margin-bottom, 53px)

	.menu-top
		position: fixed
		top: 0px
		width: 100%
		height: 70px
		margin: 0 auto
		z-index: 2
		padding-left: 30px
		border-bottom: 1px solid black
		background-color: white
		margin-left: -50px
		+lgXX-block
			height: 60px
		+lg-block
			display: none

	.menu__logo
	  color: #ffffff
	  font-size: 36px
	  text-transform: uppercase
	  font-weight: 700
	  font-family: 'ProximaNova', sans-serif
	  +lgXX-block
	  	font-size: 30px
	  +lg(margin-left, 70px)
	  +md-block
	   margin-left: 60px
	   font-size: 20px
	  +xs-block
	   font-size: 15px
	   margin-left: 40px
	
	.menu-top-logo
		color: black
		display: flex
		align-items: center
		padding-left: 25px


	.menu__links
	  display: flex
	  +lg(display, none)

	.menu__link
	  font-size: 18px
	  color: #ffffff
	  text-transform: uppercase
	  font-family: 'ProximaNova', sans-serif
	  cursor: pointer
	  margin-left: 20px
	  margin-right: 20px
	
	.menu-top-link
		color: black

	.cart-and-login
	  font-family: 'ProximaNova', sans-serif
	  display: flex
	  align-items: center
	  +xs(display, none)
	
	.menu-top-cart-and-login
		margin-right: 60px

	.cart-button
		position: relative

	.cart-button svg
	  width: 32px
	  height: 27px
	  fill: white
	  cursor: pointer
	  z-index: 1
	  +md-block
	  	width: 28px
	  	height: 22px
	  +xs-block
	  	width: 22px
	  	height: 17px
	
	.menu-top-cart-button svg
		fill: black
	
	.cart-button__counter
		width: 25px
		height: 25px
		font-size: 15px
		border-radius: 15px
		background-color: white
		z-index: 2
		position: absolute
		box-sizing: border-box
		top: -7px
		left: 20px
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		color: #4e4e4e
		+md-block
			width: 20px
			height: 20px
			font-size: 13px
			left: 16px
	
	.menu-top-button-counter
		background-color: black
		color: white
		

	.login
	  display: flex
	  justify-content: center
	  align-content: center
	  text-decoration: none 
	  flex-wrap: wrap
	  transition-duration: 0.3s
	  width: 145px
	  height: 45px
	  margin-left: 27px
	  cursor: pointer
	  border: 1px solid white
	  transform: skew(170deg)
	  +lgXX-block
	  	width: 130px
	  	height: 40px
	  +lgX-block
	   width: 118px
	   height: 35px
	  +lg-block
	   width: 102px
	   height: 33px
	  +md-block
	  	width: 80px
	  	height: 27px
	  +xs-block
	  	width: 71px
	  	height: 17px
	  +xs(margin-left, 10px)

	.login span
	  font-size: 18px
	  font-family: 'ProximaNova', sans-serif
	  color: white
	  text-transform: uppercase
	  +lgXX-block
	  	font-size: 14px
	  +lgX-block
	  	font-size: 13px
	  +md-block
	  	font-size: 11px
	  +xs(font-size, 10px)
	
	.menu-top-login
		border: 1px solid black
	.menu-top-login span
		color: black

	.login:active
	  transition-duration: 0.3s
	  transform: scale(0.9)

	.hamburger
	  display: none
	  justify-content: center
	  flex-direction: column
	  cursor: pointer
	  +lg(display, flex)
	  z-index: 40
	  position: fixed

	.hamburger-element
	  transition: 0.2s
	  width: 25px
	  height : 4px
	  border: 1px solid black
	  margin: 1px 0px 1px 0px
	  background-color: white

	.hamburger-element-rotate-1
	  background-color: white
	  transform: rotate(43deg) translateY(12px)
	
	.hamburger-element-rotate-2
	  width: 0px
	  opacity: 0
	  transition: 0.1s
	  background-color: white
	
	.hamburger-element-rotate-3
	  background-color: white
	  transform: rotate(-45deg) translateY(-11px)

	.main__title
	  text-align: center
	  color: #ffffff
	  font-weight: 700
	  font-family: 'ProximaNova', sans-serif
	  font-size: 160px
	  +lgXX(font-size, 120px)
	  +lgX(font-size, 90px)
	  +lg(font-size, 66px)
	  +md(font-size, 48px)
	  +ms(font-size, 42px)
	  +xs(font-size, 28px)

	.main__button
	  display: flex
	  justify-content: center
	  align-content: center
	  flex-wrap: wrap
	  transition-duration: 0.3s
	  user-select: none
	  width: 232px
	  height: 60px
	  margin: 0 auto
	  margin-top: 59px
	  +lgXX-block
	  	 width: 202px
		 height: 51px
	  +lgX-block
	  	height: 40px
	  	width: 140px
	  margin-bottom: 192px
	  cursor: pointer
	  border: 1px solid white
	  transform: skew(170deg)
	  +lg-block
	  	width: 126px
	  	height: 35px
	  +md-block
	  	margin-top: 30px
	  	width: 108px
	  	height: 32px
	  	margin-bottom: 135px
	  +ms-block
	  	margin-top: 25px
	  	width: 92px
	  	height: 26px
	  	margin-bottom: 135px
	  +xs-block
	  	margin-top: 31px
	  	margin-bottom: 80px


	.main__button span
	  color: #ffffff
	  font-size: 16px
	  font-family: 'ProximaNova', sans-serif
	  text-transform: uppercase
	  +lg-block
	  	font-size: 12px
	  +md-block
	  	font-size: 11px
	  +ms-block
	  	font-size: 10px
	  user-select: none

	.main__button:active
	  transition-duration: 0.3s
	  transform: scale(0.9)

	.scroll-down
	  display: flex
	  user-select: none
	  justify-content: center
	  margin-bottom: 80px
	  +ms(margin-bottom, 35px)


	.scroll-down svg
	  width: 21px
	  height: 21px
	  fill: white
	  cursor: pointer

	.menu-top__logo
		width: 50px
		height: 50px
		margin-right: 20px
		+lgXX-block
			width: 40px
			height: 40px

	.menu-top__logo img
		width: 100%
		height: 100%

</style>