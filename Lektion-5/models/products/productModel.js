const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getProduct = (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.status(200).json(product))
    .catch(err => res.status(404).json(err))
}