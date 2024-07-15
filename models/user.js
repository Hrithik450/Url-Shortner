const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    short_id: {
      type: String,
      required: true,
      unique: true,
    },
    redrictUrl: {
      type: String,
    },
    visitHistory: [{ timestamps: { type: Number } }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
