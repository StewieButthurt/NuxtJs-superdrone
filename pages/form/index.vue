<template>
    <transition-group 
        tag="div" 
        class="form"
        name="list-form"
        >
        <div key="form__title" class="form__title">
            Enter the details of the recipient of the order and our managers will contact you as soon as possible.
        </div>
        <div key="form__inputs-email" class="form__inputs">
            <label for="email">
                Email 
                <span>*</span>
            </label>
            <input 
                v-model="email" 
                @input="inputEmail" 
                placeholder="Email" 
                class="form_input" 
                :class="{'true-input' : emailStatus, 'false-input' : emailStatus === false}"
                type="text" 
                name="email"
            >
        </div>
        <div key="form__inputs-phone" class="form__inputs">
            <label for="Phone">
                Phone 
                <span>*</span>
            </label>
            <input 
                v-model="phone" 
                @input="inputPhone" 
                placeholder="Phone" 
                class="form_input" 
                :class="{'true-input' : phoneStatus, 'false-input' : phoneStatus === false}"
                type="text" 
                name="email"
            >
        </div>
        <div key="form__inputs-name" class="form__inputs">
            <label for="Name">
                Name 
                <span>*</span>
            </label>
            <input 
                v-model="name" 
                @input="inputName" 
                placeholder="Name" 
                class="form_input" 
                :class="{'true-input' : nameStatus, 'false-input' : nameStatus === false}"
                type="text" 
                name="name"
            >
        </div>
        <div key="form__wrapper-info-cart-and-products" class="form__wrapper-info-cart-and-products">
            <div class="form__info-cart" @click="cartSvgStatus = !cartSvgStatus">
                <span>In order {{productsSelectN}} {{productsText}}</span>
                <div v-if="cartSvgStatus === false" class="form__info-cart-svg">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                        xml:space="preserve">
                        <g>
                            <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                        </g>
                    </svg>
                </div>
                <div v-if="cartSvgStatus === true" class="form__info-cart-svg">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;"
                        xml:space="preserve">
                        <g>
                            <path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
                                C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
                                c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
                                c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
                                C284.929,199.378,283.984,197.188,282.082,195.285z"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div key="form-products-descr-wrapper-2" class="form-products-descr-wrapper" :class="{ 'form__height' : cartSvgStatus}">
                <app-form-products-descr 
                v-for="item in products"
                :key="item.title"
                :title="item.title"
                :price="item.price"
                :selectNumbers="item.selectNumbers"
                >
                </app-form-products-descr>
            </div>
        </div>
        <div key="form__price-wrapper" class="form__price-wrapper">
            <div class="form__price">
                <div class="form__price-text">Total payment due</div>
                <div class="form__line-price-mobile">
                </div>
                <div class="form__price-result">
                    {{resultPrice}} $
                </div>
            </div>
        </div>
        <div key="form__button" @click="toOrder()" class="form__button" :class="{ 'form__button-disabled' : !statusFormButton}">
            <span>To order</span>
        </div>
        <div key="recaptcha" class="form__recaptcha">
            <recaptcha
                @error="onError"
                @success="register"
                @expired="onExpired"
            />
        </div>
    </transition-group>
</template>

<script>
    import AppFormProductsDescr from '~/components/form-products-descr'
    import isEmail from 'validator/lib/isEmail'
    import isMobilePhone from 'validator/lib/isMobilePhone'
    import isAlpha from 'validator/lib/isAlpha'
    import * as nprogress from 'nprogress'

    if(process.browser) {
		nprogress.set(0.0);   
		nprogress.set(0.4);
		nprogress.set(1.0);
	}

    export default {
        head: {
			title: 'SUPERDRONE | FORM'
		},
        data() {
            return {
                email: '',
                emailStatus: null,
                phone: '',
                phoneStatus: null,
                name: '',
                nameStatus: null,
                cartSvgStatus: false,
                recaptchaCheck: false,
                recaptchaToken: null,
                buttonStatus: null
            }
        },
        methods: {
            inputEmail() {
                if(isEmail(this.email)) {
                    this.emailStatus = true
                } else {
                    this.emailStatus = false
                }
            },
            inputPhone() {
               if(isMobilePhone(this.phone)) {
                    this.phoneStatus = true
                } else {
                    this.phoneStatus = false
                } 
            },
            inputName() {
               if(isAlpha(this.name)) {
                    this.nameStatus = true
                } else {
                    this.nameStatus = false
                }  
            },
            async toOrder() {
                if(this.products.length !== 0) {
                    if(isEmail(this.email)) {
                        if(isMobilePhone(this.phone)) {
                            if(isAlpha(this.name)) {
                                if(this.recaptchaToken) {
                                    nprogress.start()
                                    let data = {
                                    email: this.email,
                                    phone: this.phone,
                                    name: this.name,
                                    recaptchaToken: this.recaptchaToken,
                                    cart: this.products
                                    }

                                    this.$axios.post('/api/form', data)
                                    .then(response => {
                                        this.$store.dispatch('localStorage/clearProductsLocal')
                                        this.$router.push('/')
                                        this.$store.dispatch('localStorage/clearProductsCart')
                                        nprogress.done()
                                    }, response => {
                                        console.log("Error 404")
                                        nprogress.done()
                                    })
                                } else {
                                    console.log('token undefined')
                                }
                            } else {
                                this.nameStatus = false
                            }
                        } else {
                            this.phoneStatus = false
                        }
                    } else {
                        this.emailStatus = false
                    }
                } else {
                    this.$router.push('/cart/')
                }
            },
            onError (error) {
			      console.log('Error happened:', error)
            },
            onExpired() {
                  console.log('onExpired')
			      this.buttonStatus = false
            },
            register(recaptchaToken) {
                nprogress.start()
                this.recaptchaToken = recaptchaToken
                this.buttonStatus = true
                nprogress.done()
            }
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
                } else if(this.productsSelectN > 1 || this.productsSelectN === 0) {
                    return 'products'
                }
            },
            resultPrice() {
                let price = 0
                this.products.forEach(function callback(item, index) {
                    price = price + (parseInt(item.price.replace(/\D/g,'')) * item.selectNumbers)

                })
                return price
            },
            statusFormButton() {
                if(this.emailStatus && this.phoneStatus && this.nameStatus && this.recaptchaToken && this.buttonStatus) {
                    return true
                } else {
                    return false
                }
            }
        },
        components: {
            AppFormProductsDescr
        },
        mounted() {
            if(process.browser) {
                if(this.products.length === 0) {
                    this.$router.push('/cart/')
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"

    .form
         +wrapper()
         padding-top: 50px
         padding-bottom: 50px     
         margin: 0 auto
         width: 100%
         min-width: 320px
         align-content: center
         flex-direction: column
         display: flex
         min-height: 101vh
         flex-wrap: wrap
         font-family: 'ProximaNova', sans-serif
         box-sizing: border-box
         +xs-block
            padding-right: 20px
            padding-left: 20px

    .form__title
        font-size: 22px
        color: #333
        text-align: center
        max-width: 529px
        +lg-block
            font-size: 20px
    
    .form__inputs
        display: flex
        flex-wrap: wrap
        flex-direction: column
        align-content: center
        margin-top: 20px
    
    .form__inputs label
        display: flex
        color: #333
        font-size: 16px
        +lg-block
            font-size: 14px
    
    .form__inputs label span
        color: red
        font-size: 20px
        margin-left: 5px
        +lg-block
            font-size: 18px

    .form_input
        width: 340px
        height: 45px
        border-radius: 5px
        outline: none
        border: 1px solid silver
        box-sizing: border-box
        padding-left: 10px
        margin-top: 5px
        transition-duration: 0.3s
        color: #333
        font-size: 16px
        +lg-block
            width: 300px
            height: 40px
            font-size: 14px
    
    .form_input:hover
        border: 1px solid #828282
        transition-duration: 0.3s
    
    .true-input
        border: 1px solid green

    .true-input:hover
        border: 1px solid green

    .false-input
        border: 1px solid red 
    
    .false-input:hover
        border: 1px solid red 
    
    .form__info-cart
        display: flex
        align-items: center
        justify-content: space-between
        width: 340px
        height: 56px
        background-color: white
        cursor: pointer
        margin-top: 20px
        user-select: none 
        padding-left: 10px
        padding-right: 10px
        box-sizing: border-box
        border-radius: 5px
        +lg-block
            width: 300px
            height: 50px
    
    .form__info-cart span
        color: #333
        font-size: 18px
        +lg-block
            font-size: 16px
    
    .form__info-cart:hover
        background-color: #f5f5f5
    
    .form__info-cart-svg
        width: 15px
        height: 15px
    
    .form__info-cart-svg svg
        width: 100%
        height: 100%
    
    .list-form-move
        transition: transform 1s
    
    .form__price
        position: relative
        display: flex
        justify-content: space-between
        align-items: flex-end
        width: 340px
        margin-top: 20px
        +lg-block
            width: 300px
    
    .form__price-text
        background-color: white
        z-index: 2
        font-size: 22px
        +lgX-block
            font-size: 20px
        +lg-block
            font-size: 18px
    
    .form__price-result
        background-color: white
        z-index: 2
        font-weight: 700
        font-size: 30px
        +lgX-block
            font-size: 27px
        +lg-block
            font-size: 22px

   
    .form__line-price-mobile
        width: 100%
        z-index: 1
        height: 2px
        position: absolute
        top: 28px
        left: 0px
        background: url(../../assets/dotted-line.png) bottom repeat-x
        +lgX-block
            top: 24px
        +lg-block
            top: 20px

    .form__price-wrapper
        display: flex
        flex-direction: column
        margin-top: 10px
        align-content: center
        flex-wrap: wrap

    .form__wrapper-info-cart-and-products
        display: flex
        flex-direction: column
        align-content: center
        flex-wrap: wrap
        overflow: hidden
    
    .form-products-descr-wrapper
        display: flex
        flex-direction: column
        max-height: 0px
        transition: max-height .9s, padding .9s;
    
    .form__height
        max-height: 400px
    
    .form__button
        width: 340px
        height: 40px
        background-color: #ed1c24
        border-radius: 5px
        display: flex
        justify-content: center
        align-content: center
        flex-wrap: wrap
        margin: 0 auto
        margin-top: 20px
        color: white
        font-size: 18px
        cursor: pointer
        transition-duration: 0.1s
        user-select: none
    
    .form__button:hover
        background-color: #b11116
        transition-duration: 0.1s

    .form__button-disabled
        cursor: not-allowed
        color: black
        background-color: grey
        transition-duration: 0.2s

    .form__button-disabled:hover
        background-color: grey
        transition-duration: 0.2s
    
    .form__recaptcha
        margin: 0 auto
        margin-top: 30px

</style>