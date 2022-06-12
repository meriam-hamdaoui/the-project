const { Parent, Child } = require("../models/parent");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    //search if our user already exists
    const parentExists = await Parent.findOne({ email });
    // //exists
    if (parentExists) {
      return res.status(400).send("this email already exists");
    }
    //doesn't exist
    const newParent = await new Parent(req.body);
    let children = [];
    await newParent.child.forEach((element) => {
      if (!element.error) {
        children.push(element);
      } else {
        children.pop();
      }
    });

    //children and parent are added simultaneously
    children.length !== 0 &&
      (await (newParent.save() && Child.insertMany(children)));
    return res.status(200).send("registration successeded");
  } catch (error) {
    console.error(`signup error => ${error}`);
    res.status(500).send({ msg: "signup error", error });
  }
};

// exports.getChildren = async (req, res) => {
//   try {
//   } catch (error) {}
// };
