import path from "path";

export default class HomeController {
  getHome(req, res) {
    res.render("home", { errorMessage: null, successMessage: null });
  }
}
