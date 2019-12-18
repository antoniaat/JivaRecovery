const models = require("../models");

module.exports = {
  get: {
    all: async (req, res, next) => {
      const { _id: userId } = req.user;
      const cartItems = await models.CartItem.find({ creatorId: userId });
      res.json(cartItems);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const cartItem = await models.CartItem.findOne({ _id: id });
        res.json(cartItem);
      } catch (err) {
        next(err);
      }
    }
  },
  post: {
    createOne: async (req, res, next) => {
      try {
        const { user } = req;
        const { name, price } = req.body;
        const createdCartItem = await models.CartItem.create({
          name,
          price,
          creatorId: user._id
        });
        await models.User.updateOne(
          { _id: user._id },
          { $push: { cartItems: createdCartItem._id } }
        );
        res.json(createdCartItem);
      } catch (err) {
        next(err);
      }
    },
    checkout: async (req, res, next) => {
      try {
        const { user } = req;
        const insertData = req.body;

        const ordersToInsert = insertData.map(({ name, price, creatorId }) => ({
          name,
          price,
          creatorId
        }));
        const insertedOrders = await models.Order.insertMany(ordersToInsert);

        const insertedOrdersIds = insertedOrders.reduce((acc, order) => {
          acc.push(order._id);
          return acc;
        }, []);

        const insertedOrdersNames = insertedOrders.reduce((acc, order) => {
          acc.push(order.name);
          return acc;
        }, []);

        await Promise.all([
          models.CartItem.deleteMany({ creatorId: user._id }),
          models.User.updateOne({ _id: user._id }, { $set: { cartItems: [] } }),
          models.User.updateOne(
            { _id: user._id },
            { $push: { orders: { $each: insertedOrdersIds } } }
          ),
          models.MenApparel.updateMany(
            { name: { $in: insertedOrdersNames } },
            { $inc: { ordersCount: 1 } }
          ),
          models.WomenApparel.updateMany(
            { name: { $in: insertedOrdersNames } },
            { $inc: { ordersCount: 1 } }
          ),
          models.Accessory.updateMany(
            { name: { $in: insertedOrdersNames } },
            { $inc: { ordersCount: 1 } }
          )
        ]);

        res.json(insertedOrders);
      } catch (err) {
        next(err);
      }
    }
  },
  put: async (req, res, next) => {
    try {
      const { id } = req.paramsls;
      const { name, price } = req.body;
      const updatedCartItem = await models.CartItem.updateOne(
        { _id: id },
        { name, price }
      );
      res.json(updatedCartItem);
    } catch (err) {
      next(err);
    }
  },
  delete: {
    all: async (req, res, next) => {
      try {
        const { user } = req;
        const [deleteInfo, updateInfo] = await Promise.all([
          models.CartItem.deleteMany({ creatorId: user._id }),
          models.User.updateOne({ _id: user._id }, { $set: { cartItems: [] } })
        ]);
        res.json(deleteInfo);
      } catch (err) {
        next(err);
      }
    },
    one: async (req, res, next) => {
      try {
        const { user } = req;
        const { id } = req.params;
        const [deleteInfo, updateInfo] = await Promise.all([
          models.CartItem.deleteOne({ _id: id }),
          models.User.updateOne({ _id: user._id }, { $pull: { cartItems: id } })
        ]);
        res.json(deleteInfo);
      } catch (err) {
        next(err);
      }
    }
  }
};
