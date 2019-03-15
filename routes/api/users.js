const router = require("express").Router();

// @route GET api/users
// @desc  Get users
// @access Public
router.get("/test", (req, res) => res.json({ msg: "hello" }));

module.exports = router;
