const User = require("./User");
const FoodType = require("./FoodType");
const Post = require("./Post");
const Comment = require("./Comment");
const Order = require("./Order");
const WatchList = require("./WatchList");

// ----RELATIONSHIP ON POST TABLE----

//User and Post
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

// Post and FoodType
FoodType.hasMany(Post, { foreignKey: "food_type_id" });
Post.belongsTo(FoodType, { foreignKey: "food_type_id" });

// ----RELATIONSHIP ON COMMENT TABLE----

// Post and Comment
Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

// User and Comment
User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

// ----RELATIONSHIP ON Order TABLE----

// Post and Comment
Post.hasMany(Order, { foreignKey: "post_id" });
Order.belongsTo(Post, { foreignKey: "post_id" });

// User and Comment
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

// RELATIONSHIP ON WATCH LIST TABLE

// post and watch list
Post.hasMany(WatchList, { foreignKey: "post_id" });
WatchList.belongsTo(Post, { foreignKey: "post_id" });

// User and watch list
User.hasMany(WatchList, { foreignKey: "user_id" });
WatchList.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User, FoodType, Post, Comment, Order, WatchList };
