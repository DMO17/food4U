const { Router } = require("express");

const router = Router();

router.post("/food-post", createFoodPost);
router.put("/food-post/:uuid", updateFoodPostById);
router.delete("/food-post/:uuid", deleteFoodPostById);

router.post("/food-post/:uuid/order", orderFoodPostById);
router.put("/food-post/:uuid/order/:orderId", updateOrderFoodPostById);
router.delete("/food-post/:uuid/order/:orderId", deleteOrderFoodPostById);

router.post("/food-post/:uuid/comment", commentFoodPost);
router.put("/food-post/:uuid/comment/:id", updateCommentFoodPostById);
router.delete("/food-post/:uuid/comment/:id", deleteCommentFoodPostById);

module.exports = router;
