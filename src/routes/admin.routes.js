const { Router } = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const router = Router()

const products = []

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

exports.routes = router
// module.exports = router
exports.products = products
// module.exports = products
