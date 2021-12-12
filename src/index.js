// commonjs
const express = require('express')
const path = require('path')

// import routes
const adminData = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

// initialize express app
const app = express()

// settings

// middlewares 
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// server listen
app.listen(3000)
console.log('Server on port', 3000);