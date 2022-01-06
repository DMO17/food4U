const connection = require("../config/connection");
const seedComments = require("./comment");
const seedFoodType = require("./foodType");
const seedOrders = require("./order");
const seedPosts = require("./post");
const seedUsers = require("./user");
const seedWatchList = require("./watchList");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedFoodType();
  console.log("\n----- FOOD TYPE SEEDED -----\n");

  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedOrders();
  console.log("\n----- ORDERS SEEDED -----\n");

  await seedWatchList();
  console.log("\n----- WatchList SEEDED -----\n");

  process.exit(0);
};

seedAll();
