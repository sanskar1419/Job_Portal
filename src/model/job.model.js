export default class JobModel {
  constructor(id, Cname, Clogo, role, location, workModel, salary, skills) {
    this.id = id;
    this.Cname = Cname;
    this.Clogo = Clogo;
    this.role = role;
    this.location = location;
    this.workModel = workModel;
    this.salary = salary;
    this.skills = skills;
  }

  static getAllJobs() {
    return jobs;
  }
}

var jobs = [
  new JobModel(
    1,
    "Coding Ninjas",
    "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
    "SDE",
    "Gurgao India",
    "Remote",
    "8-10",
    ["HTML", "NodeJs", "React", "CSS", "SQL"]
  ),
  new JobModel(
    2,
    "Google",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "SDE-I",
    "Bangalore India",
    "Remote",
    "15-20",
    ["SDE", "SQL", "React", "JavaScript", "JQuery", "Java"]
  ),
  new JobModel(
    3,
    "Microsoft",
    "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg",
    "SDE-I",
    "Delhi India",
    "WFH",
    "10-15",
    ["NodeJs", "React", "Angular", "MERN", "SQL"]
  ),
  new JobModel(
    4,
    "Samsumg",
    "https://1000logos.net/wp-content/uploads/2017/06/Samsung_logo.png",
    "Full Stack Developer",
    "Chennai India",
    "Remote",
    "8-10",
    ["HTML", "NodeJs", "React", "CSS", "SQL", "JavaScript"]
  ),
];
