const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  parent: {
    type: Schema.Types.ObjectId,
    ref: "parent",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  disorder: {
    disType: {
      type: String,
    },
    disEstablishment: {
      type: String,
    },
    disDate: {
      type: Date,
    },
  },
  integration: {
    integrated: {
      type: Boolean,
    },
    integEstablishment: {
      type: String,
    },
  },
});

const parentSchema = new Schema({
  role: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
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
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postal: {
      type: Number,
    },
  },
  job: {
    type: String,
  },
  familyMembers: {
    type: Number,
  },
  child: [childSchema],
  demandes: {
    type: String,
  },
});

const Parent = model("parent", parentSchema);
const Child = model("child", childSchema);

module.exports = { Parent, Child };
