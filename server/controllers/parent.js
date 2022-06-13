//require the parent/child schema for registration
const { Parent, Child } = require("../models/parent");

/** registration conroller */
exports.signup = async (req, res) => {
  //distracturing
  const { email, password } = req.body;
  try {
    /*******verify if the email already exists******/
    const emailExists = await Parent.findOne({ email });
    //1.email exists
    if (emailExists) return res.status(400).send("this email already exists");
    //2.email doesn't exist
    const newParent = await new Parent(req.body);
    console.log("newParent => " + newParent);

    const children = newParent.child;
    console.log("children => " + children);
    /**before move to registration we should verify duplicated children */
    const duplicatedChild = children.map((el) => el.childFName);
    const duplacted = await duplicatedChild.some(
      (name, index) => duplicatedChild.indexOf(name) !== index
    ); //true or false

    if (duplacted) return res.status(400).send("duplacted child");

    if (newParent && !duplacted) {
      (await newParent.save()) && Child.insertMany(children);
      return res.status(200).send("welcome");
    }

    // if (newParent && !duplacted) {
    //     await newParent.save();

    // }

    // if (duplacted) {
    //   children.length === 0;

    // }
    // const removeParent = false;
    // if (!children.length) {
    //   let { id } = newParent._id;
    //   removeParent = await Parent.findByIdAndRemove({ id });
    // }

    // if (children.length && !removeParent) {
    //   if (await newParent.save()) {
    //     await Child.create(children);
    //   }
    // }
  } catch (error) {
    console.error(`signup error => ${error}`);
    return res.status(500).send({ msg: "signup error", error });
  }
};
