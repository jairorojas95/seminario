require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST, DB_SCHEMA } = process.env;

const connectionData = {
  client: 'mssql',
  connection: {
    server: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    options: {
      port: 1433,
      database: DB_SCHEMA,
      encrypt: true
    }
  }
};

module.exports = connectionData;
