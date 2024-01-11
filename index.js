import express from "express";
import path from "path";
import session from "express-session";
import HomeController from "./src/controller/home.controller.js";
import JobsController from "./src/controller/jobs.controller.js";
import UserController from "./src/controller/user.Controller.js";
import expressEjsLayouts from "express-ejs-layouts";
import newJobFormDataValidation from "./src/middleware/jobData.validation.middleware.js";
import updateJobFormDataValidation from "./src/middleware/update.job.data.validation.js";
import { logoUploadFile } from "./src/middleware/company-logo-upload.middleware.js";
import { resumeFile } from "./src/middleware/resume.file.upload.js";
import userDataValidation from "./src/middleware/userData.validation.middleware.js";
import { auth } from "./src/middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middleware/lastVisit.Middleware.js";

const app = new express();

app.use(cookieParser());
app.use(
  session({
    secret: "JobPortal",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

app.use(express.static("src/views"));
app.use(express.static("public"));
app.use(express.static("public/css"));
app.use(express.static("public/images"));

const homeController = new HomeController();
const jobController = new JobsController();
const userController = new UserController();

app.get("/", homeController.getHome);
app.get("/jobs", setLastVisit, auth, jobController.getJobs);
app.post(
  "/new",
  auth,
  logoUploadFile.single("Clogo"),
  newJobFormDataValidation,
  jobController.addNewJob
);
app.get("/update-job/:id", auth, jobController.getUpdateJobView);
app.post(
  "/update-job",
  auth,
  updateJobFormDataValidation,
  jobController.updateJobData
);
app.post("/delete-job/:id", auth, jobController.deleteJob);
app.post("/search", auth, jobController.search);
app.post("/register", userDataValidation, userController.createNewUser);
app.post("/login", userController.userLogin);
app.get("/logout", auth, userController.logout);
app.get("/view-detail/:id", auth, jobController.getJobDetailsPage);
app.post("/apply-now", resumeFile.single("resume"), jobController.applyNewJob);
// app.get("/jobs/seeker", jobController.getJobs);

export default app;
