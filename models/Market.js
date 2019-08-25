const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  areas: [
    {
      name: {
        type: String,
        required: true
      },
      cities: [
        {
          name: {
            type: String,
            required: true
          }
        }
      ]
    }
  ],
  region: {
    type: Schema.Types.ObjectId,
    ref: "regions",
    required: true
  }
});

module.exports = Market = mongoose.model("market", MarketSchema);
