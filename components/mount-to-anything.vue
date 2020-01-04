<template>
	<div class="mount-to-anything">
		<div class="mount-to-anything__title">
			Mount to anything. Anywhere.
		</div>
		<div class="mount-to-anything__descr">
			Fully compatible with GoPro® mounts, traditional cameras and tripod designs with a built in ¼ – 20 UNC tripod housing, we’re made to mount anything. From helmets to handlebars, we go where you go.
		</div>
			<client-only>
				<div v-swiper:mySwiper="swiperOption">
				    <div class="swiper-wrapper">
				     <div class="swiper-slide">
			     		<img src="../assets/drone-slider-1.png" alt="drone-slide">
				     </div>
				     <div class="swiper-slide">
			     		<img src="../assets/drone-slider-2.png" alt="drone-slide">
				     </div>
				     <div class="swiper-slide">
			     		<img src="../assets/drone-slider-3.png" alt="drone-slide">
				     </div>
				    </div>
				    <div class="swiper-pagination"></div>
				    <div class="swiper-button-prev">
				    	<img src="../assets/arrow-left-grey.png" alt="arrow-left">
				    </div>
				    <div class="swiper-button-next">
				    	<img src="../assets/arrow-right-grey.png" alt="arrow-right">
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
		        }
			}
		},
	}
</script>


<style lang="sass" scoped>
	@import "~/assets/smart-grid.sass"
	
	.mount-to-anything
		width: 100%
		background-color: #ffffff
		background-size: cover
		display: flex
		padding-top: 60px
		padding-bottom: 60px
		font-family: 'ProximaNova', sans-serif
		flex-direction: column
		align-items: center
		+lgXX-block
			padding-top: 45px
			padding-bottom: 45px
		+lg-block
			padding-top: 40px
			padding-bottom: 40px

	.mount-to-anything__title
		color: #1e2227
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

	.mount-to-anything__descr
		max-width: 820px
		text-align: center
		margin-left: 30px
		margin-right: 30px
		color: #6e6e6e
		font-size: 16px
		font-weight: 400
		line-height: 36px
		margin-top: 15px
		margin-bottom: 50px
			

	.swiper-slide
		display: flex
		justify-content: center
		width: 600px

	.swiper-slide img
		width: 48%
		height: 70%
		+ms-block
			width: 75%

	.swiper-container
		max-width: 1920px
		width: 100%

	.swiper-button-prev, .swiper-button-next
		margin-top: -34px
		+ms(margin-top, -23px)
		+xs(margin-top, -8px)
		    
		
	.swiper-button-prev:active, :hover, :focus
		outline: 0
		outline-offset: 0
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)

	.swiper-button-nuxt:active, :hover, :focus
		outline: 0
		outline-offset: 0
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
</style>