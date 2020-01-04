const Product = require('../models/product.model')
let fileName = require('../middleware/base64')
const fs = require('fs')


module.exports.create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        img: `data:image/png;base64,${fileName.fileName}`,
        productNew: req.body.productNew,
        id: req.body.id,
        add: req.body.add
    })

    try {
        await product.save()
        res.status(201).json({ message: 'Product create' })
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports.getOneUpdate = async (req, res) => {
    try {
        let product = await Product.findOne({ title: req.body.title})
        res.json(product)
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports.update = async (req, res) => {
    const $set = {
        title: req.body.title,
        price: req.body.price,
        productNew: req.body.productNew,
        img: Boolean(fileName.fileName) === true ? fileName.fileName : req.body.img,
        id: req.body.id,
        add: req.body.add
    }
    try {
        const product = await Product.findOneAndUpdate({
            id: req.body.id
        }, {$set}, {new: true} )
        res.json(product)
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Product.deleteOne({title: req.body.title})
        res.json({ message: `Пост удален title ${req.body.title}`})
    } catch (e) {
        res.status(500).json(e)
    }
}
