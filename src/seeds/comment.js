const { Comment } = require("../models");

const commentData = [
  {
    comment: "[food post 2 by user 1] => [comment by user 2] [white bread]",
    user_id: 2,
    post_id: 2,
  },
  {
    comment: "[food post 3 by user 2] => [comment by user 1] [ice cream]",
    user_id: 1,
    post_id: 3,
  },
  {
    comment: "[food post 2 by user 1] => [comment by user 1] [white bread]",
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
