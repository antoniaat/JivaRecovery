const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, 'Item is required!']
  },
  price: {
    type: Schema.Types.Number,
    required: [true, 'Order price is required!']
  },
  date: {
    type: Schema.Types.String,
    default: new Date(Date.now()).toLocaleString()
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Creator is required!']
  }
});

module.exports = mongoose.model('CartItem', cartSchema);