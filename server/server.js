const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'peasa23??',
  database: 'peasa'
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // Create a table called customers: 

  //let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

  //connection.query(sql, function (err, result) { if (err) throw err; console.log("Table created"); });
});

// Expose the table in an API endpoint:


const express = require('express');

const app = express();

app.get('/testing', function (req, res) { connection.query('SELECT * FROM testing', function (error, results, fields) { if (error) throw error; res.send(results); }); });


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})
