const { User } = require("../models");

const userData = [
  {
    first_name: "Aaron",
    last_name: "Rodgers",
    username: "qb-packers12",
    email: "aaron12@gmail.com",
    password: "imabadman12",
    // phone_num: 12345678910,
    city: "London",
    location: "12 Earlslane n23 6xy ",
    profile_url:
      "https://whatsondisneyplus.com/wp-content/uploads/2021/09/bart-.png",
    description:
      "Bart is the mischievous, rebellious, misunderstood, disruptive and potentially dangerous oldest child.",
  },
  {
    first_name: "Patrick",
    last_name: "Mahamoes",
    username: "mahomeboy15",
    email: "15kcpat@gmail.com",
    password: "kelcetyreek",
    // phone_num: 15345678918,
    city: "Manchester",
    location: "345 Chester avenue m16 7wk ",
    // profile_url: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
