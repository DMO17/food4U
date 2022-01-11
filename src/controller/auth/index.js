const {
  getPayloadWithValidFieldsOnly,
  isAllRequiredFieldsPresent,
} = require("../../helper");
const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const errorMessage = "Failed to login";
    const postBody = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );

    if (Object.keys(postBody).length != 2) {
      console.log(`[ERROR]: ${errorMessage} | invalid fields`);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const appUser = await User.findOne({
      where: { email: postBody.email },
    });

    if (!appUser) {
      console.log(`[ERROR]: ${errorMessage} | user does not exist`);
      return res.status(401).json({
        success: false,
        message: errorMessage,
      });
    }

    const checkUserInputPassword = await appUser.validateUsersPassword(
      postBody.password
    );

    if (!checkUserInputPassword) {
      console.log(`[ERROR]: ${errorMessage} | invalid password`);
      return res.status(401).json({
        success: false,
        message: errorMessage,
      });
    }

    const userInfo = {
      id: appUser.get("id"),
      email: appUser.get("email"),
      username: appUser.get("username"),
      full_name: `${appUser.get("first_name")} ${appUser.get("last_name")}`,
    };

    req.session.save(() => {
      req.session.user === userInfo;
      req.session.loggedIn === true;

      return res.json({
        success: true,
        message: "Logged in successfully",
      });
    });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const signUp = async (req, res) => {
  try {
    const errorMessage = "Failed to signup";

    const payload = getPayloadWithValidFieldsOnly(
      [
        "first_name",
        "last_name",
        "email",
        "username",
        "password",
        // "location",
        "profile_url",
        "description",
        "phone_num",
      ],
      req.body
    );

    const checkAllRequiredField = isAllRequiredFieldsPresent(
      ["first_name", "last_name", "email", "username", "password"],
      payload
    );

    if (!checkAllRequiredField) {
      console.log(
        `[ERROR]: ${errorMessage} | Please Provide The Correct required Post Body Fields`
      );
      return res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }

    const newUser = await User.create(payload);
    return res.json({ success: true, data: newUser });
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const logOut = async (req, res) => {
  try {
    const errorMessage = "Failed to logout user";
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        return res.json({ success: true, message: "Successfully logged out" });
      });
    } else {
      return res.status(500).json({
        success: false,
        error: errorMessage,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: ${errorMessage} | ${error.message}`);
    return res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
};

module.exports = { login, signUp, logOut };
