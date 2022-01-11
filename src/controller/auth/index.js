const { getPayloadWithValidFieldsOnly } = require("../../helper");
const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const postBody = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );

    if (Object.keys(postBody).length != 2) {
      return res.json({
        success: false,
        message: "Please Provide The Correct Post Body Fields",
      });
    }

    const appUser = await User.findOne({
      where: { email: postBody.email },
    });

    if (!appUser) {
      return res.json({
        success: false,
        message: `An Account with the email ${postBody.email} Doesn't Exist`,
      });
    }

    const checkUserInputPassword = await appUser.validateUsersPassword(
      postBody.password
    );

    if (!checkUserInputPassword) {
      return res.json({
        success: false,
        message: `Incorrect Password, Your Not Authorized to Access this Account`,
      });
    }

    const userInfo = {
      id: appUser.get("id"),
      email: appUser.get("email"),
      username: appUser.get("username"),
      id: appUser.get("id"),
      full_name: `${appUser.get("first_name")} ${appUser.get("last_name")}`,
    };

    req.session.save(() => {
      req.session.user === userInfo;
      req.session.loggedIn === true;

      return res.json({
        success: true,
        message: "Logged in Successfully",
        data: req.session.user,
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `Failed To Log in => ${error.message}`,
    });
  }
};

const signUp = (req, res) => {
  res.json({ message: "signUp" });
};

const logOut = (req, res) => {
  res.json({ message: "logOut" });
};

module.exports = { login, signUp, logOut };
