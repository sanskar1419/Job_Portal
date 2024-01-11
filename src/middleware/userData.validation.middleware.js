import UserModel from "../model/user.model.js";
import { body, validationResult } from "express-validator";

const userDataValidation = async (req, res, next) => {
  const rules = [
    body("name").isLength({ min: 1 }).withMessage("Name is Required"),
    body("email").isEmail().withMessage("Should be a vailid Email Id"),
    body("password")
      .isLength({ min: 7 })
      .withMessage("Password should be at least 7 chars"),
    body("email").custom(async (value, { req }) => {
      //   console.log(value);
      //   console.log(req.body);
      const user = await UserModel.getByEmail(value);
      //   console.log(user);
      if (user) {
        throw new Error(
          "Email Id already Exist kindly Log In or user different Email"
        );
      } else {
        return true;
      }
    }),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));
  let validationError = validationResult(req);
  //   console.log(validationError);
  if (!validationError.isEmpty()) {
    res.render("home", {
      errorMessage: validationError.array()[0].msg,
      successMessage: null,
      userEmail: req.session.userEmail,
    });
  } else {
    next();
  }
};

export default userDataValidation;
