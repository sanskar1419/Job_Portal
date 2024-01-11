import UserModel from "../model/user.model.js";
import JobModel from "../model/job.model.js";

export default class UserController {
  createNewUser(req, res) {
    const { name, email, password } = req.body;
    UserModel.addUser(name, email, password);
    res.render("home", {
      errorMessage: null,
      successMessage: "Hurray, You have registered Successfully, Kindly Login",
      userEmail: req.session.userEmail,
    });
  }

  userLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(email, password);
    if (!user) {
      return res.render("home", {
        errorMessage: "Invalid Credential",
        successMessage: null,
        userEmail: req.session.userEmail,
      });
    } else {
      req.session.userEmail = email;
      let jobs = JobModel.getAllJobs();
      return res.render("jobs", {
        jobs: jobs,
        errorMessage: null,
        successMessage: "Succesfully Login",
        userEmail: req.session.userEmail,
      });
    }
  }

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.send("Error in Logging Out");
      } else {
        res.render("home", {
          errorMessage: null,
          successMessage: "Successfully Logout",
        });
      }
    });
    res.clearCookie("lastVisit");
  }
}
