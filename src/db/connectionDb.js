const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "2504",
  database: "softjobs",
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = pool;
