const express = require('express')

// initialize express app
const app = express()

// settings

// middlewares
app.use(express.urlencoded({ extended: true }))

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  )
  // next()
})
app.use('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})
app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>')
})

// Routes

// server listen
app.listen(4000)
console.log('Server on port', 4000)
