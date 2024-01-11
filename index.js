import express from "express";
import path from "path";
import HomeController from "./src/controller/home.controller.js";
import JobsController from "./src/controller/jobs.controller.js";
import UserController from "./src/controller/user.Controller.js";
import expressEjsLayouts from "express-ejs-layouts";
import newJobFormDataValidation from "./src/middleware/jobData.validation.middleware.js";
import updateJobFormDataValidation from "./src/middleware/update.job.data.validation.js";
import { logoUploadFile } from "./src/middleware/company-logo-upload.middleware.js";
import userDataValidation from "./src/middleware/userData.validation.middleware.js";

const app = new express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

app.use(express.static("src/views"));
app.use(express.static("public"));

const homeController = new HomeController();
const jobController = new JobsController();
const userController = new UserController();

app.get("/", homeController.getHome);
app.get("/jobs", jobController.getJobs);
app.post(
  "/new",
  logoUploadFile.single("Clogo"),
  newJobFormDataValidation,
  jobController.addNewJob
);
app.get("/update-job/:id", jobController.getUpdateJobView);
app.post(
  "/update-job",
  updateJobFormDataValidation,
  jobController.updateJobData
);
app.post("/delete-job/:id", jobController.deleteJob);
app.post("/search", jobController.search);
app.post("/register", userDataValidation, userController.createNewUser);
app.post("/login", userController.userLogin);

export default app;
