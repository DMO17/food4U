const { getPayloadWithValidFieldsOnly } = require("../../helper");
const { Post } = require("../../models");

const createFoodPost = async (req, res) => {
  const validPostBodyFields = getPayloadWithValidFieldsOnly(
    [
      "food_name",
      "description",
      "food_url",
      "price",
      "location",
      "food_type",
      "item",
      "status",
    ],
    req.body
  );

  if (Objects.keys(validPostBodyFields).length != 8) {
    return res.json({
      success: false,
      message: "Please Provide The Correct Post Body Fields",
    });
  }

  const payLoad = { user_id: req.session.user.id, ...validPostBodyFields };

  const foodPost = await Post.create(payLoad);

  res.json({ data: foodPost });
};

const updateFoodPostById = (req, res) => {
  res.json({ message: "update food post" });
};

const deleteFoodPostById = (req, res) => {
  res.json({ message: "delete food post" });
};

module.exports = {
  createFoodPost,
  updateFoodPostById,
  deleteFoodPostById,
};
