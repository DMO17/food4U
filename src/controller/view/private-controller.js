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
    const errorMessage = "Failed to render dashboard data";
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    // return res.status(500).json({
    //   success: false,
    //   message: errorMessage,
    // });
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
  try {
    const { loggedIn } = req.session;
    const data = await Post.findAll({
      where: { user_id: req.session.user.id },
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = {
      loggedIn,
      posts: data.map((posts) => posts.get({ plain: true })),
    };

    console.log(serializedData);

    res.render("profile-page", serializedData);
  } catch (error) {
    const errorMessage = "Failed to render profile data";
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    // return res.status(500).json({
    //   success: false,
    //   message: errorMessage,
    // });
  }
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
