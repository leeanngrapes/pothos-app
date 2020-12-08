const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantInfoSchema = new Schema({
  commonName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  scientificName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  waterInfo: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  lightInfo: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  fertilizerInfo: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  pruningInfo: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
});

module.exports = mongoose.model("PlantInfo", plantInfoSchema);
