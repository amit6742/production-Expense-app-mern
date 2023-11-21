const express = require("express");
const {
  loginController,

  registerController,
} = require("../controllers/userControllers");
//  router object

const router = express.Router();

// routers
// post || login
router.post("/login", loginController);

// post || registration
router.post("/register", registerController);

module.exports = router;
