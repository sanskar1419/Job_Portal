import JobModel from "../model/job.model.js";
import { body, validationResult } from "express-validator";
const newJobFormDataValidation = async (req, res, next) => {
  const rules = [
    body("Cname").isLength({ min: 1 }).withMessage("Name is Required"),
    body("role").isLength({ min: 1 }).withMessage("Role is Required"),
    body("salary").isLength({ min: 1 }).withMessage("Salary is Required"),
    body("workModel")
      .isLength({ min: 1 })
      .withMessage("Work Model is Required"),
    body("skills").isArray().withMessage("Atleast two skills to be selected"),
    body("Clogo").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Image URL is Missing or not valid");
      }
      return true;
    }),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));
  let validationError = validationResult(req);
  console.log(validationError);
  let jobs = JobModel.getAllJobs();
  if (!validationError.isEmpty()) {
    res.render("jobs", {
      errorMessage: validationError.array()[0].msg,
      jobs: jobs,
      successMessage: null,
    });
  } else {
    next();
  }
};

export default newJobFormDataValidation;
