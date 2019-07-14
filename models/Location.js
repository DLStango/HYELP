'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

var locationSchema = Schema( {
  createdAt: Date,
  comment: String,
  placeName: String,
  useremail: String,
  category: String,
  location: {
    type: pointSchema,
    required: true
  }
} );

module.exports = mongoose.model( 'Location', locationSchema );
