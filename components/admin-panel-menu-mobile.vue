<template>
	<div class="admin-panel-menu-mobile">
		<nuxt-link class="admin-panel-menu-mobile__link" 
				   @click.native="clickMobileLink()"
				   to="/admin/create"
				   active-class="active"
				   >
			<div class="icon-analytics">
				<svg viewBox="0 -1 401.52289 401" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>
			</div>
			<span>Create</span>
		</nuxt-link>
		<nuxt-link class="admin-panel-menu-mobile__link" 
				   @click.native="clickMobileLink()"
				   to="/admin/goods"
				   active-class="active"
				   >
			<div class="icon-analytics">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 470.586 470.586"
					 xml:space="preserve">
				<g>
					<path d="M327.081,0H90.234C74.331,0,61.381,12.959,61.381,28.859v412.863c0,15.924,12.95,28.863,28.853,28.863H380.35
						c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723
						c0,2.542-2.081,4.629-4.635,4.629H90.234c-2.55,0-4.619-2.087-4.619-4.629V28.859c0-2.548,2.069-4.613,4.619-4.613h219.411v70.181
						c0,6.682,5.443,12.099,12.129,12.099h63.198V441.723z M128.364,128.89H334.15c5.013,0,9.079,4.066,9.079,9.079
						c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079C119.285,132.957,123.352,128.89,128.364,128.89z
						 M343.229,198.98c0,5.012-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
						C339.163,189.901,343.229,193.968,343.229,198.98z M343.229,257.993c0,5.013-4.066,9.079-9.079,9.079H128.364
						c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15C339.163,248.914,343.229,252.98,343.229,257.993z
						 M343.229,318.011c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
						C339.163,308.932,343.229,312.998,343.229,318.011z"/>
				</g>
				</svg>
			</div>
			<span>Goods</span>
		</nuxt-link>
		<nuxt-link class="admin-panel-menu-mobile__link" 
				   @click.native="clickMobileLink()"
				   to="/admin/users"
				   active-class="active"
				   >
			<div class="icon-analytics">
				<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 476 476" xml:space="preserve">
				<g>
					<path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48
						c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12
						V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2
						c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30
						c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9
						c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9
						c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1
						s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8
						h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z"/>
				</g>
				</svg>
			</div>
			<span>Users</span>
		</nuxt-link>
		<div class="admin-panel-menu-mobile__link" @click="logout()">
			<div class="icon-analytics">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 471.2 471.2"  xml:space="preserve">
				<g>
					<g>
						<path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
							s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
							S235.019,444.2,227.619,444.2z"/>
						<path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
							s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
							C455.319,239.9,455.319,231.3,450.019,226.1z"/>
					</g>
				</g>
				</svg>
			</div>
			<span>Log out</span>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			async logout() {
				await this.$router.push('/')
				this.$store.dispatch('auth/logout')
				
			},
			clickMobileLink() {
				this.$emit('clickMobileLink')
			}
		}
	}
</script>


<style lang="sass">
	@import "~/assets/smart-grid.sass"

	.admin-panel-menu-mobile
		height: 99.5vmax
		display: none
		background-color: white
		user-select: none 
		position: absolute
		left: 0px
		top: 0px
		z-index: 20
		width: 300px
		border-right: 1px solid grey
		+lgX-block
			width: 200px
		+xs-block
			display: block

	.icon-analytics 
		width: 22.5px
		height: 22.5px
		+lgX-block
			width: 15px
			height: 15px
	
	.icon-analytics svg
		width: 100%
		height: 100%

	.admin-panel-menu-mobile__link
		display: flex
		text-decoration: none
		box-sizing: border-box
		color: #383838
		align-items: center
		align-content: center
		flex-wrap: wrap
		width: 100%
		height: 75px
		padding-left: 60px
		cursor: pointer
		+lgX-block
			height: 50px

	.admin-panel-menu-mobile__link:hover
		background-color: #ededed
		color: #1787fb
		fill: #1787fb

	.admin-panel-menu-mobile__link span
		padding-left: 10px
		font-size: 24px
		+lgX-block
			font-size: 16px

	.active
		background-color: #e5f1ff
		color: #1787fb
		fill: #1787fb
</style>