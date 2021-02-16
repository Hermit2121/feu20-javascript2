const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');


exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }
      else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed when encrypting user password'
            })
          }


          const newUser = new User({
            firstName:    req.body.firstName,
            lastName:     req.body.lastName,
            email:        req.body.email,
            passwordHash: hash
          })

          newUser.save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'User was created successfully'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create user'
              })
            })


        })

      }

    }
  })

}