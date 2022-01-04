const renderDashboard = (req, res) => {
  res.render("dashboard");
};
const renderPostById = (req, res) => {
  res.render("postById");
};
const renderPostForm = (req, res) => {
  res.render("postForm");
};
const renderOrderForm = (req, res) => {
  res.render("orderForm");
};
const renderProfilePage = (req, res) => {
  res.render("profile-page");
};
const renderWatchList = (req, res) => {
  res.render("watchList");
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
