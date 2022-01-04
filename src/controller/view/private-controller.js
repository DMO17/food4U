const renderDashboard = (req, res) => {
  res.render("dashboard");
};
const renderPostById = (req, res) => {
  res.render("food-post");
};
const renderPostForm = (req, res) => {
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
  renderPostById,
  renderPostForm,
  renderOrderForm,
  renderProfilePage,
  renderWatchList,
  renderInbox,
};
