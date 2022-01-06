const commentFoodPost = (req, res) => {
  res.json({ message: "comment food post" });
};

const updateCommentFoodPostById = (req, res) => {
  res.json({ message: "update food post by id" });
};

const deleteCommentFoodPostById = (req, res) => {
  res.json({ message: "delete comment food post by id" });
};

module.exports = {
  commentFoodPost,
  updateCommentFoodPostById,
  deleteCommentFoodPostById,
};
