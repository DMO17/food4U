const { getPayloadWithValidFieldsOnly } = require("../../helper");

const createFoodPost = (req, res) => {
  // const validFields = getPayloadWithValidFieldsOnly([
  //   "food_name",
  //   "description",
  //   "food_url",
  //   "price",
  //   "location",
  //   "food_type",
  //   "item",
  //   "status",
  // ]);

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
