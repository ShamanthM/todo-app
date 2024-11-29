// db.js
const sql = require("mssql");
require("dotenv").config();  // Import dotenv to load variables from the .env file

// Create a pool of connections to the SQL Server using details from .env
const poolPromise = new sql.ConnectionPool({
  user: process.env.DB_USER,        // Database user from .env
  password: process.env.DB_PASSWORD,  // Database password from .env
  server: process.env.DB_SERVER,      // Database server from .env
  database: process.env.DB_DATABASE,  // Database name from .env
  options: {
    encrypt: true,                 // Use encryption
    trustServerCertificate: true,  // Trust the server certificate (for local development)
    enableArithAbort: true,        // Enable arithabort option
  },
  port: process.env.DB_PORT,        // Database port from .env
});

poolPromise.connect()
  .then(() => {
    console.log("Connected to SQL Server");
  })
  .catch((err) => {
    console.error("Error connecting to SQL Server:", err);
  });

module.exports = { poolPromise };
