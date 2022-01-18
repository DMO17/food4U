const { getPayloadWithValidFieldsOnly } = require("../../helper");
const { Order } = require("../../models");

const orderFoodPostById = async (req, res) => {
  const errorMessage = "Failed to order food";

  try {
    const validPostBodyFields = getPayloadWithValidFieldsOnly(
      ["post_id", "message"],
      req.body
    );
    if (Object.keys(validPostBodyFields).length !== 2) {
      console.log(
        `[ERROR]: ${errorMessage} | Please Provide The Correct required Post Body Fields`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    const payLoad = { user_id: req.session.user.id, ...validPostBodyFields };

    const foodOrder = await Order.create(payLoad);

    return res.json({ success: true, data: foodOrder });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }

  res.json({ message: "order food post by id" });
};

const updateOrderFoodPostById = (req, res) => {
  res.json({ message: "uodate order food post by id" });
};

const deleteOrderFoodPostById = (req, res) => {
  res.json({ message: "delete order food post by id" });
};

module.exports = {
  orderFoodPostById,
  updateOrderFoodPostById,
  deleteOrderFoodPostById,
};
