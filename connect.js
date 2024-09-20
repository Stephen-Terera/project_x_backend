const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: '172.17.0.2', // or your MySQL container IP address
  user: 'myuser',
  password: 'rootpassword',
  database: 'mydatabase'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = createConnection;