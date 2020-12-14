const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sillSchema = new Schema({
  commonName: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  scientificName: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  imageUri: {
    type: String,
    required: false,
    unique: false,
    lowercase: true,
  },
  waterInfo: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  lightInfo: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  fertilizerInfo: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  pruningInfo: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  nickname: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
  location: {
    type: Object,
    required: false,
    unique: false,
    lowercase: false,
  },
  note: {
    type: String,
    required: false,
    unique: false,
    lowercase: false,
  },
});

module.exports = mongoose.model("Sill", sillSchema);
