<template>
	<div class="worlds-first">
		<div class="container flex">
			<div class="worlds-first__title">
				The world's first seamless drone with a very lightweight hull and high travel speed
			</div>
			<div class="worlds-first__descr">
				The V.360° Camera allows you to masterfully capture the whole story with a premium 360° camera for limitless creating.
			</div>
			<div class="worlds-first__features">
				<div class="worlds-first__features-list">
					<div class="worlds-first__name-feature">
						Length
					</div>
					<div class="worlds-first__value">
						90 мм
					</div>
					<div class="worlds-first__name-feature">
						Battery
					</div>
					<div class="worlds-first__value">
						180 mA * h
					</div>
					<div class="worlds-first__name-feature">
						Radius of action of equipment
					</div>
					<div class="worlds-first__value">
						50 м
					</div>
					<div class="worlds-first__name-feature">
						Receiver included
					</div>
					<div class="worlds-first__value">
						yes
					</div>
					<div class="worlds-first__name-feature">
						Transmitter included
					</div>
					<div class="worlds-first__value">
						yes
					</div>
					<div class="worlds-first__name-feature">
						Color of the fuselage
					</div>
					<div class="worlds-first__value">
						Black
					</div>
				</div>
				<div class="worlds-first__features-list">
					<div class="worlds-first__name-feature">
						Main screw diameter
					</div>
					<div class="worlds-first__value">
						40 мм
					</div>
					<div class="worlds-first__name-feature">
						Flight time 
					</div>
					<div class="worlds-first__value">
						7 min
					</div>
					<div class="worlds-first__name-feature">
						Receiver
					</div>
					<div class="worlds-first__value">
						2.4 GHz
					</div>
					<div class="worlds-first__name-feature">
						Transmitter
					</div>
					<div class="worlds-first__value">
						2.4 GHz, 4 channels
					</div>
					<div class="worlds-first__name-feature">
						Gyroscope
					</div>
					<div class="worlds-first__value">
						6-axis
					</div>
					<div class="worlds-first__name-feature">
						Need to buy
					</div>
					<div class="worlds-first__value">
						4 х ААА batteries
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>


<style lang="sass">

	@import "~/assets/smart-grid.sass"
	
	.worlds-first
		width: 100%
		background: url("../assets/bg-worlds-first.png") 30%
		background-size: cover
		display: flex
		padding-top: 80px
		padding-bottom: 80px
		font-family: 'ProximaNova', sans-serif
		+lgXX-block
			background: url("../assets/bg-worlds-first.png") 30%
			background-size: cover 
			padding-top: 70px
			padding-bottom: 70px
		+lgX-block
			padding-top: 60px
			padding-bottom: 60px
		+lg-block
			padding-top: 50px
			padding-bottom: 65px
			background: url("../assets/bg-worlds-first.png") 50%
			background-size: cover 
		+ms-block
			background: url("../assets/bg-worlds-first.png") 60%
			background-size: cover 

	.worlds-first__title
		margin-left: 30px
		margin-right: 30px
		font-size: 36px
		color: #1e2227
		font-weight: 700
		letter-spacing: 1.2px
		max-width: 1040px
		text-align: center
		+lgXX-block
			font-size: 27px
			max-width: 870px
		+lg-block
			font-size: 24px
			max-width: 710px

	.worlds-first__descr
		margin-left: 30px
		margin-right: 30px
		color: #6e6e6e
		font-size: 18px
		font-weight: 400
		line-height: 36px
		margin-top: 47px
		max-width: 798px
		text-align: center
		+lgXX(max-width, 630px)
		+lg-block
			margin-top: 30px
			font-size: 16px
			max-width: 500px

	.worlds-first__features
		display: flex
		width: 100%
		flex-wrap: wrap
		justify-content: flex-end
		margin-top: 60px
		+lgXX-block
			margin-top: 45px
		+lg-block
			margin-top: 40px
		+md-block
			flex-direction: column
			justify-content: center
		+ms-block
			justify-content: center

	.worlds-first__features-list
		display: flex
		flex-direction: column
		margin-left: 30px
		margin-right: 90px
		+md-block
			margin-left: 0px
			margin-right: 0px
			align-content: center
			flex-wrap: wrap

	.worlds-first__name-feature
		margin-top: 15px
		font-size: 18px
		color: #6e6e6e
		line-height: 36px
		font-weight: 400
		+lgXX-block
			width: 250px


	.worlds-first__value
		font-weight: 700
		font-size: 24px
		letter-spacing: 0.75px
		text-transform: uppercase
		margin-top: 13px
		+lgXX-block
			font-size: 18px
			width: 250px
		
</style>