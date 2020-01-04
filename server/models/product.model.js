const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: String,
    productNew: Boolean,
    id: String,
    add: Boolean
})

module.exports = model('products', productSchema)

