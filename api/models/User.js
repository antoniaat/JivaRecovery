const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: [true, 'Username is required!'],
    unique: true
  },
  password: {
    type: Schema.Types.String,
    required: [true, 'Password is required!'],
  },
  email: {
    type: Schema.Types.String,
    required: [true, 'Email is required!'],
    unique: true
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }],
  cartItems: [{
    type: Schema.Types.ObjectId,
    ref: 'CartItem'
  }],
  role: {
    type: Schema.Types.String,
    enum: ['admin', 'user'],
    default: 'user'
  }
});

userSchema.methods = {
  matchPassword: function (password) {
    return bcrypt.compare(password, this.password);
  }
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    } catch (err) {
      next(err);
      return;
    }
  }
  next();
});

module.exports = mongoose.model('User', userSchema);