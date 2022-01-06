const { Order } = require("../models");

const orderData = [
  {
    message: "order 1 ice cream",
    user_id: 1,
    post_id: 3,
  },
  {
    message: "order 1 bread",
    user_id: 2,
    post_id: 1,
  },
  {
    message: "order 1 milk",
    user_id: 2,
    post_id: 3,
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;
