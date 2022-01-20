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

router.get("/dashboard", renderDashboard);

router.get("/food-post/view/:postId", renderFoodPostById);
router.get("/food-post/edit/:postId", renderEditFoodPostById);

router.get("/food-post/create", renderFoodPostForm);
router.get("/food-post/:postId/order", renderOrderForm);

router.get("/profile/posts", renderProfilePosts);
router.get("/profile/orders", renderProfileOrders);
router.get("/profile/view/:username", renderUserProfilePage);
router.get("/profile", renderProfilePage);

router.get("/inbox", renderInbox);

module.exports = router;
