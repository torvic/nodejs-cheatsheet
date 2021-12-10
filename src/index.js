const express = require('express')
const path = require('path')

// initialize express app
const app = express()

// settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares


// Routes

// server listen
app.listen(4000)
console.log('Server on port', 4000);