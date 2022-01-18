const renderHomePage = (req, res) => {
  const { loggedIn } = req.session;
  res.render("home", { loggedIn });
};
const renderLoginPage = (req, res) => {
  res.render("login");
};
const renderSignUpPage = (req, res) => {
  res.render("signup");
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
};
