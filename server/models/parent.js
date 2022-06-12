const { Schema, model, Mongoose } = require("mongoose");

const childSchema = new Schema({
  childFName: {
    type: String,
  },
  childLName: {
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
      required: [true, "choose a field"],
    },
    integEstablishment: {
      type: String,
      required: () => {
        return this.integrated === true;
      },
    },
  },
});

const parentSchema = new Schema({
  role: {
    type: Number,
    default: 2,
  },
  firstName: {
    type: String,
    required: [true, "enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "enter your last name"],
  },
  email: {
    type: String,
    required: [true, "this field can't be empty"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "this field can't be empty"],
  },
  phone: {
    type: Number,
    min: [8, "enter a valid phone number please"],
    required: [true, "enter your phone number please"],
  },
  address: {
    street: {
      type: String,
      required: [true, "this field is required"],
    },
    city: {
      type: String,
      required: [true, "this field is required"],
    },
    state: {
      type: String,
      required: [true, "this field is required"],
    },
    postal: {
      type: Number,
      required: [true, "this field is required"],
    },
  },
  job: {
    type: String,
    required: [true, "insert your job please"],
  },
  familyMembers: {
    type: Number,
    required: [true, "insert your information please"],
  },
  child: {
    type: [childSchema],
    required: [true, "you can't subscribe without children"],
  },
  demandes: {
    type: String,
    required: [true, "insert your demandes please"],
  },
});

const Parent = model("parent", parentSchema);
const Child = model("child", childSchema);

module.exports = { Parent, Child };
