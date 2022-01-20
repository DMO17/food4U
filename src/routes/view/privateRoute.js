const { Router } = require("express");
const {
  renderDashboard,
  renderFoodPostById,
  renderFoodPostForm,
  renderEditFoodPostById,
  renderOrderForm,
  renderProfilePage,
  renderProfileOrders,
  renderProfilePosts,
  renderUserProfilePage,
  renderInbox,
} = require("../../controller/view/private-controller");

const router = Router();

router.use("/dashboard", renderDashboard);

router.use("/food-post/view/:postId", renderFoodPostById);
router.use("/food-post/edit/:postId", renderEditFoodPostById);

router.use("/food-post/create", renderFoodPostForm);
router.use("/food-post/:postId/order", renderOrderForm);

router.use("/profile/view/:username", renderUserProfilePage);
router.use("/profile/posts", renderProfilePosts);
router.use("/profile/orders", renderProfileOrders);
router.use("/profile", renderProfilePage);

router.use("/inbox", renderInbox);

module.exports = router;
