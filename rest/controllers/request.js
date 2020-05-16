const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    const { id } = req.body;
    models.Request.findOne({ id })
      .then((request) => res.send(request))
      .catch(next);
  },

  post: {
    add: (req, res, next) => {
      const {
        brand,
        model,
        year,
        pickupLocation,
        deliveryLocation,
        pickupDate,
        deliveryDate,
        condition,
      } = req.body;
      models.Request.create({
        brand,
        model,
        year,
        pickupLocation,
        deliveryLocation,
        pickupDate,
        deliveryDate,
        condition,
      })
        .then((createdRequest) => {
          res.send(createdRequest);
        })
        .catch(next);
    },
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const {
      brand,
      model,
      year,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      deliveryDate,
      condition,
      status,
      isDeleted,
    } = req.body;

    models.Request.update(
      { _id: id },
      {
        brand,
        model,
        year,
        pickupLocation,
        deliveryLocation,
        pickupDate,
        deliveryDate,
        condition,
        status,
        isDeleted,
      }
    )
      .then((updatedRequest) => res.send(updatedRequest))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Request.deleteOne({ _id: id })
      .then((removedRequest) => res.send(removedRequest))
      .catch(next);
  },
};
