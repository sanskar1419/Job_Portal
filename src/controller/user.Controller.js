import UserModel from "../model/user.model.js";
import JobModel from "../model/job.model.js";

export default class UserController {
  createNewUser(req, res) {
    const { name, email, password } = req.body;
    UserModel.addUser(name, email, password);
    res.render("home", {
      errorMessage: null,
      successMessage: "Hurray, You have registered Successfully, Kindly Login",
    });
  }

  userLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(email, password);
    if (!user) {
      return res.render("home", {
        errorMessage: "Invalid Credential",
        successMessage: null,
      });
    } else {
      let jobs = JobModel.getAllJobs();
      return res.render("jobs", {
        jobs: jobs,
        errorMessage: null,
        successMessage: "Succesfully Login",
      });
    }
  }
}
