const router = require('express').Router();
const productModel = require('../models/products/productModel');

router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProduct);


module.exports = router;