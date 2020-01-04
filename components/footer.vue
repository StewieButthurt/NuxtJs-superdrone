<template>
    <div class="footer" id="footer">
        <div class="container flex footer-container">
            <div class="terms-conditions">
                <div class="terms-conditions__links">
                    <a href="#" class="terms-conditions__link">
                        Terms & conditions 
                    </a>
                    <a href="#" class="terms-conditions__link">
                        License agreement 
                    </a>
                    <a href="#" class="terms-conditions__link">
                        Private policy
                    </a>
                </div>
                <div class="social-links">
                    <a href="#" class="social-links__link">
                        <img src="@@/assets/twitter.png" alt="social-link">
                    </a>
                     <a href="#" class="social-links__link">
                        <img src="@@/assets/facebook.png" alt="social-link">
                    </a>
                     <a href="#" class="social-links__link">
                        <img src="@@/assets/google.png" alt="social-link">
                    </a>
                     <a href="#" class="social-links__link">
                        <img src="@@/assets/you-tube.png" alt="social-link">
                    </a>
                </div>
            </div>
            <div class="contacts">
                <div class="contacts__adress">
                    3 Hatamat Str., P.O.Box 35 2068201, Yoqneam littl, Israel
                </div>
                <div class="contacts__email">
                    info@gmail.com
                </div>
                <div class="contacts__phone">
                    +1 800 123 456
                </div>
            </div>
            <div class="copyright">
                All rights reserved © 2018
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

    .footer
        padding-top: 100px
        padding-bottom: 100px
        background-color: white
        width: 100%
        display: flex
        font-family: 'ProximaNova', sans-serif

    .terms-conditions
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        +lg-block
            justify-content: center
        
        +md-block
            flex-direction: column
    
    .terms-conditions__links
        display: flex
        font-size: 18px
        font-weight: 400
        letter-spacing: 0.45px
        flex-wrap: wrap
        justify-content: center
        +lgX-block
            font-size: 16px
    
    .terms-conditions__link
        margin-left: 25px
        margin-right: 25px
        text-decoration: none
        color: #5e5e5e
        margin-top: 5px
        margin-bottom: 5px
    
    .social-links
        display: flex
        flex-wrap: wrap
        align-items: center
        justify-content: center
        +lg-block
            margin-top: 30px
    
    .social-links__link
        width: 51px
        height: 51px
        margin-left: 10px
        margin-right: 10px
        margin-top: 5px
        margin-bottom: 5px
        text-decoration: none 
        transition-duration: 0.3s
        +lgXX-block
            width: 41px
            height: 41px

    .social-links__link:active
        transition-duration: 0.3s
        transform: scale(0.9)
    
    .social-links__link img
        width: 100%
        height: 100%
    
    .contacts
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        margin-top: 95px
        flex-wrap: wrap
        +sm-block
            justify-content: space-around

    .contacts__adress
        max-width: 378px
        font-size: 22px
        font-weight: 400
        color: #5e5e5e
        margin-left: 15px
        margin-right: 15px
        margin-top: 10px
        margin-bottom: 10px
        +lgXX-block
            max-width: 320px
        +lgX-block
            font-size: 18px
            max-width: 260px
        +xs-block
            margin-top: 20px
            margin-bottom: 20px

    .contacts__email
        font-size: 22px
        text-decoration: underlinegit 
        font-weight: 400
        color: #5e5e5e
        margin-left: 15px
        margin-right: 15px
        margin-top: 10px
        margin-bottom: 10px
        +lgXX-block
            font-size: 20px
        +lgX-block
            font-size: 18px
        +xs-block
            margin-top: 20px
            margin-bottom: 20px

    .contacts__phone
        font-size: 27px
        font-weight: 700
        color: #000000 
        margin-left: 15px
        margin-right: 15px  
        margin-top: 10px
        margin-bottom: 10px
        +lgXX-block
            font-size: 22px
        +lgX-block
            font-size: 20px
        +lg-block
            font-size: 18px
        +xs-block
            margin-top: 20px
            margin-bottom: 20px
    
    .copyright
        font-size: 20px
        width: 100%
        color: #5e5e5e
        text-align: center
        margin-top: 100px
        font-weight: 400
        letter-spacing: 0.45px
        +lgX-block
            font-size: 16px
    
    .footer-container
        max-width: 1100px
        +lgXX-block
           max-width: 865px 
        +lg-block
            max-width: 775px 
</style>