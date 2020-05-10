const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean } = Schema.Types;

const requestSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  deliveryLocation: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
  },
});

module.exports = new Model("Request", requestSchema);
