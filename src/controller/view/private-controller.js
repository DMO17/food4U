const { User, Post } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const data = await Post.findAll({
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = {
      loggedIn,
      posts: data.map((posts) => posts.get({ plain: true })),
    };

    console.log(serializedData);

    res.render("dashboard", serializedData);
  } catch (error) {
    console.log(error.message);
  }
};
const renderFoodPostById = (req, res) => {
  res.render("food-post");
};
const renderFoodPostForm = (req, res) => {
  res.render("create-food-post");
};
const renderOrderForm = (req, res) => {
  res.render("order-form");
};
const renderProfilePage = (req, res) => {
  res.render("profile-page");
};
const renderWatchList = (req, res) => {
  res.render("watch-list");
};
const renderInbox = (req, res) => {
  res.render("inbox");
};

module.exports = {
  renderDashboard,
  renderFoodPostById,
  renderFoodPostForm,
  renderOrderForm,
  renderProfilePage,
  renderWatchList,
  renderInbox,
};
