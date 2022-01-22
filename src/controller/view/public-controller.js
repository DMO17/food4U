const { Post } = require("../../models");

const renderHomePage = async (req, res) => {
  const { loggedIn } = req.session;

  const dbData = await Post.findAll();
  const data = dbData.map((each) => each.get({ plain: true }));
  console.log(data);
  res.render("home", { loggedIn, data });
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
