const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// User model
const User = require("../models/User");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // basic validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    });

    //Create session instance on data store
    const sessUser = { id: user.id, name: user.name, email: user.email };
    req.session.user = sessUser; // Auto saves session data in mongo store

    res.json({ sessUser });// sends cookie with sessionID automatically in response
  });
});

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;

  // Check required fields
  if (!name || !email || !password || !password2) {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(password2);

    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check passwords match
  if (password !== password2) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  //Check password length
  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Password should be atleast 6 characters long" });
  }

  // Check for existing user
  User.findOne({ email: email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    //New User created
    const newUser = new User({
      name,
      email,
      password
    });

    //Password hashing
    bcrypt.genSalt(12, (err, salt) =>
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        // Save user
        newUser
          .save()
          .then()
          .catch((err) => console.log(err));
      })
    );
  });
});

router.get("/logout", (req, res) => {

  // Log out user by deleting session from store
  // Needs cookie containing sessionID to be attached to request
  req.session.destroy((err) => { // delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");

  });
});


module.exports = router;
