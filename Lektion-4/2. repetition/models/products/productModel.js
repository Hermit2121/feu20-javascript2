const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(500).json(error))
}

exports.getOneProduct = (req, res) => {
  Product.find( { _id: req.params.id } )
  .then(product => res.status(200).json(product))
  .catch(err => res.status(500).json(err))
}

exports.createProduct = (req, res) => {
  Product.findOne( { name: req.body.name } )
  .then(exists => {

    if(exists) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'A product by that name already exists, update the product instead'
      })
    }

    const product = new Product({

      _id: new mongodb.Types.ObjectId,
      name: req.body.name,
      short: req.body.short,
      desc: req.body.desc,
      price: req.body.price,
      image: req.body.image,

    })
    product.save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: 'Product created'
        })
      })
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to create product',
          err
        })
      })

  })
}