require("dotenv").config();
const express = require("express");
const session = require("express-session");

const app = express()
const PORT = process.env.PORT;


app.use(session({

}));
app.listen(PORT, () => console.log(
  `http://localhost:${PORT}`
  ))