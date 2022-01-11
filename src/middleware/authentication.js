const authentication = (req, res, next) => {
  if (req.session.loggedIn) {
    console.log("user in session");
  } else {
    return res.redirect("/login");
  }
};

module.exports = authentication;
