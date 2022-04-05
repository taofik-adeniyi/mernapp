const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  patchGoal,
} = require("../controllers/goalController");

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal).patch(patchGoal)

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

// router.patch("/:id", patchGoal);

module.exports = router;
