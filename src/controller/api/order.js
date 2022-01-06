const orderFoodPostById = (req, res) => {
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
