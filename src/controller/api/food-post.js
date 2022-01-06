const createFoodPost = (req, res) => {
  res.json({ message: "create food post" });
};

const updateFoodPostById = (req, res) => {
  res.json({ message: "uodate food post" });
};

const deleteFoodPostById = (req, res) => {
  res.json({ message: "delete food post" });
};

module.exports = {
  createFoodPost,
  updateFoodPostById,
  deleteFoodPostById,
};
