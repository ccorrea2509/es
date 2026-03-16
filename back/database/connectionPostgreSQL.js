const { Pool } = require('pg'); // usar require, no import si tu proyecto es CommonJS

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'estatal',
  password: '123456',
  port: 5433,
});

module.exports = pool;

