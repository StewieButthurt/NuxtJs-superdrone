<template>
	<transition name="fade" 
				enter-active-class="animated fadeInLeft" 
				leave-active-class="animated fadeOutLeft"
				mode="out-in" 
				appear
				>
		<div class="mobile-menu">
			<div class="menu-link menu-link__modile" @click="$emit('clickMobileLink')" v-scroll-to="'#main'">Home</div>
			<div class="menu-link menu-link__modile" @click="$emit('clickMobileLink')" v-scroll-to="'#super-services'">Services</div>
			<div class="menu-link menu-link__modile" @click="$emit('clickMobileLink')" v-scroll-to="'#best-drones'">Products</div>
			<div class="menu-link menu-link__modile" @click="$emit('clickMobileLink')" v-scroll-to="'#footer'">Contacts</div>
			<nuxt-link no-prefetch to="/cart/" class="menu-link menu-link__modile">Cart</nuxt-link>
			<nuxt-link no-prefetch to="/admin/" class="menu-link menu-link__modile">
	          <span>Login</span>
	        </nuxt-link>
		</div>
	</transition>
</template>

<script>
	export default {
		
	}
</script>

<style lang="sass">
	@import "../assets/smart-grid.sass"
	
	.mobile-menu
		display: none
		position: fixed
		top: 0px
		left: 0px
		height: 100vmax
		width: 165px
		color: white
		font-size: 18px
		background:  linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))
		+wrapper()
		flex-direction: column
		margin: 0 auto
		align-items: center
		align-content: center
		padding-top: 60px
		+lg(display, flex)
		flex-wrap: wrap 
		z-index: 30
		text-transform: uppercase

	.menu-link__modile
		margin-top: 20px
		text-align: center

	.menu-link
	  display: flex 
	  margin-right: 15px
	  margin-left: 15px
	  cursor: pointer
	  text-decoration: none 
	  color: #ffffff
	
	.menu-link:hover 
	  color: #a3a3a3

	.menu-link__modile
		margin-top: 20px

</style>