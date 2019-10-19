const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, authChecker } = require("../controllers/AuthController");
const { registerLimiter, loginLimiter } = require("../utils/rateLimiter");

// Registers a new User
router.post("/register", registerLimiter, registerUser );

// Logs In a User, creates session in mongo store
// and returns a cookie containing sessionID, also called "session-id"
router.post("/login", loginLimiter, loginUser );

// Log out user by deleting session from store
// and deleting cookie on client side
// Needs cookie containing sessionID to be attached to request
router.delete("/logout", logoutUser );

// Check if user is Authenticated by reading session data
// Needs cookie containing sessionID
router.get("/authchecker", authChecker );

module.exports = router;