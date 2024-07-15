const express = require("express");
const {
  handleCreateNewUsers,
  handleLoginUsers,
} = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleCreateNewUsers);
router.post("/login", handleLoginUsers);

module.exports = router;
