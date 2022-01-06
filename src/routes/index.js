const { Router } = require("express");

const viewRoutes = require("./view");
const apiRoutes = require("./api");

const router = Router();

router.use("/", viewRoutes);
router.use("/api", apiRoutes);

module.exports = router;
