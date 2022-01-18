const Post = require("../models/Post");

const postData = [
  {
    food_name: "Milk",
    description: "This is a green 1 litre milk that expires in 3 days",
    food_url:
      "https://jjproducts.global.ssl.fastly.net/jjfoodservice/image/upload/w_700,h_700,c_scale/v1601909473/products/DAI006/_S/mww2zj6cegiqyononnkg.jpg",
    price: 2.0,
    user_id: 1,
    food_type: "Grocery",
  },
  {
    food_name: "Milk",
    description: "This is a green 1 litre milk ",
    food_url:
      "https://jjproducts.global.ssl.fastly.net/jjfoodservice/image/upload/w_700,h_700,c_scale/v1601909473/products/DAI006/_S/mww2zj6cegiqyononnkg.jpg",
    price: 2.0,
    user_id: 2,
    food_type: "Grocery",
  },
  {
    food_name: "White Bread",
    description: "This is a white bread that expires in 3 days",
    food_url:
      "https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 1.55,
    user_id: 3,
    food_type: "Grocery",
    status: "Unavailable",
  },
  {
    food_name: "Brown Bread",
    description: "This is a brown bread that expires in 7 days",
    food_url:
      "https://cdn.shopify.com/s/files/1/0348/7465/4764/products/KingsmillWholemealMediumBread_520x.png?v=1584487528",
    price: 1.75,
    user_id: 2,
    food_type: "Grocery",
  },
  {
    food_name: "ice-cream",
    description: "chocolate icre cream cone",
    food_url:
      "https://images.unsplash.com/photo-1590080962330-747c6aba8028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 3.0,
    user_id: 1,
    food_type: "Dessert",
    status: "Unavailable",
  },
  {
    food_name: "ice-cream",
    description: "chocolate ice cream cone with sprinkles",
    food_url:
      "https://images.unsplash.com/photo-1590080962330-747c6aba8028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 3.0,
    user_id: 4,
    food_type: "Dessert",
    status: "Unavailable",
  },
  {
    food_name: "ice-cream",
    description: "chocolate ice-cream cone",
    food_url:
      "https://images.unsplash.com/photo-1590080962330-747c6aba8028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 3.0,
    user_id: 4,
    food_type: "Dessert",
  },
  {
    food_name: "Cake",
    description: "Chocolate strawberry cake with scoop of ice-cream",
    food_url:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 12.0,
    user_id: 3,
    food_type: "Dessert",
    status: "Unavailable",
  },
  {
    food_name: "Chicken sandwich",
    description: "Chicken sandwich in a baguette with lettuce and tomatoes",
    food_url:
      "https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 4.0,
    user_id: 1,
    food_type: "Meal",
  },
  {
    food_name: "Beef Burger",
    description: "Double beef burger with lettuce and a slice of cheese",
    food_url:
      "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ3VlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 4.0,
    user_id: 2,
    food_type: "Meal",
  },
  {
    food_name: "Chicken Biryani",
    description:
      "a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy.",
    food_url:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 14.0,
    user_id: 3,
    food_type: "Meal",
  },
  {
    food_name: "Chicken Biryani",
    description:
      "a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy.",
    food_url:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 14.0,
    user_id: 1,
    food_type: "Meal",
  },
  {
    food_name: "Orange juice",
    description: "A carton of orange juice",
    food_url:
      "https://media.istockphoto.com/photos/orange-juice-glass-jar-shot-on-rustic-wooden-table-picture-id915657126?b=1&k=20&m=915657126&s=170667a&w=0&h=N5gBvWtUcAIPCtPYmjs13jzb0qykCWeWvsQUFIMnSak=",
    price: 2.0,
    user_id: 4,
    food_type: "Drink",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
