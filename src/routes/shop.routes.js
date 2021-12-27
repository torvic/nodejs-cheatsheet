const { Router } = require('express')
const {
  getIndex,
  getProducts,
  getProduct,
  getCart,
  getOrders,
  getCheckout,
} = require('../controllers/shop.controller')

const router = Router()

// here routes

router.get('/', getIndex)

router.get('/products', getProducts)

router.get('/products/:productId', getProduct)

router.get('/cart', getCart)

router.get('/orders', getOrders)

router.get('/checkout', getCheckout)

// export default router
module.exports = router 
