<template>
	<div class="super-services" id="super-services">
		<div class="container flex super-services_padding">
			<div class="super-services__title">
				Super Services
			</div>
			<div class="super-services__descr">
				The first good thing about microinteractions is improved usability. If the animation of the menu, from the example I gave above, slides down and over the content the user was just looking at, it provides affirmation for the user. 
			</div>
			<div class="super-services__services">
				<div class="super-services__service">
					<div class="super-services__service-img-1">
						<img src="~/assets/camera.png" alt="camera-png">
					</div>
					<div class="super-services__service-title">
						4k resolution
					</div>
					<div class="super-services__service-descr">
						More specifically, microinteractions are the animations and changes of the interface that happen once a user interacts with something, anything. Consider them interactive but informative animations. There are many reasons to use microinteractions. I can give you four right now.
					</div>
				</div>
				<div class="super-services__service">
					<div class="super-services__service-img-2">
						<img src="~/assets/clock.png" alt="clock-png">
					</div>
					<div class="super-services__service-title">
						TIMELAPSE
					</div>
					<div class="super-services__service-descr">
						More specifically, microinteractions are the animations and changes of the interface that happen once a user interacts with something, anything. Consider them interactive but informative animations. There are many reasons to use microinteractions. I can give you four right now.
					</div>
				</div>
				<div class="super-services__service">
					<div class="super-services__service-img-3">
						<img src="~/assets/speedometer.png" alt="speedometer-png">
					</div>
					<div class="super-services__service-title">
						super speed
					</div>
					<div class="super-services__service-descr">
						More specifically, microinteractions are the animations and changes of the interface that happen once a user interacts with something, anything. Consider them interactive but informative animations. There are many reasons to use microinteractions. I can give you four right now.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="sass">
	@import "~/assets/smart-grid.sass"

	.super-services
		background-color: white
		width: 100%
		padding-top: 70px
		padding-bottom: 90px
		font-family: 'ProximaNova', sans-serif
		display: flex
		+lgXX-block
			padding-top: 58px
			padding-bottom: 78px
		+lgX-block
			padding-top: 70px
			padding-bottom: 90px
		+lg-block
			padding-top: 58px
			padding-bottom: 78px

	.flex
		display: flex
		flex-direction: column
		align-items: center

	.super-services__title
		color: #1e2227
		font-size: 36px
		font-weight: 700
		letter-spacing: 1.5px
		text-align: center
		margin-bottom: 25px
		+lgXX-block
			font-size: 27px
		+lg-block
			font-size: 24px

	.super-services__descr
		color: #6e6e6e
		font-size: 16px
		font-weight: 400
		line-height: 30px
		max-width: 785px
		text-align: center
		+xs-block
			margin-left: 30px
			margin-right: 30px

	.super-services__services
		display: flex
		flex-wrap: wrap
		margin-left: 30px
		margin-right: 30px
		max-width: 1400px
		width: 100%
		justify-content: center
		+xs-block
			margin-left: 0px
			margin-right: 0px

	.super-services__service
		display: flex
		flex-direction: column
		margin-top: 100px
		margin-left: 40px
		margin-right: 40px
		+lgXX-block
			width: 350px
			margin-left: 20px
			margin-right: 20px
		+lg-block
			align-items: center
			text-align: center
			margin-left: 20px
			margin-right: 20px
			margin-top: 88px
		+xs-block
			margin-left: 30px
			margin-right: 30px


	.super-services__service img
		width: 100%
		height: 100%

	.super-services__service-img-1
		width: 63px
		height: 45px

	.super-services__service-img-2
		width: 34px
		height: 44px

	.super-services__service-img-3
		width: 51px
		height: 51px

	.super-services__service-title
		margin-top: 40px
		font-size: 20px
		color: #000000
		font-weight: 700
		text-transform: uppercase
		letter-spacing: 0.75px
		+lgXX-block
			font-size: 18px
		

	.super-services__service-descr
		max-width: 325px
		color: #6e6e6e
		font-size: 16px
		font-weight: 400
		line-height: 30px
		margin-top: 38px
	
	.super-services_padding
		+xs-block
			padding-left: 0px
			padding-right: 0px
</style>