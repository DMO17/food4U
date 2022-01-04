const connection = require("../config/connection");
const seedComments = require("./comment-seeds");
const seedFoodType = require("./foodType-seeds");
const seedOrders = require("./order-seed");
const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");

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

  process.exit(0);
};

seedAll();
