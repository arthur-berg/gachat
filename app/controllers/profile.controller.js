'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.profileRead = (req, res) => {

  // If no user ID exists in the JWT return a 401
  // Should do more error trapping
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec((err, user) => {
        res.status(200).json(user);
      });
  }

};
