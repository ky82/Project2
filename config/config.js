require("dotenv").config();
const config = {
  development: {
      username: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DATABASE,
      host: process.env.DB_LOCAL_HOSTNAME,
      dialect: "mysql"
  },
  test: {
      username: process.env.DB_TEST_USER,
      password: process.env.DB_TEST_PASSWORD,
      database: process.env.DB_TEST_DATABASE,
      host: process.env.DB_TEST_HOSTNAME,
      dialect: "mysql"
  },
  //Note: this is a spoiler for how to configure for Heroku ;)
  production: {
      use_env_variable: "JAWSDB_URL",
      dialect: "mysql"
  }
};
module.exports = config;