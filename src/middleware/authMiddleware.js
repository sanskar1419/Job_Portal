export const auth = (req, res, next) => {
  // console.log(req.url);
  if (req.url === "/jobsseeker") {
    req.session.userEmail = "test@gmail.com";
  }
  if (req.session.userEmail) {
    next();
  } else {
    res.redirect("/");
  }
};
