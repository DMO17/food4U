const {
  getPayloadWithValidFieldsOnly,
  isAllRequiredFieldsPresent,
} = require("../../helper");
const { Post, User } = require("../../models");

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
    // const payLoad = { user_id: 1, ...validPostBodyFields };

    const foodPost = await Post.create(payLoad);

    return res.json({ success: true, data: foodPost });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const updateFoodPostById = async (req, res) => {
  const errorMessage = "Failed to update food post";
  try {
    console.log("payload body", req.body);

    const { uuid } = req.params;

    const validPostBodyFields = getPayloadWithValidFieldsOnly(
      [
        "food_name",
        "description",
        "food_url",
        "price",
        "location",
        "food_type",
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

    const payload = { user_id: req.session.user.id, ...validPostBodyFields };
    // const payload = { user_id: 1, ...validPostBodyFields };

    const data = await Post.update(payload, {
      where: { uuid: uuid },
    });

    if (!data[0]) {
      console.log(
        `[ERROR]: ${errorMessage} | No food post with this ID exists`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.json({ success: true, data: data });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const deleteFoodPostById = async (req, res) => {
  const errorMessage = "Failed to delete food post";
  try {
    const { uuid } = req.params;

    const data = await Post.destroy({ where: { uuid } });

    if (!data) {
      console.log(
        `[ERROR]: ${errorMessage} | No food post with this ID exists`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.json({ success: true, data: "food post successfully deleted" });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

module.exports = {
  createFoodPost,
  updateFoodPostById,
  deleteFoodPostById,
};
