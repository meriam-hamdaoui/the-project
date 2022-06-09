const { Parent, Child } = require("../models/parent");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    //search if our user already exists
    const parentExists = await Parent.findOne({ email });
    //exists
    if (parentExists) {
      return res.status(400).send("this email already exists");
    }
    //doesn't exist
    const newParent = await new Parent(req.body);
    let newchild = {};
    newParent.child.forEach((element) => {
      newchild = new Child(element);
    });

    await newParent.save();
    await newchild.save();
    res.status(200).send({ msg: "new added successefuly", newParent });
  } catch (error) {
    console.error(`signup error => ${error}`);
    res.status(500).send({ msg: "signup error", error });
  }
};

// exports.getChildren = async (req, res) => {
//   try {
//   } catch (error) {}
// };
