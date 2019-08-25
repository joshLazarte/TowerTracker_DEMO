const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  PID: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  techNumber: {
    type: String,
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
  }
});

module.exports = Tech = mongoose.model("tech", TechSchema);
