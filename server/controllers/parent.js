const { Parent, Child } = require("../models/parent");

exports.signup = async (req, res) => {
  let { email, password } = req.body;
  try {
    //search if our user already exists
    const parentExist = await Parent.findOne({ email });
    //parent exist
    if (parentExist) {
      return res.status(400).send("this email already exists");
    }
    //parent doesn't exist
    const newParent = await new Parent(req.body);
    //avoid duplacted child for the same parent
    const childTab = newParent.child.map((el) => el.childFName);
    let childExist = childTab.some(
      (name, index) => childTab.indexOf(name) !== index
    );
    if (childExist) {
      childTab.length === 0;
      return res.status(400).send("this child already registred");
    }
    //this didn't work
    let newChild;
    if (childTab.length !== 0) {
      newChild = await new Child(childTab);
      await newParent.save(async (err) => {
        err ? handleError(err) : await newChild.save();
      });
      return res.status(200).send("parent and child registred");
    }

    // const childTab = newParent.child;
    // let children = [];
    // await childTab.forEach((child) => {
    //   const { error, childFName } = child;
    //   //all children should be added without errors
    //   if (!error) {
    //     //verify if the child is already has inscription
    //     if (childTab.has(childFName)) {
    //       return res.status(400).send("you have already add this child");
    //     } else {
    //       children.push(child);
    //     }
    //   } else {
    //     children.pop();
    //   }
    // });
  } catch (error) {
    console.error(`signup error => ${error}`);
    return res.status(500).send({ msg: "signup error", error });
  }
};

// exports.getChildren = async (req, res) => {
//   try {
//   } catch (error) {}
// };
