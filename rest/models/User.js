const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  firstName: {
    type: String
  },

  lastName: {
    type: String
  }
});

userSchema.methods = {
  matchPassword: function(password) {
    return bcrypt.compare(password, this.password);
  }
};

userSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
          return;
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = new Model("User", userSchema);