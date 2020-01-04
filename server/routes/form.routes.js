const {Router} = require('express')
const {form} = require('../controllers/form.controller')
const router = Router()

router.post('/', form)

module.exports = router

