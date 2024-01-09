import express from "express";
import path from "path";
import HomeController from "./src/controller/home.controller.js";
import JobsController from "./src/controller/jobs.controller.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = new express();

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

app.use(express.static("src/views"));
app.use(express.static("public"));

const homeController = new HomeController();
const jobController = new JobsController();

app.get("/", homeController.getHome);
app.get("/jobs", jobController.getJobs);

export default app;
