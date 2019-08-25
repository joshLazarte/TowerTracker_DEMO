const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const towerSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "markets",
    required: true
  },
  area: {
    type: Schema.Types.ObjectId,
    ref: "markets",
    required: true
  },
  market: {
    type: Schema.Types.ObjectId,
    ref: "markets",
    required: true
  },
  region: {
    type: Schema.Types.ObjectId,
    ref: "regions",
    required: true
  },
  CLLI: {
    type: String,
    required: true
  },
  cabinetType: {
    type: String
  },
  unrestricted: {
    type: Boolean,
    default: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  carrier: {
    type: String,
    required: true
  },
  assignedTech: {
    type: Schema.Types.ObjectId,
    ref: "techs",
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  long: {
    type: Number,
    required: true
  },
  CID: {
    type: String,
    required: true
  },
  comments: {
    type: String
  },
  lastServiceDate: {
    type: String
  },
  lastServiceTech: {
    type: Schema.Types.ObjectId,
    ref: "techs"
  }
});

module.exports = Tower = mongoose.model("tower", towerSchema);
