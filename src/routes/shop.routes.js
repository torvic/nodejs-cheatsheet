const path = require('path');
const { Router } = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin.routes')

const router = Router()

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router