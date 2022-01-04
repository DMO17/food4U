const { Router } = require("express");
const {
  renderDashboard,
  renderPostById,
  renderPostForm,
  renderOrderForm,
  renderProfilePage,
  renderWatchList,
  renderInbox,
} = require("../../controller/view/private-controller");

const router = Router();

router.use("/dashboard", renderDashboard);
router.use("/post/:postId", renderPostById);
router.use("/post/create", renderPostForm);
router.use("/post/:postId/order", renderOrderForm);

router.use("/profile/:profileId", renderProfilePage);

router.use("/watchList", renderWatchList);

router.use("/inbox", renderInbox);

module.exports = router;
