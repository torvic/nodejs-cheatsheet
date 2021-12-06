const express = require('express')

const app = express()
const path = require('path')

// settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares


// Routes
app.use(require('./routes/index'))

app.listen(4000)
console.log('Server on port', 4000);