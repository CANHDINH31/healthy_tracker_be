const express = require("express");
const router = express.Router();

const {
  create,
  list,
  update,
  findById,
  deleteById,
} = require("../controllers/form.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").get(asyncMiddelware(findById));
router.route("/:id").delete(asyncMiddelware(deleteById));
router.route("/").post(asyncMiddelware(create));
router.route("/").get(asyncMiddelware(list));

module.exports = router;