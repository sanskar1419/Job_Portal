import path from "path";

export default class HomeController {
  getHome(req, res) {
    res.sendFile(path.join(path.resolve(), "src", "views", "home.html"));
  }
}
