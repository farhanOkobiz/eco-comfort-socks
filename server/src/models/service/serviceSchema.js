const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Serviceschema = new Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ServiceSchema = mongoose.model("service", Serviceschema);

module.exports = { ServiceSchema };
