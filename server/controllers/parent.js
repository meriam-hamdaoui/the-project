//require the parent/child schema for registration
const { Parent, Child } = require("../models/parent");

//third-party models
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

/** registration conroller */
exports.signup = async (req, res) => {
  //distracturing
  const { email, password } = req.body;
  try {
    /*******verify if the email already exists******/
    const emailExists = await Parent.findOne({ email });
    //1.email exists
    if (emailExists) return res.status(403).send("this email already exists");
    //2.email doesn't exist
    const newParent = await new Parent(req.body);
    // console.log("newParent => " + newParent);

    /*****before move to registration we should verify duplicated children  */
    const children = newParent.child;
    // console.log("children => " + children);
    const duplicatedChild = children.map((el) => el.childFName);
    const duplacted = await duplicatedChild.some(
      (name, index) => duplicatedChild.indexOf(name) !== index
    );
    //1.false errror message
    if (duplacted) return res.status(409).send("duplacted child");
    //2.if true we proceed
    /**** hashing the password before saving the parent (npm i bcryptjs) */
    //generate a salt round for our hash
    const saltRound = 10;
    const salt = bcrypt.genSaltSync(saltRound);
    //hash the password
    const hash = bcrypt.hashSync(password, salt);
    //we add the hash to the user password
    newParent.password = hash;

    /********* associate a token to our new parent( npm i jsonwebtoken)*/

    const payload = { id: newParent._id };
    const token = jwt.sign(payload, process.env.secretOrKey);

    if (newParent && !duplacted) {
      (await newParent.save()) && Child.insertMany(children);
      return res.status(200).send({
        msg: `welcome ${newParent.firstName} ${newParent.lastName}`,
        newParent,
        token,
      });
    }
  } catch (error) {
    console.error(`signup error => ${error}`);
    return res.status(500).send({ msg: "signup error", error });
  }
};
