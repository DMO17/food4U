const { Comment } = require("../models");

const commentData = [
  {
    comment: "Brown bread is okay i think, interested",
    user_id: 2,
    post_id: 2,
  },
  {
    comment: "ngl i could use some bread now lol",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
