const { Router } = require("express");

const router = Router();

router.use("/dashboard", renderDashboard);
router.use("/post", renderPost);
router.use("/post/:postId", renderById);
router.use("/post/create", renderPostForm);
router.use("/post/:postId/order", renderOrderForm);

module.exports = router;
