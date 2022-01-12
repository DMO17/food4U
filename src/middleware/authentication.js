const authentication = (req, res, next) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    console.log("user in session");
    next();
  } else {
    return res.redirect("/login");
  }
};

module.exports = authentication;
