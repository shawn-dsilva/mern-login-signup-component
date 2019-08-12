const { DB_USERNAME,DB_PASSWORD,DB_CLUSTER } = require("./config");

module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${
    process.env.DB_CLUSTER
  }.mongodb.net/test?retryWrites=true&w=majority`
};
