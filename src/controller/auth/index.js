const {
  getPayloadWithValidFieldsOnly,
  isAllRequiredFieldsPresent,
} = require("../../helper");
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
  try {
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

    if (
      !isAllRequiredFieldsPresent(
        ["first_name", "last_name", "email", "username", "password"],
        payload
      )
    ) {
      return res.status(500).json({
        success: false,
        message: "Please Provide The Correct required Post Body Fields",
      });
    }

    const newUser = User.create(payload);
    return res.json({ success: true, data: newUser });
  } catch (error) {
    console.log(`[ERROR]: Create user failed | ${error.message}`);
    return res.status(500).json({
      success: false,
      error: `Failed to create user => ${error.message}`,
    });
  }
};

const logOut = (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        return res.json({ success: true, data: "successfully logged out" });
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "failed to log user out",
      });
    }
  } catch (error) {
    console.log(`[ERROR]: LogOut user failed | ${error.message}`);
    return res.status(500).json({
      success: false,
      error: `Failed to LogOut user => ${error.message}`,
    });
  }
};

module.exports = { login, signUp, logOut };
