const express = require("express");
const session = require("express-session");

const app = express();
const { HOST,PORT } = require("./config/config");

const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours

app.use(
  session({
    cookie: {
      maxAge: MAX_AGE,
      sameSite: true
    }
  })
);

app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`));
