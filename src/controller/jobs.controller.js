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
    // console.log(jobs);
    return res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
    });
  }

  getUpdateJobView(req, res) {
    const id = req.params.id;
    let jobFound = JobModel.getJobById(id);
    console.log(jobFound);
    if (jobFound) {
      res.render("update", { errorMessage: null, job: jobFound });
    } else {
      res.send("Product Not Found");
    }
  }
  updateJobData(req, res) {
    JobModel.update(req.body);
    let jobs = JobModel.getAllJobs();
    return res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
    });
  }
  deleteJob(req, res) {
    const id = Number(req.params.id);
    JobModel.delete(id);
    let jobs = JobModel.getAllJobs();
    // console.log(jobs);
    return res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
    });
  }
}
