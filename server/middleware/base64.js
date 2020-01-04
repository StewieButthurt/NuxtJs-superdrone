const fs = require('fs')
let fileName = null

module.exports = {
    base64: (file) => {
        fileName = new Buffer.from(file.buffer).toString('base64')
        module.exports.fileName = fileName;
    }
}



