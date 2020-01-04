<template>
	<div class="super-light-drone" id="super-light-drone">
		<div class="container">
			<div class="super-light-drone__container">
				<div class="super-light-drone__title">
					Super Light Drone
				</div>
				<div class="super-light-drone__descr">
					More specifically, microinteractions are the animations and changes
					of the interface that happen once a user interacts with something,
					anything. Consider them interactive but informative animations.
					There are many reasons to use microinteractions. I can give you 
					four right now.
					<br>	
					<br>	
					The first good thing about microinteractions is improved usability. If
					the animation of the menu, from the example I gave above, slides
					down and over the content the user was just looking at, it provides
					affirmation for the user. This animation lets the user know what’s
					going on through visual cues.
				</div>
				<div class="super-light-drone__button">
					<span>read more</span>
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

	.super-light-drone
		width: 100%
		padding-top: 60px
		padding-bottom: 105px
		background: url("../assets/super-light-drone.png") 0% 38%
		background-size: cover
		display: flex
		+lgXX(background, url("../assets/super-light-drone.png") 38%)
		+lg(background, url("../assets/super-light-drone.png") 44%)
		+sm-block
			padding-bottom: 65px

	.super-light-drone__container
		display: flex
		flex-direction: column
		padding-left: 140px
		+ms-block
			margin-left: 0px
			align-items: center
			padding-left: 30px
			padding-right: 30px


	.super-light-drone__title
		color: #000000
		font-family: 'ProximaNova', sans-serif
		font-size: 36px
		font-weight: 700
		+lgXX-block
			font-size: 27px
		+lg-block
			font-size: 24px
		+ms-block
			text-align: center

	.super-light-drone__descr
		color: #6e6e6e
		font-family: 'ProximaNova', sans-serif
		font-size: 18px
		font-weight: 400
		margin-top: 35px
		line-height: 42px
		max-width: 594px
		+lg(font-size, 16px)
		+xs-block
			margin-top: 45px
			font-size: 14px

	.super-light-drone__button
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		user-select: none
		transition-duration: 0.3s
		width: 212px
		height: 60px
		margin-top: 68px
		cursor: pointer
		border: 2px solid black
		transform: skew(170deg)
		+lgXX-block
			width: 176px
			height: 50px
		+lgX-block
			width: 159px
			height: 45px
		+lg-block
			width: 141px
			height: 40px
			margin-top: 42px
		+ms-block
			width: 142px
			height: 34px
			border: 1px solid black
			margin-top: 20px
		+xs-block
			width: 113px
			height: 25px
			margin-top: 31px

	.super-light-drone__button span
		font-size: 18px
		font-family: 'ProximaNova', sans-serif
		font-weight: 700
		color: black
		text-transform: uppercase
		+lgX-block
			font-size: 16px
		+lg-block
			font-size: 14px
		+xs-block
			font-size: 11px

	.super-light-drone__button:active
		transition-duration: 0.3s
		transform: scale(0.9)


</style>