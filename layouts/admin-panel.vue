<template>
  <div class="admin-panel">
  	<div class="hamburger hamburger__position" @click="rotate = !rotate">
  	  <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-1': rotate}"></div>
  	  <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-2': rotate}"></div>
  	  <div class="hamburger-element" v-bind:class="{ 'hamburger-element-rotate-3': rotate}"></div>
  	</div>
	<app-admin-panel-menu />
	<transition
			enter-active-class="animated fadeInLeft"
			leave-active-class="animated fadeOutLeft"
			appear
			key="transition-page-panel-menu"
  		>
			<app-admin-panel-menu-mobile 
				v-if="rotate === true"
				@clickMobileLink="clickMobileLink()" 
			/>
  	</transition>
	<transition
			enter-active-class="animated fadeIn"
			appear
			key="transition-page-panel"
  		>
  		<nuxt />		
  	</transition>
  </div>
</template>

<script>
	const AppAdminPanelMenu = () => import('../components/admin-panel-menu')
	const AppAdminPanelMenuMobile = () => import('../components/admin-panel-menu-mobile')


	export default {
		components: {
			AppAdminPanelMenu,
			AppAdminPanelMenuMobile
		},
		data() {
		    return {
		      rotate: false
		    }
		},
		methods: {
		  clickMobileLink() {
		    this.rotate = false;
		  }
		}
	}
</script>

<style lang="sass" scoped>
	
	@import "~/assets/smart-grid.sass"

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

	.admin-panel
		border-top: 1px solid grey
		display: flex
		position: relative
		+xs-block
			justify-content: center


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
	
	.hamburger__position
		position: fixed
		left: 20px
		top: 14px
		display: none
		+xs-block
			display: flex



</style>
