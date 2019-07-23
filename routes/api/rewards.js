const router = require("express").Router();
const rewardsController = require("../../controllers/rewardsController");

router.route("/")
.get(rewardsController.findAll)
.post(rewardsController.create);

router.route("/:id")
.get(rewardsController.findById)
.put(rewardsController.update)
.delete(rewardsController.remove);

router.route("/level/:level")
.get(rewardsController.getLevel);

module.exports = router;