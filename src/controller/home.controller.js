import path from "path";

export default class HomeController {
  getHome(req, res) {
    res.render("home", {
      errorMessage: null,
      userEmail: req.session.userEmail,
      successMessage: null,
    });
  }
}
