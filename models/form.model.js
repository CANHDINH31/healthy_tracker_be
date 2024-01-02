const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },

    // Code là mã sinh viên
    code: {
      type: String,
    },

    address: {
      type: String,
    },

    // description: là trường tiền sử bệnh nền
    description: {
      type: String,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },

    age: {
      type: Number,
    },

    height: {
      type: Number,
    },

    // 1: male 2: female
    gender: {
      type: Number,
    },

    // 1: A 2:B 3:0 4:AB
    blood: {
      type: Number,
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

    event: { type: mongoose.Schema.Types.ObjectId, ref: "event" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("form", formSchema);
