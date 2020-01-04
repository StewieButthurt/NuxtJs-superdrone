<template>
	<div class="player">
		<client-only>
			<div v-swiper:mySwiper="swiperOption">
			    <div class="swiper-wrapper">
			     <div class="swiper-slide" id="player1">
		     		<youtube video-id="dQw4w9WgXcQ"  ref="youtube1" @playing="playing1"></youtube>
			     	<div class="preview-youtube" :class="{'preview-disabled' : !previewYoutube1}">
	     		     	<div class="preview__button" 
	     		     		@click="changePreview1()" 
							:class="{'preview-disabled' : !previewButton1}"
	     		     		>
	     					<img src="~/assets/button-play.png" alt="button-play">
	     		     	</div>
			     	</div>
			     </div>
			     <div class="swiper-slide" id="player2">
		     		<youtube video-id="z_HWtzUHm6s"  ref="youtube2" @playing="playing2"></youtube>
			     	<div class="preview-youtube-2" :class="{'preview-disabled' : !previewYoutube2}">
	     		     	<div class="preview__button" 
	     		     		@click="changePreview2()" 
							:class="{'preview-disabled' : !previewButton2}"
	     		     		>
	     					<img src="~/assets/button-play.png" alt="button-play">
	     		     	</div>
			     	</div>
			     </div>
			    </div>
			    <div class="swiper-pagination"></div>
			    <div class="swiper-button-prev">
			    	<img src="../assets/arrow-left.png" alt="arrow-left">
			    </div>
			    <div class="swiper-button-next">
			    	<img src="../assets/arrow-right.png" alt="arrow-right">
			    </div>
			 </div>
		</client-only>
	</div>
</template>


<script>
	export default {
		data() {
			return {
		        swiperOption: {
		          navigation: {
		                      nextEl: '.swiper-button-next',
		                      prevEl: '.swiper-button-prev'
		          },
		          on: {
		          	slideNextTransitionStart : () => {
		          		
			        },
			        slidePrevTransitionStart : () => {
			          	
			          }
		          // some swiper options...
		          }
		        },
		        previewButton1: true,
		        previewYoutube1: true,
		        previewButton2: true,
		        previewYoutube2: true

			}
		},
		methods: {
		   playVideo1() {
		     this.$refs.youtube1.player.playVideo()
		   },
		   playVideo2() {
		     this.$refs.youtube2.player.playVideo()
		   },
		   playing1() {
		     this.previewButton1 = false;
			 this.previewYoutube1 = false;
		   },
		   playing2() {
		     this.previewButton2 = false;
			 this.previewYoutube2 = false;
		   },
		   changePreview1() {
			    this.playVideo1()
		   },
		   changePreview2() {
			    this.playVideo2()
		   }
		}
	}
</script>


<style lang="sass">
	@import "~/assets/smart-grid.sass"

	.player
		z-index: 3

	.swiper-container
		max-width: 1920px
		
	.swiper-slide iframe
		width: 100%
		height: 700px
		+lgXX(height, 700px)
		+lg(height, 500px)
		+xs(height, 300px)
	
	.ytp-chrome-top, .ytp-chrome-bottom
		display: none 

	.preview-youtube
		position: absolute
		display: flex
		justify-content: center
		flex-wrap: wrap
		align-content: center
		top: 0px
		left: 0px
		width: 100%
		height: 100%
		background: url('../assets/drone-player-1.png') 0% 20%
		background-size: cover
		+lgXX(background, url('../assets/drone-player-1.png') 0% 90%)
		+lg(background, url('../assets/drone-player-1.png') 50% 90%)


	.preview-youtube-2
		position: absolute
		display: flex
		justify-content: center
		flex-wrap: wrap
		align-content: center
		top: 0px
		left: 0px
		width: 100%
		height: 100%
		background: url('../assets/preview-2.png') 0% 20%
		background-size: cover
		+lgXX(background, url('../assets/preview-2.png') 0% 90%)
		+lg(background, url('../assets/preview-2.png') 50% 90%)

	.preview__button
		width: 550px
		height: 550px
		z-index: 10
		cursor: pointer
		user-select: none 
		text-decoration: none
		transition-duration: 0.4s
		+lgXX-block
			width: 458px
			height: 458px
		+lgX-block
			width: 412px
			height: 412px
		+lg-block
			width: 366px
			height: 366px
		+ms-block
			width: 222px
			height: 222px
		+xs-block
			width: 165px
			height: 165px

	.preview__button:active
		transition-duration: 0.4s
		transform: scale(0.9)
		user-select: none 

	.preview__button img
		width: 100%
		height: 100%
		user-select: none 

	.preview-disabled
		display: none

	.swiper-button-next
		width: 76px
		height: 54px
		background-image: inherit
		top: 55%
		user-select: none
		+lgXX-block
			width: 62px
			height: 46px
		+lg-block
			width: 54px
			height: 37px
		+ms-block
			width: 36px
			height: 24px
		+xs-block
			width: 26px
			height: 14px

	.swiper-button-next img
		width: 100%
		height: 100%
		user-select: none
		pointer-events: none
		outline: none

	.swiper-button-prev
		width: 76px
		height: 54px
		background-image: inherit
		user-select: none
		top: 55%
		+lgXX-block
			width: 62px
			height: 46px
		+lg-block
			width: 54px
			height: 37px
		+ms-block
			width: 36px
			height: 24px
		+xs-block
			width: 26px
			height: 14px

	.swiper-button-prev img
		width: 100%
		height: 100%
		user-select: none
		pointer-events: none
		outline: none

	.swiper-button-prev:active, :hover, :focus
		outline: 0
		outline-offset: 0
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)

	.swiper-button-nuxt:active, :hover, :focus
		outline: 0
		outline-offset: 0
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
</style>

