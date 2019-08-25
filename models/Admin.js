const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  region: {
    type: Schema.Types.ObjectId,
    ref: "regions",
    required: true
  }
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
