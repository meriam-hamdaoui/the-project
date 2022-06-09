const { Schema, model } = require("mongoose");

const parentSchema = new Schema({
  role: {
    type: Number,
  },
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
  email: {
    type: String,
    required: [true, "this field can't be empty"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "this field can't be empty"],
  },
  phone: {
    type: Number,
    required: [true, "this field can't be empty"],
  },
  address: {
    street: {
      type: String,
      required: [true, "this field can't be empty"],
    },
    city: {
      type: String,
      required: [true, "this field can't be empty"],
    },
    state: {
      type: String,
      required: [true, "this field can't be empty"],
    },
    postal: {
      type: Number,
      required: [true, "this field can't be empty"],
    },
  },
  job: {
    type: String,
    required: [true, "this field can't be empty"],
  },
  familyMembers: {
    type: Number,
    required: [true, "this field can't be empty"],
  },
  child: {
    type: childSchema,
    required: [true, "this field can't be empty"],
  },
  demandes: {
    type: String,
    required: [true, "this field can't be empty"],
  },
});

module.exports = Parent = model("parent", parentSchema);
