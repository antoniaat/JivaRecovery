const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = {
  createToken: (data) => {
    return new Promise((resolve, reject) => {
      jwt.sign(data, config.jwtSecret, { expiresIn: '1h' }, (err, accessToken) => {
        if (err) { reject(err); return; }
        resolve(accessToken);
      });
    })
  },
  verifyToken: (accessToken) => {
    return new Promise((resolve, reject) => {
      jwt.verify(accessToken, config.jwtSecret, (err, data) => {
        if (err) { reject(err); return; }
        resolve(data);
      });
    });
  }
};