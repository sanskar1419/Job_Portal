import path from "path";
import JobModel from "../model/job.model.js";

export default class JobsController {
  getJobs(req, res) {
    let jobs = JobModel.getAllJobs();
    // console.log(jobs);
    res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
    });
  }
  addNewJob(req, res) {
    // console.log(req.body);
    JobModel.addNewJob(req.body);
    let jobs = JobModel.getAllJobs();
    return res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
    });
  }
}
