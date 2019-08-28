const express = require('express');
const authCheck = require('../config/auth-check');
const Vehicle = require('../models/Vehicle');

const router = new express.Router();

function validateVehicleCreateForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  payload.price = parseFloat(payload.price);

  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false;
    errors.name = 'Vehicle name must be at least 3 symbols.';
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10 || payload.description.length > 200) {
    isFormValid = false;
    errors.description = 'Description must be at least 10 symbols and less than 120 symbols.';
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false;
    errors.price = 'Price must be a positive number.';
  }

  if (!payload || typeof payload.image !== 'string' || !(payload.image.startsWith('https://') || payload.image.startsWith('http://')) || payload.image.length < 14) {
    isFormValid = false;
    errors.image = 'Please enter valid Image URL. Image URL must be at least 14 symbols.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const vehicleObj = req.body;

  if (req.user.roles.indexOf('Admin') > -1) {
    const validationResult = validateVehicleCreateForm(vehicleObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Vehicle
      .create(vehicleObj)
      .then((createdVehicle) => {
        res.status(200).json({
          success: true,
          message: 'Vehicle added successfully.',
          data: createdVehicle
        })
      }).catch((err) => {
        console.log(err);
        let message = 'Something went wrong :( Check the form for errors.';

        if (err.code === 11000) {
          message = 'Vehicle with the given name already exists.';
        }
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.post('/edit/:id', authCheck, (req, res) => {
  if (req.user.roles.indexOf('Admin') > -1) {
    const vehicleId = req.params.id;
    const vehicleObj = req.body;
    const validationResult = validateVehicleCreateForm(vehicleObj);

    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Vehicle
      .findById(vehicleId)
      .then(existingVehicle => {
        existingVehicle.name = vehicleObj.name
        existingVehicle.price = vehicleObj.price
        existingVehicle.year = vehicleObj.year
        existingVehicle.mileage = vehicleObj.mileage
        existingVehicle.transmission = vehicleObj.transmission
        existingVehicle.rental = vehicleObj.rental
        existingVehicle.img = vehicleObj.img
        existingVehicle.offers = vehicleObj.offers
        existingVehicle.owner = vehicleObj.owner
        existingVehicle.description = vehicleObj.description
        existingVehicle.likes = vehicleObj.likes
        existingVehicle.reviews = vehicleObj.reviews

        existingVehicle
          .save()
          .then(editedVehicle => {
            res.status(200).json({
              success: true,
              message: 'Vehicle edited successfully.',
              data: editedVehicle
            })
          })
          .catch((err) => {
            console.log(err);
            let message = 'Something went wrong :( Check the form for errors.';

            // if (err.code === 11000) {
            //   message = 'Vehicle with the given name already exists.'
            // }
            return res.status(200).json({
              success: false,
              message: message
            })
          })
      })
      .catch((err) => {
        console.log(err);
        const message = 'Something went wrong :( Check the form for errors.';

        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.get('/all', (req, res) => {
  Vehicle
    .find()
    .then(vehicles => {
      res.status(200).json(vehicles)
    })
})

router.post('/review/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const review = req.body.review;
  const username = req.user.username;

  if (review.length < 4) {
    const message = 'Review must be at least 4 characters long.';

    return res.status(200).json({
      success: false,
      message: message
    })
  }

  Vehicle
    .findById(id)
    .then(vehicle => {
      if (!vehicle) {
        return res.status(200).json({
          success: false,
          message: 'Vehicle not found.'
        })
      }

      let reviewObj = {
        review,
        createdBy: username
      }

      let reviews = vehicle.reviews;
      reviews.push(reviewObj);
      vehicle.reviews = reviews;

      vehicle
        .save()
        .then((vehicle) => {
          res.status(200).json({
            success: true,
            message: 'Review added successfully.',
            data: vehicle
          })
        })
        .catch((err) => {
          console.log(err);
          const message = 'Something went wrong :( Check the form for errors.';

          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err);
      const message = 'Something went wrong :( Check the form for errors.';

      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/like/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const username = req.user.username;

  Vehicle
    .findById(id)
    .then(vehicle => {
      if (!vehicle) {
        const message = 'Product not found.';

        return res.status(200).json({
          success: false,
          message: message
        })
      }

      let likes = vehicle.likes;
      if (!likes.includes(username)) {
        likes.push(username);
      };

      vehicle.likes = vehicle;
      vehicle
        .save()
        .then((vehicle) => {
          res.status(200).json({
            success: true,
            message: 'Vehicle liked successfully.',
            data: vehicle
          })
        })
        .catch((err) => {
          console.log(err);
          const message = 'Something went wrong :(';

          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err);
      const message = 'Something went wrong :(';

      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/unlike/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const username = req.user.username;

  Vehicle
    .findById(id)
    .then(vehicle => {
      if (!vehicle) {
        let message = 'Product not found.';
        return res.status(200).json({
          success: false,
          message: message
        })
      }

      let likes = vehicle.likes;
      if (likes.includes(username)) {
        const index = likes.indexOf(username);
        likes.splice(index, 1);
      }

      vehicle.likes = likes;

      vehicle
        .save()
        .then((vehicle) => {
          res.status(200).json({
            success: true,
            message: 'Product unliked successfully.',
            data: vehicle
          })
        })
        .catch((err) => {
          console.log(err);
          const message = 'Something went wrong :(';

          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err);
      const message = 'Something went wrong :(';

      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id;

  if (req.user.roles.indexOf('Admin') > -1) {
    Vehicle
      .findById(id)
      .then((vehicle) => {
        vehicle
          .remove()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'Vehicle deleted successfully!'
            })
          })
      })
      .catch(() => {
        return res.status(200).json({
          success: false,
          message: 'Entry does not exist!'
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

module.exports = router;