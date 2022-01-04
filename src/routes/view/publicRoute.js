const { Router } = require("express");
const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
} = require("../../controller/view/public-controller");

const router = Router();

router.use("/home", renderHomePage);
router.use("/login", renderLoginPage);
router.use("/signup", renderSignUpPage);

module.exports = router;
