const { Router } = require('express')
const { getAddProduct, postAddProduct, getProducts } = require('../controllers/admin.controller')

const router = Router()

// here routes
router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)
router.get('/products', getProducts)

// export default router
module.exports = router 