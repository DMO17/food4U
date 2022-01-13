const { Router } = require("express");
const {
  renderDashboard,
  renderFoodPostById,
  renderFoodPostForm,
  renderOrderForm,
  renderProfilePage,
  renderWatchList,
  renderInbox,
} = require("../../controller/view/private-controller");

const router = Router();

router.use("/dashboard", renderDashboard);

// router.use("/food-post/view/:postId", renderFoodPostById);
// router.use("/food-post/create", renderFoodPostForm);
// router.use("/food-post/:postId/order", renderOrderForm);

router.use("/profile/:profileId", renderProfilePage);

router.use("/watch-list", renderWatchList);

router.use("/inbox", renderInbox);

module.exports = router;
