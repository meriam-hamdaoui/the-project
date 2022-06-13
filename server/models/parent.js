const { Schema, model } = require("mongoose");

const childSchema = new Schema({
<<<<<<< HEAD
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
=======
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
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
  },
  disorder: {
    disType: {
      type: String,
<<<<<<< HEAD
      required: [true, "please select the disorder type of your child"],
    },
    disEstablishment: {
      type: String,
      required: [true, "enter the establishment diagnositic"],
    },
    disDate: {
      type: Date,
      required: [true, "select the diagnostic Date"],
=======
    },
    disEstablishment: {
      type: String,
    },
    disDate: {
      type: Date,
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
    },
  },
  integration: {
    integrated: {
      type: Boolean,
<<<<<<< HEAD
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
=======
    },
    integEstablishment: {
      type: String,
    },
  },
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
});

const parentSchema = new Schema({
  role: {
    type: Number,
    default: 2,
  },
  firstName: {
    type: String,
<<<<<<< HEAD
    required: [true, "enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "enter your last name"],
=======
  },
  lastName: {
    type: String,
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
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
<<<<<<< HEAD
    min: [8, "enter a valid phone number please"],
    required: [true, "enter your phone number please"],
=======
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
  },
  address: {
    street: {
      type: String,
<<<<<<< HEAD
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
=======
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postal: {
      type: Number,
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
    },
  },
  job: {
    type: String,
<<<<<<< HEAD
    required: [true, "insert your job please"],
  },
  familyMembers: {
    type: Number,
    required: [true, "insert your information please"],
  },
  child: {
    type: [childSchema],
    required: [true, "you can't subscribe without children"],
=======
  },
  familyMembers: {
    type: Number,
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
  },
  child: [childSchema],
  demandes: {
    type: String,
<<<<<<< HEAD
    required: [true, "insert your demandes please"],
  },
  registerDate: {
    type: Date,
    default: Date.now(),
=======
>>>>>>> 762da8c97b60cae217828dca812918ee10648dfa
  },
});

const Parent = model("parent", parentSchema);
const Child = model("child", childSchema);

module.exports = { Parent, Child };
