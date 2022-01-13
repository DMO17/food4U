const {
  getPayloadWithValidFieldsOnly,
  isAllRequiredFieldsPresent,
} = require("../../helper");
const { Post } = require("../../models");

const createFoodPost = async (req, res) => {
  const errorMessage = "Failed to create food post";
  try {
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

    const checkAllRequiredField = isAllRequiredFieldsPresent(
      [
        "food_name",
        "description",
        "food_url",
        "price",
        "location",
        "food_type",
      ],
      validPostBodyFields
    );

    if (!checkAllRequiredField) {
      console.log(
        `[ERROR]: ${errorMessage} | Please Provide The Correct required Post Body Fields`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    const payLoad = { user_id: req.session.user.id, ...validPostBodyFields };

    const foodPost = await Post.create(payLoad);

    res.json({ data: foodPost });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
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
