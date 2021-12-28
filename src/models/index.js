const User = require("./User");
const FoodType = require("./FoodType");
const Post = require("./Post");
const Comment = require("./Comment");
const Activity = require("./Activity");
const Order = require("./Order");

// ----RELATIONSHIP ON POST TABLE----

//User and Post
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

// Post and FoodType
FoodType.hasMany(Post, { foreignKey: "food_type_id" });
Post.belongsTo(FoodType, { foreignKey: "food_type_id" });

// // Many to many relation through POST table
// User.belongsToMany(FoodType, {
//   through: {
//     model: Post,
//     unique: false,
//   },
// });

// FoodType.belongsToMany(User, {
//   through: {
//     model: Post,
//     unique: false,
//   },
// });

// ----RELATIONSHIP ON COMMENT TABLE----

// Post and Comment
Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

// User and Comment
User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

// // Many to many relation through Comment table
// User.belongsToMany(Post, {
//   through: {
//     model: Comment,
//     unique: false,
//   },
// });

// Post.belongsToMany(User, {
//   through: {
//     model: Comment,
//     unique: false,
//   },
// });

// ----RELATIONSHIP ON Order TABLE----

// Post and Comment
Post.hasMany(Order, { foreignKey: "post_id" });
Order.belongsTo(Post, { foreignKey: "post_id" });

// User and Comment
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

// // Many to many relation through MESSAGE table
// User.belongsToMany(Post, {
//   through: {
//     model: Message,
//     unique: false,
//   },
// });

// Post.belongsToMany(User, {
//   through: {
//     model: Message,
//     unique: false,
//   },
// });

// // ----RELATIONSHIP ON ACTIVITY TABLE----

// // Post and Activity
// Post.hasMany(Activity, { foreignKey: "post_id" });
// Activity.belongsTo(Post, { foreignKey: "post_id" });

// // User and Activity
// User.hasMany(Activity, { foreignKey: "user_id" });
// Activity.belongsTo(User, { foreignKey: "user_id" });

// Many to many relation through MESSAGE table
User.belongsToMany(Post, {
  through: {
    model: Activity,
    unique: false,
  },
});

Post.belongsToMany(User, {
  through: {
    model: Activity,
    unique: false,
  },
});

///////////
// module.exports = { Activity, Comment, FoodType, Message, Post, User };

module.exports = { User, FoodType, Post, Comment, Order, Activity };
