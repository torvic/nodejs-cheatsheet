const express = require('express')
const path = require('path')

// import routes
const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')

// error controller
const { get404 } = require('./controllers/error.controller')

// initialize express app
const app = express()

// settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(get404)

// server listen
app.listen(4000)
console.log('Server on port', 4000);