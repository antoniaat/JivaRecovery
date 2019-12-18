const mongoose = require('mongoose');
const { Schema } = mongoose;

const accessorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, 'Name is required!'],
    minLength: [2, 'Name must be atleast 2 characters!']
  },
  category: {
    type: Schema.Types.String,
    required: [true, 'Category is required!'],
    minLength: [3, 'Category must be atleast 3 characters!']
  },
  price: {
    type: Schema.Types.Number,
    required: [true, 'Price is required!'],
    validate: {
      validator: v => {
        return v >= 0;
      },
      message: () => 'Price must be a positive number!'
    }
  },
  description: {
    type: Schema.Types.String,
    required: [true, 'Description is required!'],
    minLength: [10, 'Description must be atleast 10 characters!'],
    maxLength: [200, 'Description must not exceed 200 characters!']
  },
  size: {
    type: Schema.Types.String,
    required: [true, 'Size is required!'],
    minLength: [1, 'Size must be atleast 1 character long!']
  },
  imageUrl: {
    type: Schema.Types.String,
    required: [true, "Image Url is required!"]
  },
  ordersCount: {
    type: Schema.Types.Number,
    default: 0
  }
});

module.exports = mongoose.model('Accessory', accessorySchema);