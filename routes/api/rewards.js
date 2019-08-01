const router = require("express").Router();
const rewardsController = require("../../controllers/rewardsController");

router.route("/")
.get(rewardsController.findAll)
.post(rewardsController.create)

router.route("/:id")
.get(rewardsController.findById)
.put(rewardsController.updateById)
.delete(rewardsController.remove);

router.route("/level/:level")
.get(rewardsController.getLevelChore)
.put(rewardsController.update)
.delete(rewardsController.remove)
.post(rewardsController.create)





module.exports = router;