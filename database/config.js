require("dotenv").config();

const defaultConfig = {
  username: process.env.DB_USER | "root",
  password: process.env.DB_PASS | null,
  host: process.env.DB_HOST | "127.0.0.1",
  dialect: process.env.DB_DIALECT | "mysql",
  operatorsAliases: false
};

module.exports = {
  development: {
    ...defaultConfig,
    database: "sella_dev"
  },
  test: {
    ...defaultConfig,
    database: "sella_test"
  },
  production: {
    ...defaultConfig,
    database: "sella_prod"
  }
};
