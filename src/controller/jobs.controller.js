import path from "path";
import JobModel from "../model/job.model.js";

export default class JobsController {
  getJobs(req, res) {
    let jobs = JobModel.getAllJobs();
    // console.log(jobs);
    res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
      successMessage: null,
    });
  }
  addNewJob(req, res) {
    // console.log(req.body);
    const { Cname, role, location, workModel, salary, skills } = req.body;
    const Clogo = "images/Job_Company_Logo/" + req.file.filename;
    JobModel.addNewJob(Cname, role, location, workModel, salary, skills, Clogo);
    let jobs = JobModel.getAllJobs();
    // console.log(jobs);
    return res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
      successMessage: "New Job added Succesfully",
    });
  }

  getUpdateJobView(req, res) {
    const id = req.params.id;
    let jobFound = JobModel.getJobById(id);
    // console.log(jobFound);
    if (jobFound) {
      res.render("update", {
        errorMessage: null,
        job: jobFound,
        successMessage: null,
      });
    } else {
      res.render("404", {
        errorMessage: null,
        message: "No Such job is there",
        successMessage: null,
      });
    }
  }
  updateJobData(req, res) {
    JobModel.update(req.body);
    let jobs = JobModel.getAllJobs();
    return res.render("jobs", {
      jobs: jobs,
      errorMessage: null,
      successMessage: "Job Data Updated Successfully",
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
      successMessage: "Job Deleted Succesfully",
    });
  }
  search(req, res) {
    // console.log(req.body);
    const { name } = req.body;
    const result = JobModel.searchResult(name);
    // console.log(result);
    const length = result.length;
    if (length == 0) {
      res.render("404", {
        errorMessage: null,
        message: "No Search Result",
        successMessage: null,
      });
    } else {
      res.render("searchResult", {
        jobs: result,
        length: length,
        errorMessage: null,
        successMessage: null,
      });
    }
  }
}
