const { Router } = require("express");

const {
  commentFoodPost,
  updateCommentFoodPostById,
  deleteCommentFoodPostById,
} = require("../../controller/api/comment");
const {
  createFoodPost,
  updateFoodPostById,
  deleteFoodPostById,
} = require("../../controller/api/food-post");
const {
  orderFoodPostById,
  updateOrderFoodPostById,
  deleteOrderFoodPostById,
} = require("../../controller/api/order");

const router = Router();

router.post("/food-post", createFoodPost);
router.delete("/food-post/:uuid", deleteFoodPostById);
router.put("/food-post/:uuid", updateFoodPostById);

router.post("/food-post/:uuid/order", orderFoodPostById);
// router.put("/food-post/:uuid/order/:orderId", updateOrderFoodPostById);
// router.delete("/food-post/:uuid/order/:orderId", deleteOrderFoodPostById);

// router.post("/food-post/:uuid/comment", commentFoodPost);
// router.put("/food-post/:uuid/comment/:id", updateCommentFoodPostById);
// router.delete("/food-post/:uuid/comment/:id", deleteCommentFoodPostById);

module.exports = router;
