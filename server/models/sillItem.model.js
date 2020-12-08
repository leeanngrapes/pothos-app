const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sillItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  commonName: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  scientificName: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
  },
  location: {
    type: String, //type object? selected from dropdown
    required: true,
    unique: false,
    lowercase: true,
  },
  note: {
    type: String,
    required: false,
    unique: false,
    lowercase: true,
  },
});

module.exports = mongoose.model("User", sillItemSchema);
