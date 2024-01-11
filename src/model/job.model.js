import uniqid from "uniqid";
export default class JobModel {
  constructor(
    id,
    Cname,
    Clogo,
    role,
    location,
    workModel,
    salary,
    skills,
    opening,
    applicant,
    lastDate
  ) {
    this.id = id;
    this.Cname = Cname;
    this.Clogo = Clogo;
    this.role = role;
    this.location = location;
    this.workModel = workModel;
    this.salary = salary;
    this.skills = skills;
    this.opening = opening;
    this.applicant = applicant;
    this.lastDate = lastDate;
  }

  static getAllJobs() {
    return jobs;
  }

  static addNewJob(
    Cname,
    role,
    location,
    workModel,
    salary,
    skills,
    Clogo,
    lastDate,
    opening
  ) {
    let newJob = new JobModel(
      uniqid(),
      Cname,
      Clogo,
      role,
      location,
      workModel,
      salary,
      skills,
      opening,
      [],
      lastDate
    );

    jobs.push(newJob);
  }

  static getJobById(id) {
    return jobs.find((p) => p.id == id);
  }

  static update(jobRecieved) {
    console.log(jobRecieved);
    const index = jobs.findIndex((p) => p.id == jobRecieved.id);
    const applicant = jobs[index].applicant;
    jobs[index] = jobRecieved;
    jobs[index].applicant = applicant;
  }
  static delete(id) {
    const index = jobs.findIndex((p) => p.id === id);
    jobs.splice(index, 1);
  }

  static searchResult(name) {
    // console.log(name);
    const data = jobs.filter((job) => {
      if (job.Cname == name) {
        return job;
      }
    });

    return data;
  }
}

var jobs = [
  new JobModel(
    "1",
    "Coding Ninjas",
    "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
    "SDE",
    "Gurgao India",
    "Remote",
    "8-10",
    ["HTML", "NodeJs", "React", "CSS", "SQL"],
    "2",
    [],
    "2, May 2024"
  ),
  new JobModel(
    "2",
    "Google",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "SDE-I",
    "Bangalore India",
    "Remote",
    "15-20",
    ["SDE", "SQL", "React", "JavaScript", "JQuery", "Java"],
    "2",
    [],
    "2, May 2024"
  ),
  new JobModel(
    "3",
    "Microsoft",
    "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg",
    "SDE-I",
    "Delhi India",
    "WFH",
    "10-15",
    ["NodeJs", "React", "Angular", "MERN", "SQL"],
    "2",
    [],
    "2, May 2024"
  ),
  new JobModel(
    "4",
    "Samsumg",
    "https://1000logos.net/wp-content/uploads/2017/06/Samsung_logo.png",
    "Full Stack Developer",
    "Chennai India",
    "Remote",
    "8-10",
    ["HTML", "NodeJs", "React", "CSS", "SQL", "JavaScript"],
    "2",
    [],
    "2, May 2024"
  ),
];
