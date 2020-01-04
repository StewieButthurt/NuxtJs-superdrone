const passport = require('passport')
const {Router} = require('express')
const upload = require('../middleware/upload')
const base64 = require('../middleware/base64')
const ctr = require('../controllers/product.controller')
const router = Router()

//Admin
// /api/product/admin

router.post(
    '/admin/upload-image',
    upload.single('file'),
    function (req, res) {
        base64.base64(req.file)
        res.status(200).json({
            message: 'Picture uploaded'
        })
}) 

router.post(
    '/admin/create-product',
    passport.authenticate('jwt', {session: false}),
    ctr.create
)

router.get(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    ctr.getAll,
    function(req, res) {
        res.status(200)
    }
)

router.put(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    ctr.update,
    function (req, res) {
        res.status(200)
    }
)

router.delete(
    '/admin/',
    passport.authenticate('jwt', { session: false }),
    ctr.remove,
    function (req, res) {
        res.status(200)
    }
)

//Base
//  /api/product
router.get('/', ctr.getAll)

router.post('/product-update', 
            ctr.getOneUpdate       
)

module.exports = router