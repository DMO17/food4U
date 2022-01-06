const { WatchList } = require("../models");

const watchListData = [
  {
    user_id: 1,
    post_id: 3,
  },
  {
    user_id: 1,
    post_id: 4,
  },
  {
    user_id: 2,
    post_id: 1,
  },
  {
    user_id: 2,
    post_id: 2,
  },
];

const seedWatchList = () => WatchList.bulkCreate(watchListData);

module.exports = seedWatchList;
