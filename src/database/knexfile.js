require('dotenv').config();

const connectionData = {
  client: 'mssql',
  connection: {
    server: 'serversenalestransito.database.windows.net',
    user: 'root123',
    password: 'Admin123',
    options: {
      port: 1433,
      database: 'dbSenalesTransito',
      encrypt: true
    }
  }
};

module.exports = connectionData;
