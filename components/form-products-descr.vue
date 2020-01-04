<template>
    <div class="form-products-descr">
        <div class="form-products-descr__title">
            {{title}}
        </div>
        <div class="form-products-descr__price">
            {{selectNumbers}} pc. x {{price}}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'price',
            'selectNumbers'
        ]
    }
</script>

<style lang="sass">
    @import "~/assets/smart-grid.sass"

    .form-products-descr
        width: 340px
        display: flex
        flex-direction: column
        padding-left: 10px
        padding-right: 10px
        box-sizing: border-box
        margin-top: 20px
        +lg-block
            width: 300px
    
    .form-products-descr__title
        font-size: 18px
        margin-top: 5px
        margin-bottom: 5px
        color: #333
        +lg-block
            font-size: 16px
    
    .form-products-descr__price
        font-size: 16px
        margin-top: 5px
        margin-bottom: 5px
        color: #999
        +lg-block
            font-size: 14px
</style>