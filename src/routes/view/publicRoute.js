const { Router } = require("express");
const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
} = require("../../controller/view/public-controller");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/sign-up", renderSignUpPage);
router.get("/", renderHomePage);

module.exports = router;
