const { Schema, model } = require("mongoose");

const childSchema = new Schema({
  childFName: {
    type: String,
    required: [true, "enter your child first name"],
  },
  childLName: {
    type: String,
    required: [true, "enter your child last name"],
  },
  birthDate: {
    type: Date,
    required: [true, "enter your child birth date"],
  },
  disorder: {
    disType: {
      type: String,
      required: [true, "please select the disorder type of your child"],
    },
    disEstablishment: {
      type: String,
      required: [true, "enter the establishment diagnositic"],
    },
    disDate: {
      type: Date,
      required: [true, "select the diagnostic Date"],
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
  inscritDate: {
    type: Date,
    default: Date.now(),
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
  registerDate: {
    type: Date,
    default: Date.now(),
  },
});

const Parent = model("parent", parentSchema);
const Child = model("child", childSchema);

module.exports = { Parent, Child };
