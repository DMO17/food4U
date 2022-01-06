const { Router } = require("express");

const viewRoutes = require("./view");
const apiRoutes = require("./api");
const authRoutes = require("./auth");

const router = Router();

router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
