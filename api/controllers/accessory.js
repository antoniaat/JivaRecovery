const models = require("../models");

module.exports = {
  get: {
    all: async (req, res) => {
      const { limit } = req.query;
      let accessories = limit
        ? await models.Accessory.find({})
            .sort({ ordersCount: -1 })
            .limit(parseInt(limit))
        : await models.Accessory.find({});

      res.json(accessories);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const accessory = await models.Accessory.findOne({ _id: id });
        res.json(accessory);
      } catch (err) {
        next(err);
      }
    }
  },
  post: async (req, res, next) => {
    try {
      const { name, category, price, description, size, imageUrl } = req.body;
      const createdAccessory = await models.Accessory.create({
        name,
        category,
        price,
        description,
        size,
        imageUrl
      });
      res.json(createdAccessory);
    } catch (err) {
      next(err);
    }
  },
  put: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, category, price, description, size, imageUrl } = req.body;
      const updatedAccessory = await models.Accessory.updateOne(
        { _id: id },
        { name, category, price, description, size, imageUrl }
      );
      res.json(updatedAccessory);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteInfo = await models.Accessory.deleteOne({ _id: id });
      res.json(deleteInfo);
    } catch (err) {
      next(err);
    }
  }
};
