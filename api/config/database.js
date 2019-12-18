const mongoose = require('mongoose');
const config = require('./config');

module.exports = mongoose.connect(config.dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});