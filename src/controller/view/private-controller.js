const { User, Post } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const data = await Post.findAll({
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = {
      loggedIn,
      posts: data.map((posts) => posts.get({ plain: true })),
    };

    console.log(serializedData);

    res.render("dashboard", serializedData);
  } catch (error) {
    const errorMessage = "Failed to render dashboard data";
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    // return res.status(500).json({
    //   success: false,
    //   message: errorMessage,
    // });
  }
};

const renderFoodPostById = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const username = req.session.user.username;

    const { postId } = req.params;

    const foodPostData = await Post.findAll({
      where: { uuid: postId },
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = {
      loggedIn,
      posts: foodPostData.map((posts) => posts.get({ plain: true }))[0],
      // foodPostData,
    };

    console.log(serializedData);

    // if (!blogData) {
    //   return res.render("no-blog");
    // }

    return res.render("food-post", serializedData);
  } catch (error) {
    console.log(error.message);
  }
};

const renderFoodPostForm = (req, res) => {
  res.render("create-food-post");
};

const renderOrderForm = (req, res) => {
  res.render("order-form");
};

const renderProfilePage = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const data = await Post.findAll({
      where: { user_id: req.session.user.id },
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = {
      loggedIn,
      posts: data.map((posts) => posts.get({ plain: true })),
      userInfo: {
        name: req.session.user.full_name,
        location: req.session.user.location,
        profileUrl: req.session.user.profileImg,
      },
    };

    // console.log(serializedData);

    console.log(req.session.user.profileImg);

    res.render("profile-page", serializedData);
  } catch (error) {
    const errorMessage = "Failed to render profile data";
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    // return res.status(500).json({
    //   success: false,
    //   message: errorMessage,
    // });
  }
};

const renderProfilePosts = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const data = await Post.findAll({
      where: { user_id: req.session.user.id },
      include: [{ model: User }],
      // raw: true,
    });

    const serializedData = {
      loggedIn,
      posts: data.map((posts) => posts.get({ plain: true })),
      userInfo: {
        name: req.session.user.full_name,
        location: req.session.user.location,
        profileUrl: req.session.user.profileImg,
      },
    };

    // console.log(serializedData);

    console.log(req.session.user.profileImg);

    res.render("profile-posts", serializedData);
  } catch (error) {
    const errorMessage = "Failed to render profile data";
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    // return res.status(500).json({
    //   success: false,
    //   message: errorMessage,
    // });
  }
};

const renderProfileOrders = (req, res) => {
  res.render("profile-orders");
};

const renderWatchList = (req, res) => {
  res.render("watch-list");
};

const renderInbox = (req, res) => {
  res.render("inbox");
};

module.exports = {
  renderDashboard,
  renderFoodPostById,
  renderFoodPostForm,
  renderOrderForm,
  renderProfilePage,
  renderProfileOrders,
  renderProfilePosts,
  renderWatchList,
  renderInbox,
};
