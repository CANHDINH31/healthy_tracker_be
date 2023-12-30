const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    description: {
      type: String,
    },

    thumbnail: {
      type: String,
    },

    content: {
      type: String,
    },

    videoLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("exercise", exerciseSchema);
