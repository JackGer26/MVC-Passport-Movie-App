const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  watched: {
    type: Boolean,
    required: true,
    default: false
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  userId: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Movie', MovieSchema)