const express = require("express");
const router = express.Router();
const { signupUser, signinUser, logoutUser, authCheck } = require("../controllers/UserController");
const { auth } = require("../middleware/auth");

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.get("/logout", logoutUser);
router.get("/authcheck", auth, authCheck);

module.exports = router;