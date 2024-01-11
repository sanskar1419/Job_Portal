import UserModel from "../model/user.model.js";

export default class UserController {
  createNewUser(req, res) {
    const { name, email, password } = req.body;
    UserModel.addUser(name, email, password);
    res.render("home", {
      errorMessage: null,
      successMessage: "Hurray, You have registered Successfully, Kindly Login",
    });
  }
}
