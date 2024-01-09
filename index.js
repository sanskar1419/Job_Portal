import express from "express";
import path from "path";
import HomeController from "./src/controller/home.controller.js";

const app = new express();
const homeController = new HomeController();

app.use(express.static("src/views"));
app.use(express.static("public"));

app.get("/", homeController.getHome);
app.get("/jobs", (req, res) => {
  res.sendFile(path.join(path.resolve(), "src", "views", "jobs.html"));
});

export default app;
