const router = require("express").Router();
const noteRoutes = require("./notes");

router.use("/note", noteRoutes);

module.exports = router;