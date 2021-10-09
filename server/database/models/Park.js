const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
  parkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  icon: {
    type: String,
  },
  location: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  imageUrl: {
    type: String,
  },
  anchorTag: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model('Park', parkSchema);
