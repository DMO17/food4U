const { FoodType } = require("../models");

const foodTypeData = [
  {
    food_type: "Meal",
  },
  {
    food_type: "Grocery",
  },
  {
    food_type: "Desert",
  },
];

const seedFoodType = () => FoodType.bulkCreate(foodTypeData);

module.exports = seedFoodType;
