const models = require("../models");

module.exports = {
  get: {
    all: async (req, res, next) => {
      const { user } = req;
      let orders = [];

      if (user.role === "admin") {
        orders = await models.Order.find({ status: "Pending" }).populate(
          "creatorId",
          "username"
        );
        res.json(orders);
        return;
      }

      orders = await models.Order.find({ creatorId: user._id });
      res.json(orders);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const order = await models.Order.findOne({ _id: id }).populate(
          "creatorId",
          "username"
        );
        res.json(order);
      } catch (err) {
        next(err);
      }
    }
  },
  post: {
    one: async (req, res, next) => {
      try {
        const { user } = req;
        const { name, price } = req.body;
        const createdOrder = await models.Order.create({
          name,
          price,
          creatorId: user._id
        });
        await models.User.updateOne(
          { _id: user._id },
          { $push: { orders: createdOrder._id } }
        );
        res.json(createdOrder);
      } catch (err) {
        next(err);
      }
    },
    many: async (req, res, next) => {
      try {
        const { user } = req;
        const insertData = req.body;
        const ordersToInsert = insertData.map(({ name, price, creatorId }) => ({
          name,
          price,
          creatorId
        }));
        const insertedOrders = await models.Order.insertMany(ordersToInsert);

        let insertedOrdersIds = [];
        insertedOrders.forEach(({ _id }) => insertedOrdersIds.push(_id));
        await models.User.updateOne(
          { _id: user._id },
          { $push: { orders: { $each: insertedOrdersIds } } }
        );

        res.json(insertedOrders);
      } catch (err) {
        next(err);
      }
    }
  },
  put: {
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const { name, price } = req.body;
        const updatedOrder = await models.Order.updateOne(
          { _id: id },
          { name, price }
        );
        res.json(updatedOrder);
      } catch (err) {
        next(err);
      }
    },
    editStatus: async (req, res, next) => {
      try {
        const { id } = req.params;
        const { status } = req.body;
        const updateInfo = await models.Order.updateOne(
          { _id: id },
          { status }
        );
        res.json(updateInfo);
      } catch (err) {
        next(err);
      }
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteInfo = await models.Order.deleteOne({ _id: id });
      res.json(deleteInfo);
    } catch (err) {
      next(err);
    }
  }
};
