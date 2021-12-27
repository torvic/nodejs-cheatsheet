const Product = require('../models/products.model')

// render form of add product
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  })
}

// handle the post of form
exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body
  // create a product
  const product = new Product(title, imageUrl, description, price)
  product.save()
  res.redirect('/')
}

// get all products
exports.getProducts = (req, res, next) => {
  Product.fetchAll().then((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: 'admin/products',
    })
  })
}
