const { User } = require("../models");

const userData = [
  {
    first_name: "Aaron",
    last_name: "Rodgers",
    username: "qb-packers12",
    email: "aaron12@gmail.com",
    password: "123456789",
    // phone_num: 12345678910,
    // location: "12 Earlslane n23 6xy ",
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
    password: "123456789",
    // phone_num: 15345678918,
    // location: "345 Chester avenue m16 7wk ",
    // profile_url: "",
    // description: "",
  },
  {
    first_name: "David",
    last_name: "Mills",
    username: "d.mills11",
    email: "dmills@gmail.com",
    password: "123456789",
    // phone_num: 15345678918,
    // location: "345 Chester avenue m16 7wk ",
    // profile_url: "",
    // description: "",
  },
  {
    first_name: "Lucy",
    last_name: "Bento",
    username: "luicialB22",
    email: "l.bento@gmail.com",
    password: "123456789",
    // phone_num: 15345678918,
    // location: "345 Chester avenue m16 7wk ",
    // profile_url: "",
    // description: "",
  },
  {
    first_name: "Me",
    last_name: "Myself",
    username: "memyselfi",
    email: "me@gmail.com",
    password: "123456789",
    // phone_num: 15345678918,
    // location: "345 Chester avenue m16 7wk ",
    // profile_url: "",
    // description: "",
  },
];

const seedUsers = async () => {
  const promises = userData.map((user) => User.create(user));
  await Promise.all(promises);
};

module.exports = seedUsers;
