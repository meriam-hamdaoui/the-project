const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  fullName: {
    firstName: {
      type: String,
      required: [true, "this field can't be empty"],
    },
    lastName: {
      type: String,
      required: [true, "this field can't be empty"],
    },
  },
  birthDate: {
    type: Date,
    required: [true, "this field can't be empty"],
  },
  disorder: {
    disType: {
      type: String,
      required: [true, "this field can't be empty"],
    },
    disEstablishment: {
      type: String,
      required: [true, "this field can't be empty"],
    },
    disDate: {
      type: Date,
      required: [true, "this field can't be empty"],
    },
  },
  integration: {
    integrated: {
      type: Boolean,
      required: [true, "this field can't be empty"],
    },
    integEstablishment: {
      type: String,
      required: [true, "this field can't be empty"],
    },
  },
});

module.exports = Child = model("child", childSchema);
