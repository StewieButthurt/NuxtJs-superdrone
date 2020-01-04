<template>
		 <transition-group 
		 	class="best-drones-admin__card" 
			name="flip-list" 
			tag="div"
			>
			<div key="best-drones-admin__card-img-round" class="best-drones-admin__card-img-round" v-if="productNewThisComponent === true && oldImage === true">
				<span>new</span>
			</div>
			<div v-if="oldImage === true" key="best-drones-admin__card-img" class="best-drones-admin__card-img">
				<div class="best-drones-admin__edit-element" v-if="editGoodOn === true">
					<svg @click="editImage = true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve">
						<g>
							<path d="M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8
								c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8
								C471.2,236.25,465.2,230.15,457.7,230.15z"/>
							<path d="M226.1,346.75c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-62.7,62.8
								V30.75c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v273.9l-62.8-62.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1
								L226.1,346.75z"/>
						</g>
					</svg>
				</div>
				<div class="best-drones-admin__info-size" v-if="editGoodOn === true">
					408x267
				</div>
				<img :src="img" alt="png-drone">
			</div>
			<client-only>
				<file-pond
					name="userFile"
					ref="pond"
					label-idle="Drop files here..."
					:instantUpload="false"
					v-bind:allow-multiple="false"
					accepted-file-types="image/jpeg, image/png"
					server="/api/product/admin/upload-image"
					v-bind:files="myFiles"
					v-if="editImage === true"
					key="file-pond-key"
					@addfilestart="handleFilePondFilestart"
					@removefile="handleFilePondRemoveFile"
					@processfile="handleFilePondProcessfile" 
					/>	
			</client-only>
			<div key="best-drones-admin__card-title" class="best-drones-admin__card-title" v-if="editTitleStatus === false">
				<div class="best-drones-admin__edit-element edit-element-title" v-if="editGoodOn === true">
					<svg @click="editTitle()" viewBox="0 -1 401.52289 401" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>
				</div>
				{{titleThisComponent}}
			</div>
			<div key="best-drones-admin__textaera-button" class="best-drones-admin__textaera-button">
				<div v-if="editTitleStatus === true" class="best-drones-admin__accept-title">
					<svg @click="acceptTitle()" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
						<g>
							<g id="Check_Circle">
								<path d="M192.485,0C86.173,0,0,86.173,0,192.485S86.173,384.97,192.485,384.97c106.3,0,192.485-86.185,192.485-192.485
									C384.97,86.173,298.785,0,192.485,0z M192.485,360.909c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061
									s168.424,75.406,168.424,168.424S285.503,360.909,192.485,360.909z"/>
								<path d="M280.306,125.031L156.538,247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179,0c-4.752,4.704-4.752,12.319,0,17.011
									l60.139,58.936c4.932,4.343,12.307,4.824,17.179,0l132.321-131.118c4.74-4.692,4.74-12.319,0-17.011
									C292.745,120.339,285.058,120.339,280.306,125.031z"/>
							</g>
						</g>
						</svg>
				</div>
				<div class="best-drones-admin__accept-title cancel-title" v-if="editTitleStatus === true" >
						<svg @click="cancelTitle()" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 475.2 475.2" style="enable-background:new 0 0 475.2 475.2;" xml:space="preserve">
							<g>
								<g>
									<path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6
										s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7
										s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7
										C468.6,170.8,468.6,304.4,386.5,386.5z"/>
									<path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1
										l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4
										c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/>
								</g>
							</g>
						</svg>
				</div>
				<textarea v-if="editTitleStatus === true" v-model="newTitle" wrap="soft" name="input-title" type="text" size="16" autocomplete="off" key="best-drones-admin__card-title-input" class="best-drones-admin__card-title-input"></textarea>
			</div>
			<div key="best-drones-admin__card-price" class="best-drones-admin__card-price" v-if="editPriceStatus === false">
				<div class="best-drones-admin__edit-element edit-element-price" v-if="editGoodOn === true">
					<svg @click="editPrice()" viewBox="0 -1 401.52289 401" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>
				</div>
				{{priceThisComponent}}
			</div>
			<div key="best-drones-admin__textaera-button-2" class="best-drones-admin__textaera-button">
				<div  v-if="editPriceStatus === true" class="best-drones-admin__accept-title">
				<svg @click="acceptPrice()" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
					<g>
						<g id="Check_Circle">
							<path d="M192.485,0C86.173,0,0,86.173,0,192.485S86.173,384.97,192.485,384.97c106.3,0,192.485-86.185,192.485-192.485
								C384.97,86.173,298.785,0,192.485,0z M192.485,360.909c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061
								s168.424,75.406,168.424,168.424S285.503,360.909,192.485,360.909z"/>
							<path d="M280.306,125.031L156.538,247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179,0c-4.752,4.704-4.752,12.319,0,17.011
								l60.139,58.936c4.932,4.343,12.307,4.824,17.179,0l132.321-131.118c4.74-4.692,4.74-12.319,0-17.011
								C292.745,120.339,285.058,120.339,280.306,125.031z"/>
						</g>
					</g>
					</svg>
				</div>
				<div class="best-drones-admin__accept-title cancel-title" v-if="editPriceStatus === true" >
					<svg @click="cancelPrice()" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 475.2 475.2" style="enable-background:new 0 0 475.2 475.2;" xml:space="preserve">
						<g>
							<g>
							<path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6
								s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7
								s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7
								C468.6,170.8,468.6,304.4,386.5,386.5z"/>
							<path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1
								l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4
								c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/>
							</g>
						</g>
					</svg>
				</div>
				<textarea v-if="editPriceStatus === true" v-model="newPrice" wrap="soft" name="input-price" type="text" size="16" autocomplete="off" key="best-drones-admin__card-price-input" class="best-drones-admin__card-title-input price-input"></textarea>
			</div>
			<div v-if="editGoodOn === true" class="best-drones-admin__checkbox-new-product" key="checkbox-new">
				<input type="checkbox" name="new-product" v-model="productNewThisComponent">
				<label class="best-drones-admin__checkbox-new-product-label" for="new-product">New</label>
			</div>
			<div :id="title" key="best-drones-admin__edit-and-delete" class="best-drones-admin__edit-and-delete">
				<div class="best-drones-admin__edit" @click="editGoodOn = true, returnButton = true" v-if="editGoodOn === false">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 55.25 55.25" style="enable-background:new 0 0 55.25 55.25;" xml:space="preserve">
					<path d="M52.618,2.631c-3.51-3.508-9.219-3.508-12.729,0L3.827,38.693C3.81,38.71,3.8,38.731,3.785,38.749
						c-0.021,0.024-0.039,0.05-0.058,0.076c-0.053,0.074-0.094,0.153-0.125,0.239c-0.009,0.026-0.022,0.049-0.029,0.075
						c-0.003,0.01-0.009,0.02-0.012,0.03l-3.535,14.85c-0.016,0.067-0.02,0.135-0.022,0.202C0.004,54.234,0,54.246,0,54.259
						c0.001,0.114,0.026,0.225,0.065,0.332c0.009,0.025,0.019,0.047,0.03,0.071c0.049,0.107,0.11,0.21,0.196,0.296
						c0.095,0.095,0.207,0.168,0.328,0.218c0.121,0.05,0.25,0.075,0.379,0.075c0.077,0,0.155-0.009,0.231-0.027l14.85-3.535
						c0.027-0.006,0.051-0.021,0.077-0.03c0.034-0.011,0.066-0.024,0.099-0.039c0.072-0.033,0.139-0.074,0.201-0.123
						c0.024-0.019,0.049-0.033,0.072-0.054c0.008-0.008,0.018-0.012,0.026-0.02l36.063-36.063C56.127,11.85,56.127,6.14,52.618,2.631z
						M51.204,4.045c2.488,2.489,2.7,6.397,0.65,9.137l-9.787-9.787C44.808,1.345,48.716,1.557,51.204,4.045z M46.254,18.895l-9.9-9.9
						l1.414-1.414l9.9,9.9L46.254,18.895z M4.961,50.288c-0.391-0.391-1.023-0.391-1.414,0L2.79,51.045l2.554-10.728l4.422-0.491
						l-0.569,5.122c-0.004,0.038,0.01,0.073,0.01,0.11c0,0.038-0.014,0.072-0.01,0.11c0.004,0.033,0.021,0.06,0.028,0.092
						c0.012,0.058,0.029,0.111,0.05,0.165c0.026,0.065,0.057,0.124,0.095,0.181c0.031,0.046,0.062,0.087,0.1,0.127
						c0.048,0.051,0.1,0.094,0.157,0.134c0.045,0.031,0.088,0.06,0.138,0.084C9.831,45.982,9.9,46,9.972,46.017
						c0.038,0.009,0.069,0.03,0.108,0.035c0.036,0.004,0.072,0.006,0.109,0.006c0,0,0.001,0,0.001,0c0,0,0.001,0,0.001,0h0.001
						c0,0,0.001,0,0.001,0c0.036,0,0.073-0.002,0.109-0.006l5.122-0.569l-0.491,4.422L4.204,52.459l0.757-0.757
						C5.351,51.312,5.351,50.679,4.961,50.288z M17.511,44.809L39.889,22.43c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
						L16.097,43.395l-4.773,0.53l0.53-4.773l22.38-22.378c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L10.44,37.738
						l-3.183,0.354L34.94,10.409l9.9,9.9L17.157,47.992L17.511,44.809z M49.082,16.067l-9.9-9.9l1.415-1.415l9.9,9.9L49.082,16.067z"/>
					</svg>
				</div>
				<div class="best-drones-admin__accept" v-if="editGoodOn === true">
					<svg @click="acceptChanges()" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
					<g>
						<g id="Check_Circle">
							<path d="M192.485,0C86.173,0,0,86.173,0,192.485S86.173,384.97,192.485,384.97c106.3,0,192.485-86.185,192.485-192.485
								C384.97,86.173,298.785,0,192.485,0z M192.485,360.909c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061
								s168.424,75.406,168.424,168.424S285.503,360.909,192.485,360.909z"/>
							<path d="M280.306,125.031L156.538,247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179,0c-4.752,4.704-4.752,12.319,0,17.011
								l60.139,58.936c4.932,4.343,12.307,4.824,17.179,0l132.321-131.118c4.74-4.692,4.74-12.319,0-17.011
								C292.745,120.339,285.058,120.339,280.306,125.031z"/>
						</g>
					</g>
					</svg>
				</div>
				<div v-if="returnButton === false" class="best-drones-admin__delete" @click="$emit('deleteProduct', {title, img})">
					<svg viewBox="-40 0 427 427.00131" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>
				</div>
				<div v-if="returnButton === true" class="best-drones-admin__edit" @click="returnChange()">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
						<g>
							<g>
								<path d="M384.834,180.699c-0.698,0-348.733,0-348.733,0l73.326-82.187c4.755-5.33,4.289-13.505-1.041-18.26
									c-5.328-4.754-13.505-4.29-18.26,1.041l-82.582,92.56c-10.059,11.278-10.058,28.282,0.001,39.557l82.582,92.561
									c2.556,2.865,6.097,4.323,9.654,4.323c3.064,0,6.139-1.083,8.606-3.282c5.33-4.755,5.795-12.93,1.041-18.26l-73.326-82.188
									c0,0,348.034,0,348.733,0c55.858,0,101.3,45.444,101.3,101.3s-45.443,101.3-101.3,101.3h-61.58
									c-7.143,0-12.933,5.791-12.933,12.933c0,7.142,5.79,12.933,12.933,12.933h61.58c70.12,0,127.166-57.046,127.166-127.166
									C512,237.745,454.954,180.699,384.834,180.699z"/>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</transition-group>
</template>

<script>
	import vueFilePond from 'vue-filepond';
	import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

	import * as nprogress from 'nprogress';

	if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);

		import('filepond/dist/filepond.min.css');
		import('filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css');
		
	}

	export default {
		data() {
			return {
				imgThisComponent: this.img,
				titleThisComponent: this.title,
				priceThisComponent: this.price,
				productNewThisComponent: this.productNew,
				editGoodOn: false,
				myFiles: [],
				uploadedFiles: [],
				editImage: false,
				oldImage: true,
				editTitleStatus: false,
				editPriceStatus: false,
				newTitle: this.title,
				newPrice: this.price,
				newProductNew: this.productNew,
				animationActive: false,
				returnButton: false,
				fileUpload: null
			}
		},
		props: [
		  'img',
		  'title',
		  'price',
		  'productNew',
		  'id'
		],
		components: {
			FilePond
		},
		computed: {
			imgResult() {
				if(this.uploadedFiles.length === 0) {
					return this.img
				} else {
					return this.uploadedFiles[0]
				}
			}
		},
		methods: {
			handleFilePondFilestart: async function(file) {
				this.oldImage = false
				await this.uploadedFiles.push(file.filename);
			},
			handleFilePondRemoveFile: async function() {
				await this.removeImage()
				this.oldImage = true
			},
			handleFilePondProcessfile: function (error, file) {
				nprogress.start();
				console.log("FilePond succesfully processed file " + file);
				this.fileUpload = true;
	            this.$nextTick();
	            nprogress.done();
			},
			removeImage() {
				this.uploadedFiles = []
				this.editImage = false
				
			},
			async acceptChanges() {
				try {
					nprogress.start();
					const formData = {
						title: this.titleThisComponent,
						price: this.priceThisComponent,
						img: this.imgResult,
						productNew: this.productNewThisComponent,
						id: this.id,
						add: false
					}
					if(this.fileUpload !== true && this.uploadedFiles.length !== 0) {
						await this.$refs.pond.processFile().then(file => {
						});
					}
					await this.$store.dispatch('products/updateProduct',  formData)


				this.editGoodOn = false 
				this.editImage = false
				this.returnButton = false
				this.editTitleStatus = false
				this.editPriceStatus = false
				this.oldImage = true
				nprogress.done();
				} catch (e) {
					nprogress.done();
					throw e
				}
			},
			returnChange() {
				this.imgThisComponent = this.img
				this.titleThisComponent = this.title
				this.priceThisComponent = this.price
				this.productNewThisComponent = this.productNew
				this.editGoodOn = false 
				this.editImage = false
				this.returnButton = false
				this.editTitleStatus = false
				this.editPriceStatus = false
				this.oldImage = true
				this.newTitle = this.title,
				this.newPrice = this.price

			},
			editTitle() {
				let element = document.getElementById(`${this.title}`)
				if(!element.classList.contains('flip-list-move')) {
					this.editTitleStatus = true
				}
			},
			acceptTitle() {
				this.titleThisComponent = this.newTitle
				this.editTitleStatus = false
			},
			cancelTitle() {
				this.editTitleStatus = false
			},
			editPrice() {
				let element = document.getElementById(`${this.title}`)
				if(!element.classList.contains('flip-list-move')) {
					this.editPriceStatus = true
				}
			},
			acceptPrice() {
				this.priceThisComponent = this.newPrice
				this.editPriceStatus = false
			},
			cancelPrice() {
				this.editPriceStatus = false
			}
		}
	}
</script>


<style lang="sass">
	@import "~/assets/smart-grid.sass"
	
	.best-drones-admin__card
		width: 400px
		background-color: #ffffff
		display: flex
		flex-direction: column
		user-select: none
		align-items: center
		position: relative
		margin-left: 10px
		margin-top: 50px
		margin-bottom: 20px
		margin-right: 10px
		+lgXX-block
			width: 293px
		+lgX-block
			width: 195px
			margin-top: 35px
		+lg-block
		+xs-block
			margin-left: 5px
			margin-right: 5px

	
	.best-drones-admin__card img
		width: 100%
		height: 100%

	.best-drones-admin__card-img
		width: 337px
		height: 252px
		position: relative
		user-select: none
		margin-bottom: 47px
		+lgXX-block
			width: 290px
			margin-bottom: 30px
		+lgX-block
			width: 178px
			height: 155px

	.best-drones-admin__card-img svg
		width: 30px
		height: 30px
		position: absolute
		left: 0px
		top: 0px
		cursor: pointer

	.best-drones-admin__card-img-round
		display: flex
		justify-content: center
		align-content: center
		flex-wrap: wrap
		position: absolute
		z-index: 9
		right: 0px
		top: -10px
		width: 100px
		height: 100px
		background-color: black
		color: white
		text-transform: uppercase
		user-select: none
		border-radius: 65px
		font-size: 24px
		+lgXX-block
			width: 90px
			height: 90px
		+lgX-block
			width: 60px
			height: 60px
			right: 0px
			top: -5px
			font-size: 16px

	.best-drones-admin__card-title
		font-size: 24px
		margin-bottom: 50px
		position: relative
		color: #000000
		font-weight: 700
		letter-spacing: 0.6px
		+lgX-block
			font-size: 16px
			margin-bottom: 31px
			
	.best-drones-admin__card-title-input
		width: 307px
		min-height: 80px
		outline: none
		user-select: none 
		border: 1px solid silver
		box-sizing: border-box
		padding-left: 10px
		margin-bottom: 50px
		color: #000000
		font-weight: 700
		letter-spacing: 0.6px
		font-size: 27px
		resize: none
		+lgXX-block
			width: 240px
			font-size: 24px
		+lgX-block
			font-size: 16px
			width: 165px
			min-height: 29px
			margin-bottom: 30px

	.best-drones-admin__card-price
		color: #000000
		font-size: 36px
		font-weight: 700
		position: relative
		letter-spacing: 0.9px
		user-select: none
		+lgX-block
			font-size: 23px

	.best-drones-admin__edit-and-delete
		display: flex
		flex-wrap: wrap
		align-content: center
		margin-top: 50px
		+lgX-block
			margin-top: 30px
		

	.best-drones-admin__edit
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-content: center
		width: 50px
		height: 50px
		margin-left: 15px
		margin-right: 15px
		+lgX-block
			width: 30px
			height: 30px

	.best-drones-admin__edit svg
		width: 100%
		height: 100%
		cursor: pointer

	.best-drones-admin__edit svg:hover
		fill: #5a4239
	
	.best-drones-admin__accept
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-content: center
		width: 50px
		height: 50px
		margin-left: 15px
		margin-right: 15px
		+lgX-block
			width: 30px
			height: 30px	

	.best-drones-admin__accept svg
		width: 100%
		height: 100%
		cursor: pointer

	.best-drones-admin__accept svg:hover
		fill: #268226


	.best-drones-admin__delete
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-content: center
		width: 50px
		height: 50px
		margin-left: 15px
		margin-right: 15px
		+lgX-block
			width: 30px
			height: 30px

	.best-drones-admin__delete svg
		width: 100%
		height: 100%
		cursor: pointer

	.best-drones-admin__delete svg:hover
		fill: #ff5858
	
	.best-drones-admin__edit-element
		position: absolute
		left: 0px
		top: -33px
		width: 30px
		height: 30px
		+lgXX-block
			top: -36px
		+lgX-block
			top: -25px
			width: 20px
			height: 20px

	.best-drones-admin__edit-element svg
		width: 100%
		height: 100%
		cursor: pointer

	.best-drones-admin__edit-element svg:hover
		fill: #5a4239

	.best-drones-admin__info-size
		position: absolute
		left: 40px
		top: -30px
		font-size: 19px
		color: #848484
		+lgX-block
			font-size: 13px
			top: -23px
			left: 31px
	
	.edit-element-title
		left: inherit
		right: -33px
		top: -21px
		+lgX-block
			left: inherit
			right: -23px
			top: -20px

	.edit-element-price
		left: inherit
		right: -36px
		top: -22px
		+lgX-block
			right: -23px
			top: -16px
	
	.filepond--wrapper
		width: 337px
		margin-bottom: 35px
		+lgXX-block
			width: 290px
		+lgX-block
			width: 178px
			margin-top: 10px
		+xs-block
			width: 168px

	.flip-list-move
		transition: transform 1s
	
	.best-drones-admin__accept-title
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-content: center
		width: 30px
		height: 30px
		position: absolute
		right: 56px
		top: -38px
		+lgXX-block
			right: 56px
			top: -38px
		+lgX-block
			width: 20px
			height: 20px
			right: 40px
			top: -23px
	
	.best-drones-admin__accept-title svg
		width: 100%
		height: 100%
		cursor: pointer

	.best-drones-admin__accept-title svg:hover
		fill: #268226

	.cancel-title
		right: 12px
		+lgXX-block
			right: 12px
		+lgX-block
			right: 12px

	.cancel-title svg:hover
		fill: #ff5858
	
	.price-input
		font-size: 36px
		margin-bottom: 15px
		+lgXX-block
			font-size: 24px

	
	.cancel-price
		right: 50px
		+lgXX-block
			right: 35px
		+lgX-block
			right: 15px
	
	.cancel-price svg:hover
		fill: #ff5858

	.best-drones-admin__textaera-button
		position: relative
	
	.best-drones-admin__checkbox-new-product
		margin-top: 50px
		margin-right: 10px 
		display: flex
		align-items: center
		+lgX-block
			margin-top: 31px
			margin-right: 8px 
	
	.best-drones-admin__checkbox-new-product input
		width: 22px
		height: 22px
		+lgX-block
			width: 15px
			height: 15px

	.best-drones-admin__checkbox-new-product-label
		font-size: 24px
		position: relative
		color: #000000
		font-weight: 700
		margin-left: 5px
		letter-spacing: 0.6px
		text-transform: uppercase 
		+lgX-block
			font-size: 16px
			
</style>