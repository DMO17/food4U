const renderDashboard = (req, res) => {
  res.render("dashboard");
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
