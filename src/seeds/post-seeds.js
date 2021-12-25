const Post = require("../models/Post");

const postData = [
  {
    food_name: "Milk",
    description: "This is a green 1 litre milk that expires in 3 days",
    food_url:
      "https://jjproducts.global.ssl.fastly.net/jjfoodservice/image/upload/w_700,h_700,c_scale/v1601909473/products/DAI006/_S/mww2zj6cegiqyononnkg.jpg",
    price: 2.0,
    user_id: 1,
    food_type_id: 2,
  },
  {
    food_name: "Bread",
    description: "This is a brown bread that expires in 3 days",
    food_url:
      "https://cdn.shopify.com/s/files/1/0348/7465/4764/products/KingsmillWholemealMediumBread_520x.png?v=1584487528",
    price: 1.55,
    user_id: 1,
    food_type_id: 2,
  },
  {
    food_name: "Brown Bread",
    description: "This is a brown bread that expires in 7 days",
    food_url:
      "https://cdn.shopify.com/s/files/1/0348/7465/4764/products/KingsmillWholemealMediumBread_520x.png?v=1584487528",
    price: 1.75,
    user_id: 2,
    food_type_id: 2,
  },
  {
    food_name: "ice-cream",
    description: "chocolate icre cream cone",
    food_url:
      "https://cdn.shopify.com/s/files/1/0348/7465/4764/products/KingsmillWholemealMediumBread_520x.png?v=1584487528",
    price: 3.0,
    user_id: 2,
    food_type_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
