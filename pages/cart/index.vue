<template>
    <div class="cart">
        <div class="cart__title">
            <div class="cart__title-logo">
                <img src="~/static/quadcopter.png" alt="logo">
            </div>
           <span>My cart</span>
        </div>
        <div class="cart__info-empty" v-if="products.length === 0">
           Your cart is so far empty
        </div>
        <div class="cart__products-and-checkout">
            <div class="cart__products">
                <app-products-cart
                    v-for="(item, index) in products"
                    :key="item.title"
					:img="item.img"
					:title="item.title"
					:price="item.price"
					:productNew="item.productNew"
                    :indexCart="index"
                    :indexProducts="item.index"
                    :selectNumbers="item.selectNumbers"
                    @deleteProductsButton="deleteProductsButton"
                >
                </app-products-cart>
            </div>
            <div class="cart__result-price-wrapper-desktop">
                <div class="cart__result-price-desktop">
                    <div class="cart__result-price-in-cart-desktop">
                        In the cart {{productsSelectN}} {{productsText}}
                    </div>
                    <div class="cart__result-price-in-cart-price-desktop">
                       {{resultPrice}} $
                    </div>
                    <div class="cart__line-price">
                    </div>
                </div>
                <nuxt-link no-prefetch to="/form/" class="cart__result-price-button">
                    <span>Continue clearance</span>
                </nuxt-link>
            </div>
            <div class="cart__result-price-wrapper-desktop-mobile">
                <div class="cart__result-price-desktop-mobile">
                    <div class="cart__result-price-in-cart-desktop-mobile">
                        In the cart {{productsSelectN}} {{productsText}}
                    </div>
                    <div class="cart__result-price-in-cart-price-desktop-mobile">
                       {{resultPrice}} $
                    </div>
                    <div class="cart__line-price-mobile">
                    </div>
                </div>
                <nuxt-link no-prefetch to="/form/" class="cart__result-price-button-mobile">
                    <span>Continue clearance</span>
                </nuxt-link>
            </div>

        </div>
        <nuxt-link no-prefetch to="/" class="best-drones-admin__warning-delete-button-cancel cart__button-return-main">
            Back to main page
        </nuxt-link>
        <div key="best-drones-admin__warning-delete-cart" class="best-drones-admin__warning-delete-cart" v-if="popupStatus === true">
			<div class="best-drones-admin__warning-delete-container">
				<div class="best-drones-admin__warning-delete-text-button">
					<div class="best-drones-admin__warning-delete-text">
						Attention!
					</div>
					<div class="best-drones-admin__warning-delete-button">
						<svg @click="popupStatus = false" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
						<g>
							<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
								c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
								C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
								s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
						</g>
						</svg>
					</div>
				</div>
				<div class="best-drones-admin__warning-delete-question">
					<div class="best-drones-admin__warning-delete-question-svg">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
						<circle style="fill:#EFCE4A;" cx="25" cy="25" r="25"/>
						<line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="10" x2="25" y2="32"/>
						<line style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="25" y1="37" x2="25" y2="39"/>
						</svg>
					</div>
					<div class="best-drones-admin__warning-delete-question-text">
						Delete product?
					</div>
				</div>
				<div class="best-drones-admin__warning-delete-two-buttons">
					<div class="best-drones-admin__warning-delete-button-cancel" @click="popupStatus = false, dataDeleteIndex = null">
						<span>Cancel</span>
					</div>
					<div class="best-drones-admin__warning-delete-button-true"
					@click="removeProduct()">
						<span>Yes</span>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    import AppProductsCart from '~/components/products-cart'

    export default {
        head: {
			title: 'SUPERDRONE | CART'
		},
        components: {
            AppProductsCart
        },
        data() {
            return {
                popupStatus: false,
                dataDeleteIndex: null
            }
        },
        mounted() {
            this.$store.dispatch('localStorage/checkUpdate')
        },
        computed: {
            products() {
                return this.$store.getters['localStorage/productsCart']
            },
            productsSelectN() {
                let n = 0
                this.products.forEach(function callback(item, index) {
                    n = n + item.selectNumbers
                })
                return n
            },
            productsText() {
                if(this.productsSelectN === 1) {
                    return 'product'
                } else if(this.productsSelectN > 1) {
                    return 'products'
                }


            },
            resultPrice() {
                let price = 0
                this.products.forEach(function callback(item, index) {
                    price = price + (parseInt(item.price.replace(/\D/g,'')) * item.selectNumbers)

                })
                return price
            }
        },
        methods: {
            async deleteProductsButton(data) {
                this.dataDeleteIndex = data,
                this.popupStatus = true
            },
            async removeProduct() {
                await this.$store.dispatch('localStorage/removeProducts', this.dataDeleteIndex.indexCart)
                await this.$store.dispatch('localStorage/deleteProductsButton', this.dataDeleteIndex.indexProducts)
                this.popupStatus = false
                this.$router.push('/cart/')
            }
        }
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"

    .cart
        padding-top: 50px
        padding-bottom: 50px
        padding-left: 30px
        padding-right: 30px
        margin: 0 auto
        width: 100%
        max-width: 940px
        min-width: 320px
        display: flex
        flex-wrap: wrap
        font-family: 'ProximaNova', sans-serif
        box-sizing: border-box
        +xs-block
            padding-right: 20px
            padding-left: 20px
    
    .cart__title
        font-size: 45px
        width: 100%
        display: flex
        font-weight: 700
        align-items: center
        +lgX-block
            font-size: 36px
    
    .cart__title span 
        margin-left: 15px
    
    .cart__title-logo
        width: 46px
        height: 46px
    
    .cart__title-logo img
        width: 100%
        height: 100%
    
    .cart__products-and-checkout
        width: 100%
        display: flex
        align-items: flex-end
        +md-block
            flex-direction: column
    
    .cart__products
        width: 540px
        +md-block
            width: 100%
    
    .best-drones-admin__warning-delete-cart
            width: 100%
            height: 100%
            background-color: rgba(0, 0, 0, 0.3)
            font-family: 'ProximaNova', sans-serif
            display: flex
            align-content: center
            justify-content: center
            flex-wrap: wrap
            position: fixed
            z-index: 10
            left: 0px
            top: 0px
            +xs-block
                left: 0px
                top: 0px

    .best-drones-admin__warning-delete-container
            width: 300px
            height: 113px
            background-color: white
            padding-left: 15px
            padding-right: 15px
            padding-top: 10px
            display: flex
            flex-direction: column
            box-sizing: border-box
            border-radius: 5px
            z-index: 9

    .best-drones-admin__warning-delete-text-button
            display: flex
            justify-content: space-between
            width: 100%
    
    .best-drones-admin__warning-delete-text
            font-size: 18px
    
    .best-drones-admin__warning-delete-button
            width: 10px
            height: 10px
    
    .best-drones-admin__warning-delete-button svg
            width: 100%
            hyphens: 100%
            fill: grey
            cursor: pointer
        
    .best-drones-admin__warning-delete-question
            display: flex
            margin-top: 10px
            align-items: center

    .best-drones-admin__warning-delete-question-svg
            width: 25px
            height: 25px

    .best-drones-admin__warning-delete-question-svg svg
            width: 100%
            height: 100%
            cursor: pointer
    
    .best-drones-admin__warning-delete-question-text
            font-size: 14px
            margin-left: 15px

    .best-drones-admin__warning-delete-two-buttons
            width: 100%
            display: flex
            justify-content: flex-end
            margin-top: 10px
            align-items: center

    .best-drones-admin__warning-delete-button-cancel
            width: 70px
            height: 27px
            display: flex
            justify-content: center
            align-content: center
            flex-wrap: wrap
            border: 1px solid grey
            background-color: white
            border-radius: 5px
            font-size: 14px
            cursor: pointer
            color: #323232
            transition-duration: 0.2s
    
    .best-drones-admin__warning-delete-button-cancel:hover
            background-color: #f3f3f3
            transition-duration: 0.2s

    .best-drones-admin__warning-delete-button-true
            width: 50px
            height: 27px
            display: flex
            justify-content: center
            align-content: center
            border: 1px solid #63affd
            flex-wrap: wrap
            background-color: #63affd
            border-radius: 5px
            font-size: 14px
            cursor: pointer
            color: white
            margin-left: 10px
            transition-duration: 0.2s

    .best-drones-admin__warning-delete-button-true:hover
            border: 1px solid #2e95ff
            background-color: #2e95ff
            transition-duration: 0.2s

    .cart__info-empty
        font-size: 20px
        color: #333
        margin-top: 15px
    
    .cart__button-return-main
        width: 191px
        height: 39px
        margin-top: 15px
        text-decoration: none 
        user-select: none 
    
    .cart__result-price-wrapper-desktop
        width: 284px
        height: 130px
        margin-top: 45px
        display: flex
        flex-direction: column
        padding: 20px
        box-sizing: border-box
        background-color: #f5f5f5
        margin-left: 40px
        border-radius: 15px
        +md-block
            display: none

    .cart__result-price-desktop
        display: flex
        width: 100%
        justify-content: space-between
        align-items: center
        position: relative

    .cart__result-price-in-cart-desktop
        font-size: 14px
        color: #333
        z-index: 10
        background-color: #f5f5f5
    
    .cart__result-price-in-cart-price-desktop
        font-size: 22px
        font-weight: 700
        z-index: 10
        background-color: #f5f5f5
    
    .cart__line-price
        width: 100%
        z-index: 1
        height: 1px
        position: absolute
        top: 19px
        left: 0px
        background: url(../../assets/dotted-line.png) bottom repeat-x
    
    .cart__result-price-button
        width: 100%
        height: 45px
        background-color: #ed1c24
        border-radius: 5px
        margin-top: 15px
        display: flex
        justify-content: center
        align-content: center
        flex-wrap: wrap 
        cursor: pointer
        transition-duration: 0.2s
        text-decoration: none
    
    .cart__result-price-button:hover
        background-color: #b11116
        transition-duration: 0.2s

    .cart__result-price-button span
        color: white
        font-size: 14px
    
    .cart__result-price-wrapper-desktop-mobile
        width: 100%
        min-height: 130px
        margin-top: 45px
        display: none 
        flex-direction: column
        padding: 20px
        box-sizing: border-box
        background-color: white
        margin-left: 40px
        border-radius: 15px
        +md-block
            display: flex
            padding: 0px
            margin-top: 125px
            
    
    .cart__result-price-desktop-mobile
        display: flex
        width: 100%
        justify-content: space-between
        align-items: center
        position: relative

    .cart__result-price-in-cart-desktop-mobile
        font-size: 14px
        color: #333
        z-index: 10
        background-color: white

    .cart__result-price-in-cart-price-desktop-mobile
        font-size: 22px
        font-weight: 700
        z-index: 10
        background-color: white

    .cart__line-price-mobile
        width: 100%
        z-index: 1
        height: 1px
        position: absolute
        top: 19px
        left: 0px
        background: url(../../assets/dotted-line.png) bottom repeat-x

    .cart__result-price-button-mobile
        width: 276px
        height: 45px
        background-color: #ed1c24
        border-radius: 5px
        margin-top: 25px
        display: flex
        justify-content: center
        align-content: center
        text-decoration: none
        flex-wrap: wrap 
        cursor: pointer
        transition-duration: 0.2s
        align-self: flex-end
        +xs-block
            width: 100%
    
    .cart__result-price-button-mobile:hover
        background-color: #b11116
        transition-duration: 0.2s
    
    .cart__result-price-button-mobile span
        color: white
        font-size: 14px
</style>