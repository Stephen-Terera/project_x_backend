const createConnection = require('./connect.js');

const connection = createConnection();

function checkUserCreds(){

}

function getUserInfo() {
    console.log("HI");

}

function changeUserInfo(){

}

function logout(){

}


connection.query('SELECT * FROM your_table', (err, results) => {
  if (err) throw err;
  console.log(results);
});
