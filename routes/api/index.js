const router = require("express").Router();
const choreRoutes = require("./chores");
const rewardRoutes = require("./rewards");

router.use("/chores", choreRoutes);
router.use("/rewards", rewardRoutes)

module.exports = router