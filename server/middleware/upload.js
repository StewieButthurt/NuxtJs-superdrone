const path = require('path')
const multer = require('multer')
const moment = require('moment')
const fs = require('fs')
let fileName = null

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true)
        
    } else {
        cb(null, false)
    }
}


module.exports = multer({
    upload, storage, fileFilter, limits: {fileSize: 1024 * 1024 * 10}
})