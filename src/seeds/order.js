const { Order } = require("../models");

const orderData = [
  {
    message: "user 2 want to order the green milk",
    user_id: 2,
    post_id: 1,
  },
  {
    message: "user 3 want to order the green milk",
    user_id: 3,
    post_id: 1,
  },
  {
    message: "user 4 want to order the green milk",
    user_id: 4,
    post_id: 1,
  },
  {
    message: "user 1 want to order the green milk",
    user_id: 1,
    post_id: 2,
  },
  {
    message: "user 3 want to order the green milk",
    user_id: 3,
    post_id: 2,
  },
  {
    message: "user 3 want to order the white bread",
    user_id: 3,
    post_id: 3,
  },
  {
    message: "user 3 want to order the white bread",
    user_id: 1,
    post_id: 3,
  },
  {
    message: "user 4 want to order the white bread",
    user_id: 4,
    post_id: 3,
  },
  {
    message: "user 4 want to order the brown bread",
    user_id: 4,
    post_id: 4,
  },
  {
    message: "user 1 want to order the brown bread",
    user_id: 1,
    post_id: 4,
  },
  {
    message: "user 2 want to order chocolate ice-cream",
    user_id: 2,
    post_id: 5,
  },
  {
    message: "user 3 want to order chocolate ice-cream",
    user_id: 3,
    post_id: 5,
  },
  {
    message: "user 4 want to order chocolate ice-cream",
    user_id: 4,
    post_id: 5,
  },
  {
    message: "user 2 want to order chocolate ice-cream with sprinkles",
    user_id: 2,
    post_id: 6,
  },
  {
    message: "user 5 want to order chocolate ice-cream with sprinkles",
    user_id: 5,
    post_id: 6,
  },
  {
    message: "user 1 want to order Chocolate strawberry",
    user_id: 1,
    post_id: 8,
  },
  {
    message: "user 2 want to order Chocolate strawberry",
    user_id: 2,
    post_id: 8,
  },
  {
    message: "user 2 want to order Chocolate strawberry",
    user_id: 2,
    post_id: 8,
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;
