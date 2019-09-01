const mongoose = require("mongoose");

const REQUIRED_VALIDATION_MESSAGE = "{PATH} is required";

let vehicleSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  year: {
    type: mongoose.Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  mileage: {
    type: mongoose.Schema.Types.Number,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  transmission: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  rental: {
    type: mongoose.Schema.Types.Boolean,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  img: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  offers: [
    {
      type: mongoose.Schema.Types.Number,
      required: REQUIRED_VALIDATION_MESSAGE
    }
  ],
  owner: {
    type: mongoose.Schema.Types.String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  description: { type: mongoose.Schema.Types.String },
  likes: [{ type: mongoose.Schema.Types.String }],
  orders: [],
  reviews: []
});

let Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
