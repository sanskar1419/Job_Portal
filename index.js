import express from "express";
import path from "path";

const app = new express();

app.use(express.static("src/views"));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(path.resolve(), "src", "views", "home.html"));
});

export default app;
