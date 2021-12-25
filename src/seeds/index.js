const connection = require("../config/connection");
const seedFoodType = require("./foodType-seeds");
const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedFoodType();
  console.log("\n----- FoodType SEEDED -----\n");

  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");

  //   await seedProducts();
  //   console.log("\n----- PRODUCTS SEEDED -----\n");

  //   await seedTags();
  //   console.log("\n----- TAGS SEEDED -----\n");

  //   await seedProductTags();
  //   console.log("\n----- PRODUCT TAGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
